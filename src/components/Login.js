import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {logIn} from '../api';

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const {setToken} = props
   

    const handleSubmission = async (event) => {
      event.preventDefault()
      console.log(`What's username and password`, username, password)
      try {
        const user = await logIn(username, password)
        console.log(user, "TOKEN", user.token, "USER MESSAGE", user.message)
        if (user.token) {
        setErrorMessage(user.message)
        setToken(user.token)
        setUsername('')
        setPassword('')
        } else {
          setErrorMessage(user.message)
        }
      } catch (error) {
        console.error(error)
      }
    };

    console.log("WHAT's the error MESSAGE", errorMessage)


    return (    
      <Form style={{border: "2px double lightgray", borderRadius: "5px", padding: "10px", margin: "10px"}}
      onSubmit={handleSubmission}>
      <Form.Label>{errorMessage ? `${errorMessage}` : '' }</Form.Label>
       
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={username}
        onChange={(event) => setUsername(event.target.value)} />
        <Form.Text className="text-muted">
          Admin only
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
        onChange={(event) => setPassword(event.target.value)}
         />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default Login;