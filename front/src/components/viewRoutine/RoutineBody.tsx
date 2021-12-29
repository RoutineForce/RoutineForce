import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import IconModal from '../common/IconModal';
import {Calendar, DateObject} from 'react-multi-date-picker';
import '../../CSS/viewRoutine/RoutineBody.css';

export default function RoutineBody() {
  const dates = [
    new DateObject({year: 2021, month: 12, day: 17}),
    new DateObject({year: 2021, month: 12, day: 7}),
    new DateObject({year: 2021, month: 12, day: 8}),
    new DateObject({year: 2021, month: 12, day: 9}),
    new DateObject({year: 2021, month: 12, day: 15}),
    new DateObject({year: 2021, month: 12, day: 13}),
    new DateObject({year: 2021, month: 12, day: 14}),
    new DateObject({year: 2021, month: 12, day: 10}),
    new DateObject({year: 2021, month: 12, day: 16}),
    new DateObject({year: 2021, month: 12, day: 6}),
    new DateObject({year: 2022, month: 1, day: 7}),
  ];

  const currentDate = dates.sort()[0];
  const routineMoney = ' 20000원';

  return (
    <>
      <BrowserView></BrowserView>
      <MobileView>
        <div className="RoutineInfo">
          <div className="title">자세한 정보</div>
          <div className="Icons">
            <IconModal
              icon="calendar check outline"
              name="일 정"
              body={
                <>
                  <div style={{display: 'inline-block'}}>
                    <Calendar
                      className="orange"
                      currentDate={currentDate}
                      multiple
                      value={dates}
                      sort
                      readOnly
                      showOtherDays
                    />
                  </div>
                  <p>첫번째 인증 시간 = 6:00 ~ 6:30</p>
                  <p>두번째 인증 시간 = 6:00 ~ 6:30</p>
                </>
              }
            />
            <IconModal
              icon="map outline"
              name="장 소"
              header="장소"
              body="온라인"
            />
            <IconModal
              icon="users"
              name="참가맴버"
              header="참자맴버"
              body="asdasdasd"
            />
            <IconModal
              icon="won"
              name="참가비용"
              header="참가비용"
              body={
                <>
                  <img src={'./icons/iconsReverseMoney.png'} height="30px" />
                  {routineMoney}
                  <p>(금액 차감 관련 설명 필요)</p>
                </>
              }
            />
          </div>
        </div>
      </MobileView>
    </>
  );
}
