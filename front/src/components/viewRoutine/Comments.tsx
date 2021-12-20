import React, {useState} from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../CSS/viewRoutine/Comments.css';
import moment from 'moment';
import axios from 'axios';

interface info {
  content: string;
  time: string;
}

export default function Comments() {
  // RoutineId: number,
  // loginState: boolean,
  const logStatus = null;
  const [inputContent, setInputContent] = useState('');
  const [commentList, setCommentList] = useState<info[]>([]);
  const [formLocation, setFormLocation] = useState(-1);

  // const getCommentData = async () => {
  //   try {
  //     await axios.get(`/comment/${RoutineId}`).then(res => console.log(res)).catch(err=> console.log(err));
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setCommentList(res.commentData);
  // }

  const onCommentEdit = (index: number) => {
    if (inputContent === '') return;
    const newCommentList = [...commentList];
    newCommentList[index].content = inputContent;
    setCommentList(newCommentList);
    setFormLocation(-1);
    setInputContent('');
    // axios.put(`./comment/RoutineId/CommentId`, {comments: inputContent})
    // e.preventDefault(); 알아보고 쓰기
  };

  const onCommentRemove = (index: number) => {
    commentList.splice(index, 1);
    const newCommentList = [...commentList];
    setCommentList(newCommentList);
  };

  const onSubmit = () => {
    if (inputContent != '') {
      setCommentList(commentList => [
        ...commentList,
        {content: inputContent, time: moment().format()},
      ]);
      setInputContent('');
    }
  };

  const selectComment = (num: number, content: string) => {
    setFormLocation(num);
    setInputContent(content);
  };

  function SingleComment(detail: any) {
    return (
      <Comment className="Comment">
        <Comment.Avatar
          as="a"
          src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        />
        <Comment.Content>
          <Comment.Author as="a">Matt</Comment.Author>
          <Comment.Metadata>
            <span>{moment(detail.time).fromNow()}</span>
          </Comment.Metadata>
          <Comment.Text>{detail.content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <a>답글</a>
            </Comment.Action>
            <Comment.Action
              className="Edit"
              onClick={() => {
                selectComment(detail.index, detail.content);
              }}
            >
              <a>수정</a>
            </Comment.Action>
            <Comment.Action
              className="Remove"
              onClick={() => {
                onCommentRemove(detail.index);
              }}
            >
              <a>삭제</a>
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
  return (
    <>
      <Comment.Group>
        <Header as="h3" style={{padding: 5}}>
          Comments
        </Header>
        {commentList.length !== 0 ? (
          <>
            {commentList.map((comments, index) => (
              <div key={index} style={{padding: 8}}>
                <SingleComment
                  time={comments.time}
                  content={comments.content}
                  index={index}
                  selectComment={selectComment}
                />
                {formLocation == index ? (
                  <Form reply>
                    <Form.TextArea
                      className="TextArea"
                      value={inputContent}
                      placeholder="댓글을 입력해주세요"
                      onChange={e => setInputContent(e.target.value)}
                    />
                    <Button
                      className="Button"
                      content="수정하기"
                      secondary
                      onClick={() => {
                        onCommentEdit(index);
                      }}
                    />
                  </Form>
                ) : null}
              </div>
            ))}
          </>
        ) : (
          <div className="emptyComment">
            루틴에 대해 궁금한 것을 댓글로 남겨주세요 😃
          </div>
        )}
        {formLocation != -1 ? null : (
          <Form reply>
            {logStatus != null ? (
              <>
                <Form.TextArea
                  className="TextArea"
                  value={inputContent}
                  placeholder="댓글을 입력해주세요"
                  onChange={e => setInputContent(e.target.value)}
                />
                <Button
                  className="Button"
                  content="등록하기"
                  primary
                  onClick={onSubmit}
                />
              </>
            ) : (
              <>
                <Form.TextArea
                  className="TextArea"
                  placeholder="로그인이 필요합니다"
                  disabled
                />
                <Button
                  className="Button"
                  content="등록하기"
                  primary
                  onClick={onSubmit}
                  disabled
                />
              </>
            )}
          </Form>
        )}
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
