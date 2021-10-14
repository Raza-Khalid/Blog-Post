import React from 'react'

function Message(props) {
  return (
    <div>
      <h4>User ID: {props.id}</h4>
      <p>{props.content}</p>
    </div>
  )
}
export default Message
