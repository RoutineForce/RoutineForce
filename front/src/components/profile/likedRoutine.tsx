import React, {useState} from 'react';
import {Header, Card, Feed, Label, Icon} from 'semantic-ui-react';

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

interface RoutineCard {
  routineId: string;
  imgSrc: string;
  title: string;
  text: string;
  timeText: string;
  location: string;
  participant: string;
  remain: number;
}

export default function LikedRoutine(props: any): JSX.Element {
  const [goPrev, setGoPrev] = useState(props.name);
  const existence = props.RoutineCards.length;

  const handleChange = () => {
    setGoPrev('');
  };
  const adjective = () => {
    switch (props.name) {
      case 'liked':
        return '찜한 ';
      case 'attended':
        return '참여중인 ';
      case 'proceeded':
        return '진행중인 ';
      case 'compelte':
        return '완료한 ';
      default:
        return null;
    }
  };
  return (
    <>
      <Header as="h2" inverted className="Header">
        <Icon
          className="handlePrev"
          name="angle left"
          onClick={handleChange}
          onChange={props.onChange(goPrev)}
        />
        {props.name === 'liked' ? (
          <>
            <Icon name="like" color="red" />
            <Header.Content>
              Liked Routine
              <Header.Subheader>찜한 루틴을 보여드립니다</Header.Subheader>
            </Header.Content>
          </>
        ) : null}
        {props.name === 'attended' ? (
          <>
            <Icon name="thumbtack" color="orange" />
            <Header.Content>
              Attended Routine
              <Header.Subheader>참여중인 루틴을 보여드립니다</Header.Subheader>
            </Header.Content>
          </>
        ) : null}
        {props.name === 'proceeded' ? (
          <>
            <Icon name="trophy" color="orange" />
            <Header.Content>
              Proceeded Routine
              <Header.Subheader>진행중인 루틴을 보여드립니다</Header.Subheader>
            </Header.Content>
          </>
        ) : null}
        {props.name === 'completed' ? (
          <>
            <Icon name="lock" color="black" />
            <Header.Content>
              Completed Routine
              <Header.Subheader>완료한 루틴을 보여드립니다</Header.Subheader>
            </Header.Content>
          </>
        ) : null}
      </Header>
      {existence === 0 ? (
        <div className="nothing">{adjective()}루틴이 없습니다</div>
      ) : (
        <div style={{padding: '10px 3px'}}>
          <Card.Group
            className="profileCards"
            style={{
              padding: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItem: 'center',
            }}
          >
            {props.RoutineCards.map((entrie: RoutineCard, index: number) => (
              <Card key={index}>
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
      )}
    </>
  );
}
