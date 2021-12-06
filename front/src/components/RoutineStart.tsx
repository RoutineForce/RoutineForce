import React, {useRef} from 'react';
import './RoutineStart.css';

export default function RoutineStart(): JSX.Element {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const imgClick = () => {
    filePickerRef.current?.click();
  };

  return (
    <div className="Participant">
      <div className="User">
        <div className="UserProfile"></div>
        <div className="UserName"></div>
      </div>
      <div className="certificationPasing">
        {/* <button> 앞으로 </button> */}
        <div>
          <div className="Date" />
          <div className="uploadCertification" onClick={imgClick}></div>
        </div>
        {/* <button> 뒤로 </button> */}
      </div>
    </div>
  );
}
