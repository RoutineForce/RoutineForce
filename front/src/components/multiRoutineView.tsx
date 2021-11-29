import React, {useEffect, useRef} from 'react';
import RoutineCard, {RoutineCardProps} from './routineCard';
import {Row, ButtonGroup, Button} from 'react-bootstrap';
import getData from './temp';

interface MultiCardViewProps {
  cardViewInfos: RoutineCardProps[];
}

function MultiCardView(props: MultiCardViewProps): JSX.Element {
  return (
    <Row style={{marginBottom: 10}}>
      {props.cardViewInfos.map(cardViewInfo => {
        return (
          <RoutineCard
            key={cardViewInfo.routineId}
            {...cardViewInfo}
            marginBottom={20}
          ></RoutineCard>
        );
      })}
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
  return (
    <>
      <MultiCardView cardViewInfos={getData()}></MultiCardView>
      <MultiCardViewButtons></MultiCardViewButtons>
    </>
  );
}
