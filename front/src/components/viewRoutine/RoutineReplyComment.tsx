import React, {useEffect, useState} from 'react';
// import RoutineComment from './RoutineComment';

// export default function RoutineReplyComment(
//   post_id: number,
//   Comments: any,
//   setComments: any,
//   comment: any,
// ) {
//   const [childCommentNumber, setChildCommentNumber] = useState(0);
//   const [openReply, setOpenReply] = useState(false);

//   const onClickViewMore = () => {
//     setOpenReply(!openReply);
//   };

//   useEffect(() => {
//     let commentNumber = 0;
//     Comments.map((el: any) => {
//       if (el.responseTo === comment._id) {
//         commentNumber++;
//       }
//     });
//     setChildCommentNumber(commentNumber);
//   }, [Comments]);

//   const RenderReply = (parentId: number) =>
//     Comments.map((comment: string, index: number) => {
//       <>
//       {comment.responseTo === parentId && (
//         <div style={{width: "80%" , marginLeft: "40px"}}>
//           <RoutineComment
//             key={index}
//             //https://darrengwon.tistory.com/828?category=858368
//           />
//         </div>
//       )}
//       </>
//     })
//   return (
//     <>
//     </>
//   );
// }
