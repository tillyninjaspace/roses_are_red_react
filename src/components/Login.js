import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [user, setUser] = useState('')

    // const handleSubmission = () => {
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
    // };

    // console.log("What's upload", upload)

    return (
      <Form style={{border: "2px solid gray", borderRadius: "5px", padding: "10px", margin: "10px"}}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default Login;