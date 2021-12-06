import React, {useState} from 'react';
import {Calendar, DateObject} from 'react-multi-date-picker';
import CenterModalButton from './modalButton';
import '../components/editedCalendar/orange.css';
import './routineDetail.css';
import {Container, Image} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import RoutineStart from './RoutineStart';

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

  const detailedSomething =
    ':선물: 챌린지 성공(10일 출석) 시 42티셔츠를 상품으로 지급 받을 수 있습니다 :미소짓는_얼굴:\n[ AM 06 : 30 ] 각자 조깅 스팟에 도착, 팀장이 아침 출석 체크\n[ ~ AM 07 : 00 ] 30분간 체력에 맞게 달리거나 걷기\n[ ~ AM 08 : 00 ] 귀가 후 씻고 독서 모임 집합 (게더타운)\n[ ~ AM 08 : 30 ] 읽어온 글감에 대해 대화 나누기 (글감 : 회원들이 돌아가며 전 날에 10 ~ 20분 분량으로 발췌)\n[ ~ AM 08 : 50 ] 간단한 스크럼, - 전 날 뭐했고, 오늘의 뭐할건지 공유하고 커피 챗~\n모임 회비 : 20000원 (한 시즌(10일) 기준,  지각/결석 시 1일 2000원 차감, 챌린지 완수 시 전액 환급!, 차감 금액은 챌린지 성공 인원들에게 N빵 지급)';
  // 3. 디자인 버튼
  // 4. detailedRoutine (이후 시작이 되고 나서 접어두거나 새로운 탭형식)

  return (
    <div className="routineDetail">
      <div className="summarizedInfoBox">
        <div className="summarizedInfo">
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
        </div>
      </div>
      <div className="remainedDetail">
        <div className="summarizedLocationAndCalender">
          자세한 정보
          <div className="InfoSort">
            <div className="summarizedCalender">
              <img className="iconsSize" src={'./icons/iconsCalender.png'} />
              <CenterModalButton
                button="루틴 일정"
                header="루틴 일정"
                body={
                  <Calendar
                    className="orange"
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
            <div className="summarizedLocation">
              <img
                className="iconsSize"
                src={'./icons/iconsLocation.png'}
                width="100px"
              />
              <CenterModalButton
                button="루틴 장소"
                header="루틴 장소"
                body="온라인"
              />
            </div>
            <div className="summarizedParticipants">
              <img className="iconsSize" src={'./icons/iconsPeople.png'} />
              <CenterModalButton
                button="참가자 명단"
                header="최소 2명 ~ 최대 3명"
                body={participants}
              />
            </div>
            <div className="routinePrice">
              <img className="iconsSize" src={'./icons/iconsMoney.png'} />
              {/* 루틴 금액 버튼과 비슷한 디자인 */}
              <button className="Price">20,000원</button>
            </div>
          </div>
        </div>
        <div className="detailedRoutine">
          {/* 루틴에 대한 설명 */}
          <ReactQuill
            // toolbarButton={false}
            readOnly={true}
            value={detailedSomething}
          />
        </div>
      </div>
      <div className="summarizedCalenderAndParticipants">
        <div className="hostProfileAndName">
          {/* 호스트 프로필 사진 및 닉네임 */}
          <Container className="hostProfileOutside">
            <Image
              className="hostProfile"
              width="60px"
              height="60px"
              src={'./logoKakao.png'}
              roundedCircle
            />
          </Container>
          <div className="hostName">jaewpark</div>
        </div>
        <button className="partIn">참여하기</button>
      </div>
      <div>
        {/* 댓글 창 구현 */}
        {/* 구현 해야 하는 부분을 이렇게 씁니다 */}
      </div>
      <div>
        {/* 사진 인증 및 보기 */}
        {/* 구현 해야 하는 부분을 이렇게 씁니다 */}
        <RoutineStart />
      </div>
    </div>
  );
}
