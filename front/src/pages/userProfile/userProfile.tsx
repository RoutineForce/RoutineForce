import React, {useEffect, useState} from 'react';
import LikedRoutine from '../../components/profile/likedRoutine';
import Navbarc from '../../components/common/Navbar';
import {Icon, Image} from 'semantic-ui-react';
import '../../CSS/pages/userProfile.css';

const likedRoutine = [
  {
    routineId: '0',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '[1004기]RunAndLead',
    text: '매일매일 달리기 얼마나 달릴지는 당신이 정해봐요 어디까지 길이를 표현할 수 있는지 이제 말을 해볼게요 한번 들어보실래요?',
    timeText: '1.20 ~ 1.25',
    location: 'gaepo',
    participant: '(3/33)',
    remain: 0,
  },
  {
    routineId: '1',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?\n 무슨 그림그릴래요',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 2,
  },
  {
    routineId: '2',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 3,
  },
  {
    routineId: '3',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 10,
  },
  {
    routineId: '4',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 0,
  },
];
export default function UserProfile(): JSX.Element {
  const [stat, setStat] = useState('');
  const handleSetStat = (StatName: string) =>
    useEffect(() => {
      console.log(stat);
      setStat(StatName);
    });
  const routineCardViews = (Tag: string) => {
    if (Tag === 'liked') return null;
    else return likedRoutine;
  };
  return (
    <>
      {stat !== '' ? (
        <LikedRoutine
          name={stat}
          RoutineCards={routineCardViews(stat)}
          onChange={(value: string) => handleSetStat(value)}
        />
      ) : (
        <>
          <Navbarc />
          <div className="profile">
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            />
            <div className="UserProfile">jaewpark</div>
          </div>
          <div className="likedRoutine">
            <div className="header">
              <div className="title">
                <Icon color="orange" size="big" name="like" />
                찜한 루틴
              </div>
              <div className="moreView" onClick={() => setStat('liked')}>
                더보기
                <Icon name="angle right" />
              </div>
            </div>
            <div className="header">
              <div className="title">
                <Icon color="orange" size="big" name="thumbtack" />
                참여중인 루틴
              </div>
              <div className="moreView" onClick={() => setStat('attended')}>
                더보기
                <Icon name="angle right" />
              </div>
            </div>
            <div className="header">
              <div className="title">
                <Icon color="orange" size="big" name="trophy" />
                진행중인 루틴
              </div>
              <div className="moreView" onClick={() => setStat('proceeded')}>
                더보기
                <Icon name="angle right" />
              </div>
            </div>
            <div className="header">
              <div className="title">
                <Icon color="orange" size="big" name="lock" />
                <div>완료된 루틴</div>
              </div>
              <div className="moreView" onClick={() => setStat('completed')}>
                더보기
                <Icon name="angle right" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
