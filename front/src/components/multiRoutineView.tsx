import React, {useEffect, useRef, useState} from 'react';
import RoutineCard, {RoutineCardProps} from './routineCard';
import {Row, ButtonGroup, Button} from 'react-bootstrap';
import getData from './temp';
import {RoutineGetDto} from '../api/dto/routineGet';
import API from '../api/APIUtil';
import DateUtil from '../utils/DateUtil';
import {Card} from 'semantic-ui-react';

interface MultiCardViewProps {
  cardViewInfos: RoutineCardProps[];
}

function MultiCardView(props: MultiCardViewProps): JSX.Element {
  return (
    <Row style={{marginBottom: 10}}>
      <Card.Group>
        {props.cardViewInfos.map(cardViewInfo => {
          return (
            <RoutineCard
              key={cardViewInfo.routineId}
              {...cardViewInfo}
            ></RoutineCard>
          );
        })}
      </Card.Group>
    </Row>
  );
}

interface MultiCardViewButtonsProps {
  interval: number;
}

function MultiCardViewButtons(): JSX.Element {
  const numberOneButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    numberOneButton.current?.click();
  }, []);
  return (
    <div className="childCenterContainer">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>{'<'}</Button>
        <Button ref={numberOneButton}>1</Button> <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>{'>'}</Button>
      </ButtonGroup>
    </div>
  );
}

export default function MultiRoutineView(): JSX.Element {
  const [routines, setRoutines] = useState<RoutineGetDto[]>([]);

  const makeFromToDateStr = (dateStrArray: string) => {
    const ft = API.getFromToDate(dateStrArray);
    if (ft.from && ft.to) {
      return (
        DateUtil.toMMddWithDot(ft.from) + ' ~ ' + DateUtil.toMMddWithDot(ft.to)
      );
    } else {
      return '';
    }
  };

  const getRoutineCardViewPropsFromRoutines = (): RoutineCardProps[] => {
    return routines.map(routine => {
      const routineCardProps: RoutineCardProps = {
        routineId: `${routine.id}`,
        imgSrc: routine.image_path,
        title: routine.title,
        text: routine.body,
        timeText: makeFromToDateStr(routine.day_run),
        location: routine.location,
      };
      return routineCardProps;
    });
  };

  useEffect(() => {
    API.getAllRoutine(setRoutines, error => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <MultiCardView
        cardViewInfos={getRoutineCardViewPropsFromRoutines()}
      ></MultiCardView>
      <MultiCardViewButtons></MultiCardViewButtons>
    </>
  );
}
