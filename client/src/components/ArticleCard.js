import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import { Button, Form } from 'react-bootstrap'
import { GetArticles, CreateArticles } from '../services/ArticleServices'

const ArticleCard = (props) => {
  const [articles, setArticles] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      userId: props.user.id,
      author: e.target.author.value,
      title: e.target.title.value,
      content: e.target.content.value
    }
    CreateArticles(newPost)
  }

  const FindArticle = async () => {
    const result = await GetArticles()
    console.log(result)
    setArticles(result)
  }

  useEffect(() => {
    FindArticle()
  }, [])

  // async function CreateArticles(post) {
  //   let res = await axios.post(`${BASE_URL}/articles`, post)
  //   console.log(res)
  // }
  return (
    <div className="ArticleCard">
      <form onSubmit={handleSubmit}>
        {/* <label>{userId}</label> */}

        <Form.Group className="mb-3" controlId="formBasicauthor">
          <Form.Label style={{ color: 'white' }} htmlFor="author">
            author
          </Form.Label>
          <Form.Control name="author" type="author" placeholder="John Smith" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label style={{ color: 'white' }} htmlFor="Title">
            Title
          </Form.Label>
          <Form.Control
            name="Title"
            type="Title"
            placeholder="Story of my Life"
          />
        </Form.Group>

        <textarea
          name="Content"
          id=""
          cols="30"
          rows="10"
          placeholder="Happy Writing :)"
        ></textarea>

        <Button
          style={{
            background: '#f8b500',
            color: 'black',
            margin: '6px'
          }}
          type="click"
        >
          Post
        </Button>
      </form>
      <div>
        {articles.map((article) => (
          <p key={article.id}>{article.content}</p>
        ))}
      </div>
    </div>
  )
}

export default ArticleCard
