import React from 'react';
import '../../CSS/viewRoutine/RoutineHeader.css';
import {BrowserView, MobileView} from 'react-device-detect';
import {Label} from 'semantic-ui-react';

// prop => routine index
// data => 타이틀, 장소, 시작일, 인증 시간(빠른), 이미지
export default function RoutineHeader() {
  return (
    <>
      <BrowserView className="summarizedInfo">
        <img
          className="routineBackground"
          src={'./testTitleBackground1.jpeg'}
        />
        <div className="summarizedName">[10기]Run and lead</div>
        <div className="summarizedPlaceAndDate">
          <div className="summarizedPlace">장소</div>
          <div className="place">온라인</div>
          <div className="summarizedStartDate">시작일</div>
          <div className="startDate">11.29(월) 오전 6시 30분</div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="MobileView">
          <img
            className="RoutineBackgroundImage"
            src={'./testTitleBackground1.jpeg'}
          />
          <div className="RoutineHeader">
            <Label className="label" ribbon>
              <div>Health</div>
            </Label>
            <div className="RoutineTitle">[13기] Run and lead</div>
            <div className="Body">
              <div className="Location">장소</div>
              <div className="RoutineLocation">온라인</div>
              <div className="StartDate">시작일</div>
              <div className="RoutineStartDate">11.29(월) 오전 6시 30분</div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
}
