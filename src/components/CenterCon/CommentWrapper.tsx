import React from 'react'
import { useSelector } from 'react-redux'
import line from '../../images/line.png'
import { RootState } from '../../redux/store'
import { HotComment } from '../types/HotComment.types'


interface CommentWrapperProps {
}
export default function CommentWrapper(props: CommentWrapperProps) {
  const comments = useSelector((state: RootState) => { return state.comments })
  return (
    <div className='comment_wrapper'>
      <h5 className='title'>热门留言</h5>
      <div className="comment_list">
        {
          comments.map(
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
