import React, {useState} from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function RoutineComment() {
  const [inputContent, setInputContent] = useState('');
  const [commentList, setCommentList] = useState<string[]>([]);

  const onSubmit = () => {
    setCommentList(commentList => [...commentList, inputContent]);
  };

  function SingleComment(detail: any) {
    return (
      <Comment>
        <Comment.Avatar
          as="a"
          src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        />
        <Comment.Content>
          <Comment.Author as="a">Matt</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text key={detail.id}>{detail.content}</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
  return (
    <>
      <Comment.Group minimal>
        <Header as="h3" dividing>
          Comments
        </Header>
        {commentList.map((comments, id) => (
          <SingleComment key={id} content={comments} />
        ))}
        <Form reply>
          <Form.TextArea
            value={inputContent}
            placeholder="댓글을 입력해주세요"
            onChange={e => setInputContent(e.target.value)}
          />
          <Button
            content="Add Reply"
            // labelPosition="left"
            icon="edit"
            primary
            onClick={onSubmit}
          />
        </Form>
      </Comment.Group>
    </>
  );
}

// const CommentExampleMinimal = () => (
//   <Comment.Group minimal>
//     <Header as="h3" dividing>
//       Comments
//     </Header>

//     <Comment>
//       <Comment.Avatar
//         as="a"
//         src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
//       />
//       <Comment.Content>
//         <Comment.Author as="a">Matt</Comment.Author>
//         <Comment.Metadata>
//           <span>Today at 5:42PM</span>
//         </Comment.Metadata>
//         <Comment.Text>How artistic!</Comment.Text>
//         <Comment.Actions>
//           <a>Reply</a>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>

//     <Comment>
//       <Comment.Avatar
//         as="a"
//         src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
//       />
//       <Comment.Content>
//         <Comment.Author as="a">Elliot Fu</Comment.Author>
//         <Comment.Metadata>
//           <span>Yesterday at 12:30AM</span>
//         </Comment.Metadata>
//         <Comment.Text>
//           <p>This has been very useful for my research. Thanks as well!</p>
//         </Comment.Text>
//         <Comment.Actions>
//           <a>Reply</a>
//         </Comment.Actions>
//       </Comment.Content>

//       <Comment.Group>
//         <Comment>
//           <Comment.Avatar
//             as="a"
//             src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
//           />
//           <Comment.Content>
//             <Comment.Author as="a">Jenny Hess</Comment.Author>
//             <Comment.Metadata>
//               <span>Just now</span>
//             </Comment.Metadata>
//             <Comment.Text>Elliot you are always so right :</Comment.Text>
//             <Comment.Actions>
//               <a>Reply</a>
//             </Comment.Actions>
//           </Comment.Content>
//         </Comment>
//       </Comment.Group>
//     </Comment>

//     <Comment>
//       <Comment.Avatar
//         as="a"
//         src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
//       />
//       <Comment.Content>
//         <Comment.Author as="a">Joe Henderson</Comment.Author>
//         <Comment.Metadata>
//           <span>5 days ago</span>
//         </Comment.Metadata>
//         <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
//         <Comment.Actions>
//           <a>Reply</a>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>

//     <Form reply>
//       <Form.TextArea />
//       <Button content="Add Reply" labelPosition="left" icon="edit" primary />
//     </Form>
//   </Comment.Group>
// );

// export default CommentExampleMinimal;
