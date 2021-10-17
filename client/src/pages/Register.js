import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Form, Button } from 'react-bootstrap'

const Register = (props) => {
  function handleSubmit(e) {
    e.preventDefault()``
    const newUser = {
      author: e.target.author.value,
      title: e.target.title.value,
      content: e.target.content.value
    }
    createUser(newUser)
  }
  async function createUser(user) {
    let res = await axios.post(`${BASE_URL}/articles`, user)
    console.log(res)
  }
  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="author" placeholder="John" />
        <label>Last Name:</label>
        <input type="text" name="title" placeholder="Smith" />
        <label>User Name:</label>
        <input type="text" name="content" placeholder="JohnSmith123" />

        <Button
          style={{
            background: '#dbd5a4',
            color: 'black',
            margin: '6px',
            opacity: '0.9',
            cursor: 'pointer'
          }}
          type="submit"
          onClick="handleSubmit"
        >
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register

