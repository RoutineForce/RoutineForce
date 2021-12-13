import React, {useState} from 'react';
import '../../CSS/viewRoutine/CheckCertification.css';

export default function CheckCertification() {
  const [status, setStatus] = useState(true);

  const ChangeStatusTrue = () => {
    setStatus(true);
  };

  const ChangeStatusFalse = () => {
    setStatus(false);
  };

  return (
    <>
      {/* 아랫 줄 지우고 상위 Container 에서 정보를 받아서 색깔 변환하기 */}
      {/* 조금 더 수정하면 좋을 부분 : true 바뀌면 성공하였습니다. 글자가 떴다가 사라지는 효과 */}
      <div className={status ? 'CertificationTrue' : 'CertificationFalse'}>
        <img
          onClick={ChangeStatusTrue}
          className="CheckCertificationBtn"
          src={'./icons/success.png'}
        />
        <img
          onClick={ChangeStatusFalse}
          className="CheckCertificationBtn"
          src={'./icons/fail.png'}
        />
      </div>
    </>
  );
}
