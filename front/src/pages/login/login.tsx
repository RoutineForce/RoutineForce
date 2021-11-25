import React, {useEffect} from 'react';
import PageMover from '../../utils/PageMover';
// import GoogleLogin from 'react-google-login';
import Home from '../home/home';
import './login.css';

/**
 * Todo : jaewpark 이 로그인 페이지 만들어줄거임! ㅎㅎ
 */
export default function Login(): JSX.Element {
  const login42ButtonClick = () => {
    (window as any).setCookieAndBack = (jwtToken: string) => {
      // Todo : 인자로 받아온 jwtToken 을 Cookie 에 담음. 그리고 User 클레스를 세팅
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_42_LOGIN_URL);
  };
  // KAKAO_LOGIN_URL 체크
  const loginKakaoButtonClick = () => {
    (window as any).setCookieAndBack = (jwtToken: string) => {
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_KAKAO_LOGIN_URL);
  };

  const loginGoogleButtonClick = () => {
    (window as any).setCookieAndBack = (jwtToken: string) => {
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_GOOGLE_LOGIN_URL);
  };

  return (
    <div>
      <div className="slogan">
        <img src={'./logo192.png'} width="30px"></img>
        <h3 onClick={Home}>RoutineForce</h3>
      </div>
      <form className="box">
        <div className="slogan">
          <h2>
            의지박약한 너를 위한 <br />
            새로운 루틴 만들기
          </h2>
        </div>
        <button className="button" onClick={login42ButtonClick}>
          42 Login
        </button>
        <button className="button" onClick={loginKakaoButtonClick}>
          Kakao login
        </button>
        {/* <GoogleLogin
          clientId="306987520785-kd2en87pu08t6f3jbmubrr1662j78qiu.apps.googleusercontent.com"
          buttonText="구글 로그인"
          onSuccess={loginGoogleButtonClick}
          onFailure={result => console.log(result)}
        /> */}
        <button className="button" onClick={loginGoogleButtonClick}>
          Google Login
        </button>
      </form>
    </div>
  );
}
