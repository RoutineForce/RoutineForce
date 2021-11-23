import React, {useEffect} from 'react';
import PageMover from '../../utils/PageMover';
import User from '../../utils/User';

export function LoginReturn42(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      PageMover.goToHomePage();
    }, 50);
  });

  return <div>로그인 중입니다. code : {}</div>;
}
