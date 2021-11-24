import React from 'react';
import {
  Carousel,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from 'react-bootstrap';

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

interface RoutineCardProps {
  routineId: string;
  width?: number;
  imgSrc: string;
  title: string;
  text: string;
  timeText: string;
  location: string;
}

function RoutineCard(props: RoutineCardProps): JSX.Element {
  return (
    <Card style={{width: props.width || 300}}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.timeText}</ListGroupItem>
        <ListGroupItem>{props.location}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

const routineCardData: RoutineCardProps[] = [
  {
    routineId: '0',
    width: 300,
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: 'test1',
    text: 'asdnfioasneioansefmasioefmioasenfioasneoifnasoef  ioanseoifnaiosenfi',
    timeText: '11.12 ~ 11.25',
    location: 'gaepo',
  },
  {
    routineId: '1',
    width: 300,
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: 'test1',
    text: 'asdnfioasneioansefmasioefmioasenfioasneoifnasoef  ioanseoifnaiosenfi',
    timeText: '11.12 ~ 11.25',
    location: 'gaepo',
  },
  {
    routineId: '2',
    width: 300,
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: 'test1',
    text: 'asdnfioasneioansefmasioefmioasenfioasneoifnasoef  dasefasefasefasefasefasefasefasefasefasefasefasefasefasioanseoifnaiosenfi',
    timeText: '11.12 ~ 11.25',
    location: 'gaepo',
  },
  {
    routineId: '3',
    width: 300,
    imgSrc:
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg',
    title: 'test1',
    text: 'asdnfioasneioansefmasioefmioasenfioasneoifnasoef  ioanseoifnaiosenfi',
    timeText: '11.12 ~ 11.25',
    location: 'gaepo',
  },
];

interface CardRowViewerProps {
  routineCardPropses: RoutineCardProps[];
}

function CardRowViewer(props: CardRowViewerProps): JSX.Element {
  return (
    <div className="cardRowViewerContainer">
      <Button style={{width: 30, height: 30}}></Button>
      <Row>
        {props.routineCardPropses.map(routineCardProps => {
          return (
            <RoutineCard
              key={routineCardProps.routineId}
              {...routineCardProps}
            ></RoutineCard>
          );
        })}
      </Row>
      <Button></Button>
    </div>
  );
}

export default function HomeDefault(): JSX.Element {
  return (
    <>
      <CarouselImageSlider {...ImageSliderData}></CarouselImageSlider>
      <h2>Routines</h2>
      <CardRowViewer routineCardPropses={routineCardData}></CardRowViewer>
    </>
  );
}
