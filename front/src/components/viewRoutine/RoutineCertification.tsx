import React, {useState} from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import {Accordion, Feed, Icon, Label} from 'semantic-ui-react';
import '../../CSS/viewRoutine/RoutineCertification.css';
import UserProfile from '../common/UserProfile';
import Certifications from './Certifications';

const MENU_LIST = [
  {title: 'TAMS', list: ['Users', 'Wallets'], fail: 2},
  {title: 'Jupiter', list: ['Create', 'Read', 'Update', 'Delete'], fail: 0},
];

const RoutineDays = 10;
const RoutineMoney = 20000;

function remainMoney(fail: number) {
  return (RoutineMoney * (RoutineDays - fail)) / RoutineDays;
}
function UserCertification() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Accordion>
      {MENU_LIST.map((item, idx) => {
        const newIndex = activeIndex === idx ? -1 : idx;
        return (
          <>
            <Accordion.Title
              active={activeIndex === idx}
              index={idx}
              onClick={() => setActiveIndex(newIndex)}
            >
              <Feed>
                <UserProfile
                  UserRight={
                    <div style={{marginLeft: 5}}>
                      <Label color="yellow">
                        <img
                          style={{marginRight: 5, maxHeight: 15}}
                          src={'./icons/iconsReverseMoney.png'}
                        />
                        {remainMoney(item.fail)}
                      </Label>
                    </div>
                  }
                  UserBottom={
                    item.fail ? (
                      <>
                        <Icon name="dont" color="red" />
                        {item.fail} fail
                      </>
                    ) : (
                      <>
                        <Icon name="check circle outline" color="green" />
                        success
                      </>
                    )
                  }
                />
              </Feed>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === idx}>
              {/* {item.list + ''} */}
              <Certifications />
            </Accordion.Content>
          </>
        );
      })}
    </Accordion>
  );
}

export default function RoutineCertification() {
  return (
    <>
      <BrowserView></BrowserView>
      <MobileView>
        <div className="Certification">
          <div className="title">루틴 인증</div>
          <UserCertification />
        </div>
      </MobileView>
    </>
  );
}
