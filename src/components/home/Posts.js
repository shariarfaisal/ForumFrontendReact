import React,{ useEffect } from 'react'
import PostItem from './PostItem'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/posts'

const Posts = ({ posts, getPosts }) => {

  useEffect(() => {
    getPosts()
  },[])

  return(
    <div className="posts-wrapper row mx-0 justify-content-center">
      {posts.loading && <div className="col-12 text-center text-muted" style={{fontSize: '1rem'}}>loading...</div>}
      {!posts.loading && <div className="col-sm-10 col-md-8">
        <div className="posts">
          {posts.data && posts.data.map(
            (post,i) => <PostItem key={i} {...post} />)
          }
        </div>
      </div>}
      {posts.data && posts.data.length === 0 && <div className="col-sm-10 col-md-8">
        <p className="text-center my-5 text-muted">There is no post!</p>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)
