import requests
import json

kakao_client_id = "f66e6d35b3ee3738bacd5d21725ad7e4"
ft_client_id = "15e2658f0c4543426177bb0fea20fa9ae5303f23865aeb77c47234942c7f8586"
ft_client_secret = "25c4f6afbb14b26156a28073b4c5b331daaf6dd973ef639f1b91e5ffd674de9e"
google_client_id = "648482498741-fbuop5vc41b6bc410hlkj2b0cos00dhf.apps.googleusercontent.com"
google_client_secret = "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"
naver_client_id = "uiPO4zhIB65vyJxZIaOT"
naver_client_secret = "pbT98KLjBv"
kakao_redirect_uri = "http://localhost:3000/loginreturn/kakao"
ft_redirect_uri = "http://localhost:3000/loginreturn/42"
google_redirect_uri = "http://localhost:3000/loginreturn/google"
naver_redirect_uri = "http://localhost:3000/loginreturn/naver"

class Provider():
    def fortytwo(self, code):
        files = {
            'grant_type': (None, 'authorization_code'),
            'client_id': (None, f'{ft_client_id}'),
            'client_secret': (None, f'{ft_client_secret}'),
            'code': (None, f'{code}'),
            'redirect_uri': (None, f'{ft_redirect_uri}'),
        }
        token_response = requests.post('https://api.intra.42.fr/oauth/token', files=files)
        #print(token_response.text)
        token_response_json = token_response.json()
        access_token = token_response_json.get("access_token")
        headers = {
                'Authorization': f'Bearer {access_token}',
        }
        response = requests.get('https://api.intra.42.fr/v2/me', headers=headers)
        response_json = response.json()
        #print(response_json)
        ft_id = response_json.get("id")
        ft_name = response_json.get("login")
        ft_email = response_json.get("email")
        image_path = response_json.get("image_url")
        userdata = {
            'id': ft_id,
            'name': ft_name,
            'email': ft_email,
            'image_path': image_path
        }
        return userdata;
    def kakao(self, code):
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        data = {
            'grant_type': 'authorization_code',
            'client_id': f'{kakao_client_id}',
            'redirect_uri': f'{kakao_redirect_uri}',
            'code': f'{code}',
        }
        token_response = requests.post('https://kauth.kakao.com/oauth/token', headers=headers, data=data)
        response_json = token_response.json()
        access_token = response_json.get("access_token")
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': f'Bearer {access_token}',
        }

        data = {
            'property_keys': '["properties.nickname", "properties.profile_image", "kakao_account.email"]'
        }
            
        kakao_response = requests.post('https://kapi.kakao.com/v2/user/me', headers=headers, data=data)
        kakao_response_json = kakao_response.json()
        print(kakao_response.text)
        kakao_id = kakao_response_json.get("id")
        kakao_properties = kakao_response_json.get("properties")
        #test = kakao_response_json.get("profile")
        kakao_account = kakao_response_json.get("kakao_account")
        kakao_name = kakao_properties.get("nickname")
        image_path = kakao_properties.get("profile_image")
        kakao_email = kakao_account.get("email")
        userdata = {
                'id': kakao_id,
                'name': kakao_name,
                'email': kakao_email,
                'image_path': image_path
        }
        return userdata;
    def naver(self, code):
        data = {
                'grant_type': 'authorization_code',
                'client_id': f'{naver_client_id}',
                'client_secret' : f'{naver_client_secret}',
                'code': f'{code}',
                'state': "state_parameter_passthrough_value"
        }
        token_response = requests.post('https://nid.naver.com/oauth2.0/token', data=data)
        print(token_response.text)
        token_response_json = token_response.json()
        access_token = token_response_json.get("access_token")
        headers = {
                'Authorization': f'Bearer {access_token}'
        }
        naver_response = requests.post('https://openapi.naver.com/v1/nid/me', headers=headers)
        #print(naver_response.text)
        naver_response_json = naver_response.json()
        #print(naver_response_json)
        response = naver_response_json.get("response")
        naver_id = response.get("id")
        naver_name = response.get("name")
        naver_email = response.get("email")
        image_path = response.get("profile_image")
        userdata = {
                'id': naver_id,
                'name':naver_name,
                'email':naver_email,
                'image_path':image_path
        }
        return userdata;
