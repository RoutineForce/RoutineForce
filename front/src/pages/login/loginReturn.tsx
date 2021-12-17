import axios from 'axios';
import React, {useEffect} from 'react';

export function LoginReturn42(): JSX.Element {
  useEffect(() => {
    // [{id: amugae, name: 'HAHA'}] 형태로 받아옴
    // axios.get('/login', null, []).then(res => console.log(res)).catch((Error) => {console.log(Error);})
    // https://elvanov.com/2597
    // https://mygumi.tistory.com/328
    if (window.opener) {
      // Todo : 받은 code 로 백엔드에 로그인을 시도, 성공하여 jwtToken 을 받으면 아래 함수 호출
      (window.opener as any).setCookieAndBack('jwtToken given backend');
      // window.close();
    } else {
      console.error('window.opener null');
    }
  }, []);
  return <div>로그인 중입니다. code : {}</div>;
}

export function LoginReturnKakao(): JSX.Element {
  const code = new URL(window.location.href).searchParams.get('code');
  axios({
    method: 'GET',
    url: `http://localhost:3000/loginreturn/kakao?code=${code}`,
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  useEffect(() => {
    if (window.opener) {
      // await getAllJSDocTagsOfKind;
      //   // Todo : 받은 code 로 백엔드에 로그인을 시도, 성공하여 jwtToken 을 받으면 아래 함수 호출
      (window.opener as any).setCookieAndBack({code});
    } else {
      console.error('window.opener null');
    }
  }, []);
  window.close();
  return (
    <>
      <div>로그인 중입니다. code : {}</div>
    </>
  );
}

export function LoginReturnGoogle(): JSX.Element {
  useEffect(() => {
    if (window.opener) {
      (window.opener as any).setCookieAndBack('jwtToken given backend');
      // window.close();
    } else {
      console.error('window.opener null');
    }
  }, []);
  return <div>로그인 중입니다. code : {}</div>;
}

export function LoginReturnNaver(): JSX.Element {
  useEffect(() => {
    if (window.opener) {
      (window.opener as any).setCookieAndBack('jwtToken given backend');
      // window.close();
    } else {
      console.error('window.opener null');
    }
  }, []);
  return <div>로그인 중입니다. code : {}</div>;
}
