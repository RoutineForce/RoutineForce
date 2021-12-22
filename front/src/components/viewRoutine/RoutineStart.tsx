import React from 'react';
import Certifications from './Certifications';
import UserProfile from './UserProfile';
import {Accordion, useAccordionButton} from 'react-bootstrap';
import '../../CSS/viewRoutine/RoutineStart.css';

function CustomToggle({eventKey}: any) {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <img
      className="spread"
      src={'./icons/spread.png'}
      onClick={decoratedOnClick}
    />
  );
}

export default function RoutineStart(): JSX.Element {
  // paybackMoney = Math.floor((금액 / 일정.length * (일정.length - 실패횟수))/ 10) * 10
  // 10단위로 버림
  // Accordion ActiveKey 접는 게 우선이라면 1, <참가자의 경우만 0, 나머지는 1> <관리자의 경우는 모조리 0>
  return (
    <div className="Participant">
      <Accordion className="wow" defaultActiveKey="1">
        <div className="User">
          {/* 유저에 대한 정보 받기 */}
          <UserProfile />
          <div className="ReturnMoney">
            <img className="MoneyImage" src={'./icons/iconsReverseMoney.png'} />
            <div className="Money">20,000원</div>
          </div>
          <CustomToggle eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="certificationPasing">
              <div className="uploadImg">
                <Certifications />
              </div>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
}
