import React from 'react'
import { Link } from 'react-router-dom'
import CommentItem from './CommentItem'
import CreateComment from './CreateComment'
import Layout from '../Layout'
import './post.scss'



const Post = (props) => {
  return(
    <Layout>
      <div className="content-home-posts">
        <div className="post">
          <div className="header">
            <img className="profile-img" src="img/profile.jpg" alt="" />
            <div className="identity">
              <Link className="name">Sharia Emon Faisal</Link>
              <small className="work">Software Engineer</small>
            </div>
          </div>

          <div className="post-body">
            <h3 className="title">This is the title of this post here we go..</h3>
            <div className="body">
              <p>
              An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling Note: A "positioned" element is one whose position is anything except static.
              <br />
              <br />
              An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling Note: A "positioned" element is one whose position is anything except static.
              </p>
            </div>


            <CreateComment />


            <div className="comments">

              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem />

            </div>


          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Post
