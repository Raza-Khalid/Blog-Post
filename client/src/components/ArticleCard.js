import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../globals'

const ArticleCard = (props) => {
  function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      author: e.target.author.value,
      title: e.target.title.value,
      content: e.target.content.value
    }
    createPost(newPost)
  }
  async function createPost(post) {
    let res = await axios.post(`${BASE_URL}/articles`, post)
    console.log(res)
  }
  return (
    <div className="ArticleCard">
      <form onSubmit={handleSubmit}>
        <label>Author</label>
        <input type="text" name="author" />
        <label>Title</label>
        <input type="text" name="title" />
        <label>Content</label>
        <input type="text" name="content" />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default ArticleCard
