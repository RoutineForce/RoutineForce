import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import '../../CSS/viewRoutine/UserProfile.css';

interface prop {
  maker?: boolean;
  UserRight?: any;
  UserBottom?: any;
}

export default function UserProfile(prop: prop) {
  return (
    <>
      <Feed.Event>
        <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
        <Feed.Content>
          <Feed.Summary className="Font">
            <Feed.User>jaewpark</Feed.User>
            {prop.maker ? <Icon name="chess king" color="yellow" /> : null}
            <Feed.Date>{prop.UserRight}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>{prop.UserBottom}</Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </>
  );
}
