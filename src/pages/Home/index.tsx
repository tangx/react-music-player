import React from 'react'
import { Route, Link } from 'react-router-dom';
import News from '../News';

export default function Home() {
  return (
    <div>
      <h2>首页</h2>

      <div>
        <Route path="/home/news" component={News} />
      </div>

      <div>
        <ul>
          <li><Link to="/home/news">动态</Link></li>
        </ul>
      </div>
    </div>
  )
}
