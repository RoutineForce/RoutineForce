import React, {useState, useCallback, useEffect} from 'react';
import PictureUpload from './pictureUpload';
import './SlickEdit.css';

// 이미지 보관 1장의 경우
const images1: string[][] = [
  [
    'https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
  ],
  [''],
  [
    'https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg',
  ],
  ['https://cdn.pixabay.com/photo/2020/03/13/10/36/stairs-4927569_1280.jpg'],
  ['https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_1280.jpg'],
  [
    'https://cdn.pixabay.com/photo/2020/04/18/17/06/decoration-5060006_1280.jpg',
  ],
  ['https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_1280.jpg'],
  ['https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756_1280.jpg'],
];

const images2: string[][] = [
  [
    'https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    '',
  ],
  [
    'https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/03/13/10/36/stairs-4927569_1280.jpg',
  ],
  [
    'https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/04/18/17/06/decoration-5060006_1280.jpg',
  ],
  [
    'https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756_1280.jpg',
  ],
];

// 인증 횟수
const CertificationCount = 2;

// 루틴 데이트
const RoutineDate: any[] = [
  {year: 2021, month: 12, day: 13},
  {year: 2021, month: 12, day: 14},
  {year: 2021, month: 12, day: 15},
  {year: 2021, month: 12, day: 16},
  {year: 2021, month: 12, day: 17},
];

const ImagePicker = (): JSX.Element => {
  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링

  // 왼쪽 화살표 클릭
  const handlePrevClickImage = useCallback((): void => {
    if (pickIndex <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면
      setPickIndex(RoutineDate.length - 1);
      // length의 -1로 지정하여 가장 마지막으로 이동한다.
      return;
    }
    setPickIndex(pickIndex - 1);
    // 인덱스 감소
  }, [pickIndex]);

  // 오른쪽 화살표 클릭
  const handleNextClickImage = useCallback((): void => {
    if (pickIndex + 1 === RoutineDate.length) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면
      setPickIndex(0);
      // 0으로 설정하여 가장 첫번째로 이동
      return;
    }
    setPickIndex(pickIndex + 1);
    // 인덱스 증가
  }, [pickIndex]);

  // 인증횟수에 따른 코드 추가
  function FillImage(Count: number) {
    const array = [];
    for (let i = 0; i < Count; ++i) {
      array.push(
        images2[pickIndex][i] !== '' ? (
          // <img className="FillImage" src={images2[pickIndex][i]} />
          <PictureUpload />
        ) : (
          <div className="emptyCertification">
            <span> 인증 하기 </span>
          </div>
        ),
      );
    }
    return array;
  }

  return (
    <>
      <div className="Container">
        <div className="RoutineDate">
          {RoutineDate[pickIndex].month +
            '월 ' +
            RoutineDate[pickIndex].day +
            '일'}
        </div>
        {FillImage(CertificationCount)}
        <div className="Arrow" id="isLeft" onClick={handlePrevClickImage}>
          <img id="LeftArrow" src={'./icons/leftArrow.png'} />
        </div>
        <div className="Arrow" id="isRight" onClick={handleNextClickImage}>
          <img id="RightArrow" src={'./icons/rightArrow.png'} />
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
