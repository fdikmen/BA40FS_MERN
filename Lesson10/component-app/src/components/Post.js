import React, { Component } from 'react'

export class Post extends Component {
  render() {
    console.log(this.props)
    return (
      <div>Post
        {this.props.loading 
        ? 'Loading...' 
        : this.props.posts.map(post => <div key={post.id}>{post.title}</div>)
        }
      </div>
    )
  }
}

export default Post