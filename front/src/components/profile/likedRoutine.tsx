import React from 'react';
import {Header, Card, Feed, Label, Icon} from 'semantic-ui-react';
import PageMover from '../../utils/PageMover';

import '../../CSS/profile/likedRoutine.css';

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

interface RoutineProps {
  RoutineProp?: {
    routineId: string;
    imgSrc: string;
    title: string;
    text: string;
    timeText: string;
    location: string;
    participant: string;
    remain: number;
  };
}

export default function LikedRoutine(
  RoutineProps: Array<RoutineProps['RoutineProp']>,
): JSX.Element {
  return (
    <>
      <Header as="h2" inverted className="Header">
        <Icon
          className="handlePrev"
          name="angle left"
          onClick={() => {
            PageMover.goBack();
          }}
        />
        <Icon name="like" color="red" />
        <Header.Content>
          Liked Routine
          <Header.Subheader>찜한 루틴을 보여드립니다</Header.Subheader>
        </Header.Content>
      </Header>
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
          {Object.values(RoutineProps).map((entrie, index) => (
            <Card key={index} style={{width: '90vw'}}>
              <Card.Content>
                <Card.Header className="text">{entrie?.title}</Card.Header>
                <Card.Meta>{entrie?.timeText}</Card.Meta>
                <Card.Description className="text">
                  {entrie?.text}
                </Card.Description>
                <Feed>
                  <Feed.Event
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    {test.map((e, idk) => {
                      if (idk < 5)
                        return <Feed.Label key={idk} image={e.img} />;
                    })}
                    {test.length > 5 ? (
                      <Icon name="ellipsis horizontal" color="grey" />
                    ) : null}
                  </Feed.Event>
                </Feed>
              </Card.Content>
              <Card.Content extra>
                <div className="text">{entrie?.location}</div>
              </Card.Content>
              {entrie?.remain === 0 ? (
                <Label attached="top right" color="red">
                  Full
                </Label>
              ) : (
                <Label attached="top right">{entrie?.remain}자리 남음</Label>
              )}
            </Card>
          ))}
        </Card.Group>
      </div>
    </>
  );
}
