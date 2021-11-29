import React, {useState} from 'react';
import {Carousel, Image, Row} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';
import {mediaQueryMaker} from '../utils/MediaQuery';
import RoutineCard, {RoutineCardProps} from './routineCard';
/**
 * for test
 */
import getData from './temp';

interface SourceInfo {
  src: string;
  headerText?: string;
  explainText?: string;
}

interface CarouselImageSliderProps {
  slideInterval: number;
  imageSources: SourceInfo[];
}

function CarouselImageSlider(props: CarouselImageSliderProps): JSX.Element {
  return (
    <Carousel>
      {props.imageSources.map((sourceInfo, idx) => {
        return (
          <Carousel.Item key={idx} interval={props.slideInterval}>
            <Image src={sourceInfo.src}></Image>
            <Carousel.Caption>
              <h3>{sourceInfo.headerText}</h3>
              <p>{sourceInfo.explainText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

const ImageSliderData: CarouselImageSliderProps = {
  slideInterval: 3000,
  imageSources: [
    {
      src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
      headerText: 'First slide label',
      explainText: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
      headerText: 'Second slide label',
      explainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: 'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
      headerText: 'Third slide label',
      explainText:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ],
};

interface CardRowViewerProps {
  routineCardPropsProvideFunc: (arg0: number) => RoutineCardProps[];
}

function CardRowViewer(props: CardRowViewerProps): JSX.Element {
  // values
  const buttonWidth = 40;
  const cardWidthWithMargin = 230;
  const maxNumberOfViewCards = 8;

  // func
  const minWidthCalc = (numberOfCards: number): number => {
    return buttonWidth * 2 + cardWidthWithMargin * numberOfCards;
  };
  const getHowManyCardView = (): number => {
    const result = Math.floor(
      (window.innerWidth - buttonWidth * 2) / cardWidthWithMargin,
    );
    if (result === 0) return 1;
    else return result;
  };

  // state
  const [routineCardPropses, setRoutineCardPropses] = useState(
    props.routineCardPropsProvideFunc(maxNumberOfViewCards),
  );
  const [startIdx, setStartIdx] = useState(0);
  const isUnder1 = useMediaQuery({query: mediaQueryMaker(0, minWidthCalc(1))});

  // func
  const leftClick = () => {
    const numberOfCardView = getHowManyCardView();
    let nextIdx = startIdx - numberOfCardView;
    if (nextIdx < 0) nextIdx = 0;
    setStartIdx(nextIdx);
  };
  const rightClick = () => {
    const numberOfCardView = getHowManyCardView();
    let nextIdx = startIdx + numberOfCardView;
    if (nextIdx >= routineCardPropses.length) nextIdx = startIdx;
    setStartIdx(nextIdx);
  };

  return (
    // width 계산 >> 버튼 52, 마진 10 10 + 가운데 200 적당히
    <div className="childCenterContainer">
      <div className="cardRowViewerContainer">
        <div className="cardRowViwerButtonContainer">
          <img
            src="./icons/leftArrow.png"
            onClick={leftClick}
            style={{width: 20, height: 30, marginLeft: isUnder1 ? 0 : 20}}
          ></img>
        </div>
        <Row>
          {routineCardPropses.map((routineCardProps, idx) => {
            if (idx < startIdx) return null;
            return (
              <RoutineCard
                key={routineCardProps.routineId}
                {...routineCardProps}
              ></RoutineCard>
            );
          })}
        </Row>
        <div className="cardRowViwerButtonContainer">
          <img
            src="./icons/rightArrow.png"
            onClick={rightClick}
            style={{width: 20, height: 30, marginRight: isUnder1 ? 0 : 20}}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default function HomeDefault(): JSX.Element {
  return (
    <>
      <CarouselImageSlider {...ImageSliderData}></CarouselImageSlider>
      <br></br>
      <div className="childCenterContainer">
        <h2>Routines</h2>
      </div>
      <CardRowViewer routineCardPropsProvideFunc={getData}></CardRowViewer>
      <br></br>
      <div className="childCenterContainer">
        <h2>Mettings</h2>
      </div>
      <CardRowViewer routineCardPropsProvideFunc={getData}></CardRowViewer>
    </>
  );
}
