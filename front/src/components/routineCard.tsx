import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
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
    <Card
      onClick={cardClick}
      style={{width: 210, height: 385, marginLeft: 10, marginRight: 10}}
    >
      <Card.Img style={{maxHeight: 138.66}} variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.timeText}</ListGroupItem>
        <ListGroupItem>
          <div className="childSpaceBetweenContainer">
            <div className="routineCardViewLocationContainer">
              {props.location}
            </div>
            <div className="routineCardViewHeartContainer">
              <img
                style={{height: 20, marginRight: 5}}
                src="./icons/heart.png"
              ></img>
              <div>150</div>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}
