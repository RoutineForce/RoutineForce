import React, {useState} from 'react';
import {Icon, Button} from 'semantic-ui-react';
import '../../CSS/viewRoutine/AttendBtn.css';
import {MobileView} from 'react-device-detect';

export default function AttendBtn() {
  const [onLike, setOnLike] = useState(true);
  const [onAttend, setOnAttend] = useState(true);
  const ClickLike = () => {
    setOnLike(!onLike);
  };

  const ClickAttend = () => {
    setOnAttend(!onAttend);
  };

  return (
    <MobileView>
      <div className="FooterBtn">
        {onLike === true ? (
          <Icon
            name="heart"
            circular
            inverted
            color="grey"
            size={window.innerWidth < 700 ? 'large' : 'big'}
            onClick={ClickLike}
          />
        ) : (
          <Icon
            name="heart"
            circular
            inverted
            color="red"
            size={window.innerWidth < 700 ? 'large' : 'big'}
            onClick={ClickLike}
          />
        )}
        {onAttend === true ? (
          <Button
            className="AttendButton"
            color="google plus"
            size={window.innerWidth < 700 ? 'big' : 'massive'}
            onClick={ClickAttend}
          >
            <Icon name="alarm" /> 참가하기
          </Button>
        ) : (
          <Button
            className="AttendButton"
            color="google plus"
            size={window.innerWidth < 700 ? 'big' : 'massive'}
            onClick={ClickAttend}
          >
            <Icon name="alarm mute" /> 취소하기
          </Button>
        )}
      </div>
    </MobileView>
  );
}
