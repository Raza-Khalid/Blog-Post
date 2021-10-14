import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Message from './Message'
// import { Form, Button } from 'react-bootstrap'
// import swal from '@sweetalert/with-react'

function UpdateMessage() {
  const [content, setContent] = useState([])
  const [formValues, setFormValues] = useState()

  useEffect(() => {
    getContent()
  }, [])

  const getContent = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/message_board/`)
      console.log(res.data)
      setContent(res.data)
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      {content.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  )
}
export default UpdateMessage
