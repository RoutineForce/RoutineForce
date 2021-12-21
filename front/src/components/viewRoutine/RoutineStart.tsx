import React from 'react';
import Certifications from './Certifications';
import UserProfile from './UserProfile';
import {Accordion, useAccordionButton} from 'react-bootstrap';
import '../../CSS/viewRoutine/RoutineStart.css';

function CustomToggle({children, eventKey}: any) {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <img
      className="spread"
      src={'./icons/spread.png'}
      onClick={decoratedOnClick}
    >
      {children}
    </img>
  );
}

export default function RoutineStart(): JSX.Element {
  return (
    <div className="Participant">
      <Accordion className="wow" defaultActiveKey="0">
        <div className="User">
          {/* 유저에 대한 정보 받기 */}
          <UserProfile />
          <div className="secondRow">
            <div className="ReturnMoney">
              <img
                className="MoneyImage"
                src={'./icons/iconsReverseMoney.png'}
              />
              <div className="Money">20,000원</div>
            </div>
          </div>
          <div className="thirdRow">
            <CustomToggle eventKey="0" />
          </div>
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
