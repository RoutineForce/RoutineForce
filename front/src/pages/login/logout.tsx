import React from 'react';
import { LoginReturnKakao } from './loginReturn';

export default function Logout(props: any) {
  const isLogin = props.islogin;

  const onLogout = () => {
    sessionStorage.removeItem('user_id');
    document.location.href = '/'
  }

  return (
    <>
      <button type='button' onClick={onLogout}>Logout</button>
    </>
  )
}
