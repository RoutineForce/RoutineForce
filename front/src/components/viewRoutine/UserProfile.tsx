import React from 'react';
import {Container, Image} from 'react-bootstrap';
import '../../CSS/viewRoutine/UserProfile.css';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <Container className="User">
        <Image
          className="UserImage"
          src={'./testTitleBackground.jpg'}
          roundedCircle
        />
      </Container>
      <div className="UserName">jaewpark</div>
    </div>
  );
}
