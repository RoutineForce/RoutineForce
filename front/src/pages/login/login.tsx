import React from 'react';

/**
 * Todo : jaewpark 이 로그인 페이지 만들어줄거임! ㅎㅎ
 */
export default function Login(): JSX.Element {
  const login42ButtonClick = () => {
    if (process.env.REACT_APP_42_LOGIN_URL)
      window.location.href = process.env.REACT_APP_42_LOGIN_URL;
  };
  return <button onClick={login42ButtonClick}>42 Login</button>;
}
