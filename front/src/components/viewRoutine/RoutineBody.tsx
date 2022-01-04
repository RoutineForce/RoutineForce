import React from 'react';
import {BrowserView, MobileView, TabletView} from 'react-device-detect';
import IconModal from '../common/IconModal';
import {Calendar, DateObject} from 'react-multi-date-picker';
import {Feed} from 'semantic-ui-react';
import '../../CSS/viewRoutine/RoutineBody.css';
import UserProfile from '../common/UserProfile';
import NoOptionQuill from '../common/noOptionQuill';
import AttendBtn from './AttendBtn';

const MemberView = () => {
  return (
    <>
      <Feed>
        <UserProfile maker />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </Feed>
    </>
  );
};

const detailedSomething =
  ':선물: 챌린지 성공(10일 출석) 시 42티셔츠를 상품으로 지급 받을 수 있습니다:미소짓는_얼굴:\n[ AM 06 : 30 ] 각자 조깅 스팟에 도착, 팀장이 아침 출석 체크\n[ ~ AM 07 : 00 ] 30분간 체력에 맞게 달리거나 걷기\n[ ~ AM 08 : 00 ] 귀가 후 씻고 독서 모임 집합 (게더타운)\n[ ~ AM 08 : 30 ] 읽어온 글감에 대해 대화 나누기 (글감 : 회원들이 돌아가며 전 날에 10 ~ 20분 분량으로 발췌)\n[ ~ AM 08 : 50 ] 간단한 스크럼, - 전 날 뭐했고, 오늘의 뭐할건지 공유하고 커피 챗~\n모임 회비 : 20000원 (한 시즌(10일) 기준,  지각/결석 시 1일 2000원 차감, 챌린지 완수 시 전액 환급!, 차감 금액은 챌린지 성공 인원들에게 N빵 지급)';

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
        <TabletView>
          <AttendBtn />
        </TabletView>
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
              header="참가맴버"
              body={MemberView()}
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
        <div className="RoutineExplanation">
          <div className="title">루틴 안내</div>
          <NoOptionQuill value={detailedSomething} />
        </div>
      </MobileView>
    </>
  );
}
