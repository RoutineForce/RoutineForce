import React from 'react';
import {Calendar, DateObject} from 'react-multi-date-picker';
import {Divider, Icon, Header} from 'semantic-ui-react';
import CenterModalButton from '../common/modalButton';
import '../../CSS/editedCalendar/orange.css';
import '../../CSS/viewRoutine/viewRoutine.css';
import RoutineStart from './RoutineStart';
import NoOptionQuill from '../common/noOptionQuill';
import UserProfile from './UserProfile';
import ParticipateRoutine from './ParticipateRoutine';
import Comments from './Comments';
import RoutineHeader from './RoutineHeader';
import Navbarc from '../common/Navbar';
import axios from 'axios';

export default function ViewRoutine(): JSX.Element {
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

  // const getData = async () => {
  //   try {
  //     const data = await axios.get('/RoutineInfo').then(res=>{console.log(res.data)}).catch(err=>console.log(err));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // 2. 참가자 명단
  const participants = ['data'];
  const getParticipants = async () => {
    const data = axios
      .get(`${process.env.REACT_APP_API_DOCKER}/userroutine/`)
      .then(res => console.log(res.data));
    console.log("It's show time");
  };
  //const participants = [data.participants => {data.participants.map()}]
  getParticipants();
  const detailedSomething =
    ':선물: 챌린지 성공(10일 출석) 시 42티셔츠를 상품으로 지급 받을 수 있습니다 :미소짓는_얼굴:\n[ AM 06 : 30 ] 각자 조깅 스팟에 도착, 팀장이 아침 출석 체크\n[ ~ AM 07 : 00 ] 30분간 체력에 맞게 달리거나 걷기\n[ ~ AM 08 : 00 ] 귀가 후 씻고 독서 모임 집합 (게더타운)\n[ ~ AM 08 : 30 ] 읽어온 글감에 대해 대화 나누기 (글감 : 회원들이 돌아가며 전 날에 10 ~ 20분 분량으로 발췌)\n[ ~ AM 08 : 50 ] 간단한 스크럼, - 전 날 뭐했고, 오늘의 뭐할건지 공유하고 커피 챗~\n모임 회비 : 20000원 (한 시즌(10일) 기준,  지각/결석 시 1일 2000원 차감, 챌린지 완수 시 전액 환급!, 차감 금액은 챌린지 성공 인원들에게 N빵 지급)';
  // 3. 디자인 버튼
  // 4. detailedRoutine (이후 시작이 되고 나서 접어두거나 새로운 탭형식)

  return (
    <>
      <Navbarc />
      <div className="routineDetail">
        <RoutineHeader />
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
                <img className="iconsSize" src={'./icons/iconsLocation.png'} />
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
                <button className="Price">20,000원</button>
              </div>
            </div>
          </div>
          <div className="detailedRoutine">
            <NoOptionQuill value={detailedSomething} />
          </div>
        </div>
        <div className="summarizedCalenderAndParticipants">
          <div className="hostProfileAndName">
            <p>주최자</p>
            <UserProfile />
          </div>
          <ParticipateRoutine />
        </div>
        <div className="certification">
          <RoutineStart />
          <RoutineStart />
          <RoutineStart />
        </div>
        <div className="comments">
          <Divider horizontal>
            <Header as="h4">
              <Icon name="comment alternate" />
              댓글을 달아주세요
            </Header>
          </Divider>
          <Comments />
        </div>
      </div>
    </>
  );
}
