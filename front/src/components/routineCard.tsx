import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import PageMover from '../utils/PageMover';
import './routineCard.css';

export interface RoutineCardProps {
  routineId: string;
  imgSrc: string;
  title: string;
  text: string;
  timeText: string;
  location: string;
}

export default function RoutineCard(props: RoutineCardProps): JSX.Element {
  const cardClick = () => {
    PageMover.goTo('/viewRoutine', {routineId: props.routineId});
  };
  return (
    <Card onClick={cardClick}>
      <Image
        style={{height: '180px', width: '100%', overflow: 'hidden'}}
        src={props.imgSrc}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header className="text">{props.title}</Card.Header>
        <Card.Meta>
          <span>{props.timeText}</span>
        </Card.Meta>
        <Card.Description className="bodyText">{props.text}</Card.Description>
      </Card.Content>
      <Card.Content
        extra
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <div>
          <Icon name="like" />
          150
        </div>
        <div className="text">{props.location}</div>
      </Card.Content>
    </Card>
  );
}
