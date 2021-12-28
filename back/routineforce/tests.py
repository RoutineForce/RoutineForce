import pytest
import factory.fuzzy
import requests_mock

from routineforce.models import User


user_base_url = 'user'
user_list_url = f'{user_base_url}-list'


class UserFactory(factory.django.DjangoModelFactory):
    uid = factory.Faker('pystr', max_chars=20)
    provider = factory.Faker('pystr', max_chars=10)
    name = factory.Faker('pystr', max_chars=20)
    email = None
    image_path = None

    class Meta:
        model = User


@pytest.mark.django_db
def test_그냥_접속하면_모든_데이터를_받는다(tp_api):
    UserFactory.create_batch(size=10)
    params = {
        # 'offset': 0,
        # 'limit': 5,
        'page': 1,
        'limit': 5,
    }
    res = tp_api.get(user_list_url, data=params)
    tp_api.response_200(res)
    data = res.json()
    # assert data['count'] == params['limit']

@pytest.fixture
def http_fixture():
    data_42_auth = {
        'access_token': 'token-token'
    }
    data_42_me = {
        'uid': '1234',
        'provider': 'T0101',
        'name' : 'asdfadsfasd',
        'email': 'asfasd@asd.net',
        'image_url': None,
    }

    mock = requests_mock.mock()
    mock.register_uri(
        'POST',
        'https://api.intra.42.fr/oauth/token',
        json=data_42_auth,
        # status_code=500,
        # real_http=True,
    )
    mock.register_uri(
        'GET',
        'https://api.intra.42.fr/v2/me',
        json=data_42_me,
    )
    return {
        'mock': mock,
        'T0101': {  # 42
            'auth': data_42_auth,
            'userinfo': data_42_me,
        }
    }


@pytest.mark.parametrize(
    'provider',
    ['T0101'],
)
@pytest.mark.django_db
def test_create_user_successfully(tp_api, http_fixture, provider):
    mock = http_fixture['mock']
    res_data = http_fixture[provider]

    payload = {
        'code': 'hello-world',
        'provider': provider,
    }
    with mock:
        res = tp_api.post('/login', data=payload)
    # tp_api.response_200(res)
    assert res.status_code == 500
    data = res.json()
#    assert data['error'] == 'provider-500'

    # user = User.objects.get(uid=res_data['userinfo']['id'], login=provider)
    # data = res.json()
    # assert 'token' in data
    # assert user.uid == res_data['userinfo']['id']


@pytest.mark.parametrize(
    'payload',
    [
        {},
        {'code': 'hello'},
    ]
)
@pytest.mark.django_db
def test_create_user_failed(tp_api, payload):
    res = tp_api.post('/login', data=payload)
    tp_api.response_400(res)
