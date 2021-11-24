import React from 'react';
import {Carousel, Image} from 'react-bootstrap';

export default function HomeDefault(): JSX.Element {
  return (
    <Carousel style={{backgroundColor: 'dark'}}>
      <Carousel.Item interval={3000}>
        <Image
          src="https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          src="https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          src="https://cdn.crowdpic.net/list-thumb/thumb_l_9FA2E3C7E87309B6B344204FCDBFF3CE.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
