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
            width: '66%', // 600px 이상
            display: 'flex',
            justifyContent: 'space-between',
            margin: 20,
          }}
        >
          <Icon color="brown" name="calendar check outline" size="huge">
            <p style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 일정
            </p>
          </Icon>
          <Icon color="brown" name="map outline" size="huge">
            <p style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 장소
            </p>
          </Icon>
          <Icon color="brown" name="users" size="huge">
            <p style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 맴버
            </p>
          </Icon>
          <Icon color="brown" name="won" size="huge">
            <p style={{fontSize: 12, fontWeight: 'bold', margin: 4}}>
              루틴 금액
            </p>
          </Icon>
        </div>
      </MobileView>
    </>
  );
}
