import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Login from './Login';
import Postform from './Form';

const Contact = (props) => {
    const {token, setToken, posts, setPosts} = props

    return (
        <Accordion defaultActiveKey="0">
        <Card>
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Request to add an Event Post
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body><a href="http://www.sanluisobispomom.com/contact-us.php" target="_blank" title="Submit an event in San Luis Obispo">Use the Contact Us Form</a> to request a new event post.
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        <Card>
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Admin
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
        <Card.Body>Web Developer Log-In
        <Login token={token} setToken={setToken}/> 
          {token? <Postform posts={posts} setPosts={setPosts}/> : ''}
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        </Accordion>
    ) 
}

export default Contact;