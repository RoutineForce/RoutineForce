import React, {useState} from 'react';
import '../../CSS/viewRoutine/ParticipateRoutine.css';

export default function ParticipateRoutine() {
  const Participant = ['sohan', 'honlee', 'jaewpark'];
  const maxPeople = 4;
  const [currentPeople, setCurrentPeople] = useState(Participant.length);
  const [userStatus, setUserStatus] = useState('');
  const remainPeople = '' + currentPeople + '명 / ' + '' + maxPeople + '명';
  const statusData = {
    full: {
      style: 'full',
      title: '모집 완료',
      icon: './icons/iconLightning.png',
      color: '#757575',
    },
    nothing: {
      style: 'nothing',
      title: '참여 신청 가능',
      icon: './icons/iconClick.png',
      color: '#f76d37',
    },
    participainting: {
      style: 'full',
      title: '참여 중',
      icon: './icons/iconLightning.png',
      color: '#757575',
    },
  };

  let statValue = statusData.nothing;
  switch (userStatus) {
    case 'participainting':
      statValue = statusData.participainting;
      break;
    case 'full':
      statValue = statusData.full;
      break;
  }
  if (!(currentPeople < maxPeople)) statValue = statusData.full;

  const increaseParticipant = () => {
    setCurrentPeople(currentPeople + 1);
    setUserStatus('participainting');
  };

  const decreaseParticipant = () => {
    setCurrentPeople(currentPeople - 1);
    setUserStatus('');
  };

  return (
    <>
      <div
        className="statusBox"
        style={{backgroundColor: statValue.color}}
        onClick={
          userStatus === 'participainting'
            ? decreaseParticipant
            : increaseParticipant
        }
      >
        <div className="statusTitle">{statValue.title}</div>
        <img className="icon" src={statValue.icon} />
        <div className="remainPeople">{remainPeople}</div>
      </div>
    </>
  );
}
