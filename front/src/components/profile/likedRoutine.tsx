import React from 'react';
import {Card, Feed, Label, Icon} from 'semantic-ui-react';
import '../../CSS/profile/likedRoutine.css';

const likedRoutine: any[] = [
  {
    routineId: '0',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '[1004기]RunAndLead',
    text: '매일매일 달리기 얼마나 달릴지는 당신이 정해봐요 어디까지 길이를 표현할 수 있는지 이제 말을 해볼게요 한번 들어보실래요?',
    timeText: '1.20 ~ 1.25',
    location: 'gaepo',
    participant: '(3/33)',
    remain: 0,
  },
  {
    routineId: '1',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?\n 무슨 그림그릴래요',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 2,
  },
  {
    routineId: '1',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 3,
  },
  {
    routineId: '1',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
    remain: 10,
  },
  {
    routineId: '1',
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: '그림그리기',
    text: '같이 그림그릴래요?',
    timeText: '1.22 ~ 1.31',
    location: '온라인',
    participant: '(5/5)',
  },
];
const test: any[] = [
  {img: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg'},
  {img: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg'},
];
export default function LikedRoutine(): JSX.Element {
  console.log('hello, LikedRoutine');
  return (
    <div style={{padding: '10px 3px'}}>
      <Card.Group
        style={{
          padding: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        {/* {likedRoutine.map(e => (
          <RoutineCard key={e.routineId} {...e} />
        ))} */}
        {likedRoutine.map(e => (
          <Card key={e.routineId} style={{width: '90vw'}}>
            <Card.Content>
              {/* <Image floated="right" size="mini" src={e.imgSrc} /> */}
              <Card.Header className="text">{e.title}</Card.Header>
              <Card.Meta>{e.timeText}</Card.Meta>
              <Card.Description className="text">{e.text}</Card.Description>
              <Feed>
                <Feed.Event
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  {test.map((e, idk) => {
                    if (idk < 5) return <Feed.Label key={e} image={e.img} />;
                  })}
                  {test.length > 5 ? (
                    <Icon name="ellipsis horizontal" color="grey" />
                  ) : null}
                </Feed.Event>
              </Feed>
            </Card.Content>
            <Card.Content extra>
              <div className="text">{e.location}</div>
            </Card.Content>
            {e.remain === 0 ? (
              <Label attached="top right" color="red">
                Full
              </Label>
            ) : (
              <Label attached="top right">{e.remain}자리 남음</Label>
            )}
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
