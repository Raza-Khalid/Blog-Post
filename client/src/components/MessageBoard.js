import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
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
      console.log(res)
      setContent(res.data[0].id)
      console.log(content)
      
    } catch (error) {
      throw error
    }
  }
  console.log(content)
  return (
    <div>
    
    {content}
    </div>
  )
}
export default UpdateMessage
