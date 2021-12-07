import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import './SlickEdit.css';

const images: string[] = [
  'https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
];

const Container = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  position: left;
`;

const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
`;

const Arrow = styled.div<{isLeft: boolean}>`
  width: min(50px, 5vw);
  height: min(50px, 5vw);
  background-color: rgba(244, 244, 244, 0.299);
  border-radius: 50%;
  position: absolute;
  ${props => (props.isLeft ? 'left: 5px' : 'right: 5px')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const Picker = styled.div<{background: string}>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.background};
  margin: 0 6px;
  cursor: pointer;
`;

const ImagePicker = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  // 이미지 순서를 클릭하여 이동하는 pickers 배열

  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링

  const handlePrevClick = useCallback((): void => {
    if (pickIndex <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면

      setPickIndex(images.length - 1);
      // length의 -1로 지정하여 가장 마지막으로 이동한다.

      return;
    }

    setPickIndex(pickIndex - 1);
    // 인덱스 감소
  }, [pickIndex]);

  // 오른쪽 화살표 클릭
  const handleNextClick = useCallback((): void => {
    if (pickIndex + 1 === images.length) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면

      setPickIndex(0);
      // 0으로 설정하여 가장 첫번째로 이동

      return;
    }

    setPickIndex(pickIndex + 1);
    // 인덱스 증가
  }, [pickIndex]);

  return (
    <Container>
      <FillImage src={images[pickIndex]} />
      {/* pickIndex라는 state 변수를 이용하여 그에 맞는 이미지 렌더링 */}

      <Arrow isLeft={true} onClick={handlePrevClick}>
        <img className="arrow" src={'./icons/leftArrow.png'} />
      </Arrow>

      <Arrow isLeft={false} onClick={handleNextClick}>
        <img className="arrow" src={'./icons/rightArrow.png'} />
      </Arrow>

      <PickerWrapper></PickerWrapper>
    </Container>
  );
};

export default ImagePicker;
