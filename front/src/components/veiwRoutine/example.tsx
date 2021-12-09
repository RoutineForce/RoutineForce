import React from 'react';
import './example.css';

export default function Example() {
  return (
    <>
      <div className="Arrow" id="isLeft">
        <img id="isLeft" src={'./icons/leftArrow.png'} />
      </div>
      <div className="Arrow" id="isRight">
        <img src={'./icons/rightArrow.png'} />
      </div>
    </>
  );
}
