import React from 'react';
import LikedRoutine from '../../components/profile/likedRoutine';
import Navbarc from '../../components/common/Navbar';

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
  return (
    <>
      <Navbarc />
      <LikedRoutine {...likedRoutine} />
    </>
  );
}
