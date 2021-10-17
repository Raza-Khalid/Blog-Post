import React, { useState } from 'react'
import { SignInUser } from '../services/UserServices'
import { Form, Button } from 'react-bootstrap'

const SignIn = (props) => {
  const [formValues, setFormValues] = useState({ userName: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('inside handlesubmit')
    const payload = await SignInUser(formValues)
    console.log(payload)
    // setFormValues({ userName: '' })
    props.setUser(payload)
    props.history.push('/')
  }

  return (
    <div className="signin col">
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '85%' }}>
        <Form className="col" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label style={{ color: 'white' }} htmlFor="userName">
              userName
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="john123"
              value={formValues.userName}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            // disabled={!formValues.email || !formValues.password}
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
