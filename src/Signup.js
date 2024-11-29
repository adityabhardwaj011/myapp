import React from 'react'

export default function Signup() {
  return (
    <div>
        <p><input type ="text" placeholder='Enter email address'></input></p>
        <p><input type ="text" placeholder='Enter password'></input></p>
        <p>Date of Birth:<input type="datetime:local"></input></p>
        <button>Sign up</button>
        <hr></hr>
        <button>Already a member? Login here</button>
    </div>
  )
}