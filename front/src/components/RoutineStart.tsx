import React, {useState} from 'react';
import PictureUpload from './pictureUpload';
import ImagePicker from './SlickEdit';
// import Slider from 'react-slick';
import './RoutineStart.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RoutineStart(): JSX.Element {
  return (
    <div className="Participant">
      <div className="User">
        {/* 유저에 대한 정보 받기 */}
        <div>
          <img className="UserProfile" src={'./testTitleBackground1.jpeg'} />
        </div>
        <div className="UserName">jaewpark</div>
      </div>
      <div className="certificationPasing">
        {/* 화살표로 받아온 정보의 가장 최신 날짜 혹은 today() */}
        {/* <div className="arrows">
          <img className="arrowL" src="./icons/leftArrow.png" />
        </div>
        <div className="Date">
          date X 정보 받아 오기, 첫 화면 X > today()
          12월 1일
          <div className="uploadImg">
            파일 선택되면 즉각 업로드 및 배경으로 보여주기, 한 번 더 누르면 그 전에 파일 삭제 후 업로드, 사진이 있다면 텍스트 X
            <div className="uploadCertification">
              <PictureUpload />
            </div>
            <div className="uploadCertification">
              <PictureUpload />
            </div>
          </div>
        </div>
        <div className="arrows">
          <img className="arrowR" src="./icons/rightArrow.png" />
        </div> */}
        <div className="Date">
          12월 1일
          <div className="uploadImg">
            <ImagePicker />
          </div>
        </div>
      </div>
    </div>
  );
}
