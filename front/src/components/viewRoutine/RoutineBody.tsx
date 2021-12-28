import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import {Icon} from 'semantic-ui-react';

export default function RoutineBody() {
  return (
    <>
      <BrowserView></BrowserView>
      <MobileView>
        <p style={{margin: 20}}>자세한 정보</p>
        <div
          style={{
            // width: '66%', // 600px 이상
            height: 80,
            display: 'flex',
            justifyContent: 'space-between',
            margin: 20,
            boxShadow: '0rem 0.3rem 0.3rem 0rem rgb(0 0 0 / 10%)',
            borderRadius: '0.7rem',
          }}
        >
          <Icon color="brown" name="calendar check outline" size="huge">
            <div style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 일정
            </div>
          </Icon>
          <Icon color="brown" name="map outline" size="huge">
            <div style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 장소
            </div>
          </Icon>
          <Icon color="brown" name="users" size="huge">
            <div style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 맴버
            </div>
          </Icon>
          <Icon color="brown" name="won" size="huge">
            <div style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 금액
            </div>
          </Icon>
        </div>
      </MobileView>
    </>
  );
}
