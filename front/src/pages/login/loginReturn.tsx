import React, {useEffect} from 'react';
import PageMover from '../../utils/PageMover';

export function LoginReturn42(): JSX.Element {
  useEffect(() => {
    if (window.opener) {
      // Todo : 받은 code 로 백엔드에 로그인을 시도, 성공하여 jwtToken 을 받으면 아래 함수 호출
      (window.opener as any).setCookieAndBack('jwtToken given backend');
      window.close();
    } else {
      console.error('window.opener null');
    }
  }, []);
  return <div>로그인 중입니다. code : {}</div>;
}
