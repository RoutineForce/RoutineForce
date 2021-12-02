import React, {useState} from 'react';
import {Calendar, DateObject} from 'react-multi-date-picker';
import CenterModalButton from './modalButton';
import 'react-multi-date-picker/styles/colors/teal.css';

export default function RoutineDetail(): JSX.Element {
  // 1. 체크된 달력 구현
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

  // 2. 참가자 명단
  const participants = ['jaewpark', 'honlee', 'sohan'];
  // 3. 디자인 버튼
  // 4. detailedRoutine (이후 시작이 되고 나서 접어두거나 새로운 탭형식)

  return (
    <div className="routineDetail">
      <div className="summarizedInfoBox">
        <div className="summarizedInfo">
          {/* <img src={'./이미지 데이터'} /> */}
          <p className="summarizedName">[10기]Run and lead</p>
          <div className="summarizedPlaceAndDate">
            <div>
              <p className="summarizedPlace">장소</p>
            </div>
            <div>
              <p className="place">온라인</p>
            </div>
            <div>
              <p className="summarizedStartDate">시작일</p>
            </div>
            <div>
              <p className="startDate">11.29(월) 오전 6시 30분</p>
            </div>
          </div>
        </div>
      </div>
      <div className="summarizedCalenderAndParticipants">
        <div className="summarizedCalender">
          <CenterModalButton
            button="루틴 일정"
            header="루틴 일정"
            body={
              <Calendar
                className="teal"
                currentDate={currentDate}
                multiple
                value={dates}
                sort
                readOnly
                showOtherDays
              />
            }
          />
        </div>
        <div className="summarizedParticipants">
          <CenterModalButton
            button="참가자 명단"
            header="참가자 명단"
            body={participants}
          />
        </div>
        <div className="hostProfile">{/* 호스트 프로필 사진 및 닉네임 */}</div>
        <div className="routinePrice">
          {/* 루틴 금액 버튼과 비슷한 디자인 */}
        </div>
      </div>
      <div className="detailedRoutine">{/* 루틴에 대한 설명 */}</div>
    </div>
  );
}
