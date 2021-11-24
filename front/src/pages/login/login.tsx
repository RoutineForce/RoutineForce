import React, {useEffect} from 'react';
import PageMover from '../../utils/PageMover';

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
  return <button onClick={login42ButtonClick}>42 Login</button>;
}
