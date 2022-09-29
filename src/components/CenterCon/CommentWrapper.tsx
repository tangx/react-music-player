import React from 'react'
import line from '../../images/line.png'
import { HotComment } from '../types/HotComment.types'


interface CommentWrapperProps {
  hotComments: HotComment[]
}
export default function CommentWrapper(props: CommentWrapperProps) {
  return (
    <div className='comment_wrapper'>
      <h5 className='title'>热门留言</h5>
      <div className="comment_list">
        {
          props.hotComments.map(
            (cmt) => {
              // console.log("cmt==>", cmt);

              return (
                <dl key={cmt.commentId}>
                  <dt>
                    <img src={cmt.user.avatarUrl} alt="头像" />
                  </dt>
                  <dd className="name">{cmt.user.nickname}</dd>
                  <dd className="detail">{cmt.content}</dd>
                </dl>
              )
            }
          )
        }



      </div>
      <img src={line} alt="" className="right_line" />
    </div>
  )
}
