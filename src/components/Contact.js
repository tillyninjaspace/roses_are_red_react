import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const Contact = () => {

    return (
        <Accordion style={{marginTop: "30px"}}>
        <Card>
        <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Request to add a Bulletin Post
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body>Email <a href="mailto:marketing@sanluisobispomom.com">marketing@sanluisobispomom.com</a> to request a new bulletin post.
          Only the web developer of this website can post to avoid spams.
        </Card.Body>
        </Accordion.Collapse>
        </Card>
        </Accordion>
    ) 
}

export default Contact;