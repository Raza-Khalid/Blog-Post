import React, { useState } from 'react'
import { SignUpUser } from '../services/UserServices'
import { Form, Button } from 'react-bootstrap'

const iState = {
  firstName: '',
  lastName: '',
  userName: ''
}

const SignUp = (props) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    userName: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignUpUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      userName: formValues.userName
    })
    setFormValues(iState)
    props.history.push('/signin')
  }

  return (
    <div className="signin col">
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '85%' }}>
        <Form className="col" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }} htmlFor="firstName">
              First Name
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="John Smith"
              value={formValues.firstName}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label style={{ color: 'white' }} htmlFor="lastName">
              lastName
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="John@gmail.com"
              value={formValues.lastName}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userName">
            <Form.Label style={{ color: 'white' }} htmlFor="userName">
              User Name
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="john123"
              name="userName"
              value={formValues.userName}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={
              !formValues.firstName ||
              (!formValues.lastName && formValues.userName)
            }
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
