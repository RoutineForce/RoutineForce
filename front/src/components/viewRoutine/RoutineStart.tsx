import React, {useState} from 'react';
import PictureUpload from './pictureUpload';
import ImagePicker from './SlideCertification';
import {Accordion, Card, useAccordionButton} from 'react-bootstrap';
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
          <div className="UserInfo">
            <img className="UserProfile" src={'./testTitleBackground1.jpeg'} />
            <div className="UserName">jaewpark</div>
          </div>
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
                <ImagePicker />
              </div>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
}
