import React, {useRef} from 'react';
import './RoutineStart.css';

export default function RoutineStart(): JSX.Element {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const imgClick = () => {
    filePickerRef.current?.click();
  };

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
        <img className="arrow" src="./icons/leftArrow.png" />
        <div className="Date">
          {/* date X 정보 받아 오기, 첫 화면 X > today()*/}
          12월 1일
          <div className="uploadImg">
            {/* 파일 선택되면 즉각 업로드 및 배경으로 보여주기, 한 번 더 누르면 그 전에 파일 삭제 후 업로드, 사진이 있다면 텍스트 X */}
            <div className="uploadCertification" onClick={imgClick}>
              1차 인증
            </div>
            <div className="uploadCertification" onClick={imgClick}>
              2차 인증
            </div>
            <input
              className="hindingUpload"
              type="file"
              // style={{display: 'none'}}
            ></input>
            <input
              className="hindingUpload"
              type="file"
              // style={{display: 'none'}}
            ></input>
          </div>
        </div>
        <img className="arrow" src="./icons/rightArrow.png" />
      </div>
    </div>
  );
}
