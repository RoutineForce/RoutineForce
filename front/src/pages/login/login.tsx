import React, {useEffect} from 'react';
import PageMover from '../../utils/PageMover';
import GoogleLogin from 'react-google-login';

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

  // GOOGLE_LOGIN_URL 체크
  // const googleClientId = 'process.env.REACT_APP_CLIENT_ID || ""';
  // const [userObj, setUserObj] = React.useState({
  //   email: '',
  //   name: '',
  // });
  // //로그인 성공시 res처리
  // const onLoginSuccess = (res: any) => {
  //   setUserObj({
  //     ...userObj,
  //     email: res.profileObj.email,
  //     name: res.profileObj.name,
  //   });
  // };

  const loginGoogleButtonClick = () => {
    (window as any).setCookieAndBack = (jwtToken: string) => {
      PageMover.goBack();
    };
    window.open(process.env.REACT_APP_CLIENT_ID);
  };
  return (
    <div>
      <button onClick={login42ButtonClick}>42 Login</button>
      <img
        src={'./kakao_logo.png'}
        onClick={loginKakaoButtonClick}
        id="kakao-login-btn"
        width="250px"
      />
      {/* <GoogleLogin
        clientId={googleClientId}
        buttonText="Google"
        onSuccess={result => onLoginSuccess(result)}
        onFailure={result => console.log(result)}
      /> */}
      <button onClick={loginGoogleButtonClick}>Google Login</button>
    </div>
  );
}
