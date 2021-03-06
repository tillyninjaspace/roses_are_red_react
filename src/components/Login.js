import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {isLoggedIn, setIsLoggedIn} = props
   

    const handleSubmission = (event) => {
      event.preventDefault()
      console.log(`What's username and password`, username, password)
    // fetch(
    //     `http://localhost:4000/upload`,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({upload}),
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    };

    // console.log("What's upload", upload)

    return (
      <Form style={{border: "2px solid gray", borderRadius: "5px", padding: "10px", margin: "10px"}}
      onSubmit={handleSubmission}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>THIS LOGIN FORM IS STILL UNDER CONSTRUCTION</Form.Label>
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter email" value={username}
        onChange={(event) => setUsername(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
        onChange={(event) => setPassword(event.target.value)}
         />
      </Form.Group>
      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" 
        />
      </Form.Group> */}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default Login;