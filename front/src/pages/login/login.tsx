import axios from 'axios';
import React, {useEffect} from 'react';
import PageMover from '../../utils/PageMover';
import './login.css';

/**
 * Todo : jaewpark 이 로그인 페이지 만들어줄거임! ㅎㅎ
 */
export default function Login(): JSX.Element {
  async function login42ButtonClick() {
    console.log('click 42 login');
    (window as any).setCookieAndBack = (jwtToken: string) => {
      // Todo : 인자로 받아온 jwtToken 을 Cookie 에 담음. 그리고 User 클레스를 세팅
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_42_LOGIN_URL);
  }

  // KAKAO_LOGIN_URL 체크
  const loginKakaoButtonClick = () => {
    console.log('click kakao login');
    (window as any).setCookieAndBack = (jwtToken: string) => {
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_KAKAO_LOGIN_URL);
  };
  // GOOGLE_LOGIN_URL 체크
  const loginGoogleButtonClick = () => {
    (window as any).setCookieAndBack = (jwtToken: string) => {
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_GOOGLE_LOGIN_URL);
  };
  // NAVER_LOGIN_URL 체크
  const loginNaverButtonClick = () => {
    console.log('click naver login');
    (window as any).setCookieAndBack = (jwtToken: string) => {
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_NAVER_LOGIN_URL);
  };
  const bannerClick = () => {
    PageMover.goToHomePage();
  };
  return (
    <div>
      <div className="logo">
        <img src={'./logo193.png'} onClick={bannerClick}></img>
      </div>
      <form className="box">
        <div className="slogan">
          <h2>
            의지박약한 너를 위한 <br />
            새로운 루틴 만들기
          </h2>
        </div>
        <img
          src={'./logo42.png'}
          className="loginLogo"
          onClick={login42ButtonClick}
        />
        <img
          src={'./logoKakao.png'}
          className="loginLogo"
          onClick={loginKakaoButtonClick}
        />
        <img
          src={'./logoGoogle.png'}
          className="loginLogo"
          onClick={loginGoogleButtonClick}
        />
        <img
          src={'./logoNaver.png'}
          className="loginLogo"
          onClick={loginNaverButtonClick}
        />
      </form>
    </div>
  );
}
