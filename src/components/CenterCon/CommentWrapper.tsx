import React from 'react'
import line from '../../images/line.png'
export default function CommentWrapper() {
  return (
    <div className='comment_wrapper'>
      <h5 className='title'>热门留言</h5>
      <div className="comment_list">
        <dl>
          <dt>
            <img src="" alt="头像" />
          </dt>
          <dd className="name">昵称</dd>
          <dd className="detail">评论内容</dd>
        </dl>
      </div>
      <img src={line} alt="" className="right_line" />
    </div>
  )
}
