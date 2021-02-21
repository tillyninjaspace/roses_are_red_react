import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {newPost} from '../api'

const Postform = ({posts, setPosts}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [contact, setContact] = useState('')
    const [picture, setPicture] = useState('')

    // const [selectedFile, setSelectedFile] = useState();
    // const [fileUpload, setFileUpload] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
        const post = await newPost(name, description, location, contact)
        console.log("What is post response?", post)
        setName('')
        setDescription('')
        setLocation('')
        setContact('')

        if (post) {
            const newPostsList = [...posts, post]
            setPosts(newPostsList)
        }

        } catch(error) {
            console.error(error)
        }
    }

    console.log("What is contact", contact, "What's description", description, 
    "what is picture string", picture)
    return (
  <Form onSubmit={handleSubmit} style={{margin: "7px"}}>
    <h2>Post an item</h2>
  <Form.Group>
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Item Name" value={name}
    onChange={(event) => setName(event.target.value)}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description" value={description}
    onChange={(event) => setDescription(event.target.value)}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Pick Up Location</Form.Label>
    <Form.Control type="text" placeholder="Location" value={location}
    onChange={(event) => setLocation(event.target.value)}
    />
  </Form.Group>

  <Form.Group>
    <Form.Label>Contact Info:</Form.Label>
    <Form.Control type="text" placeholder="Your Contact Information" value={contact}
    onChange={(event) => setContact(event.target.value)}
    />
  </Form.Group>


  {/* <Form.Group>
    <Form.Label>Picture URL</Form.Label>
    <Form.Control type="text" placeholder="Picture URL"
    onChange={(event) => setPicture(event.target.value)}
    />
  </Form.Group>
     */}


  {/* <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Example file input" 
    // onChange={changeHandler}
    />
    <Button variant="secondary" type="submit">Upload picture</Button>
  </Form.Group> */}


  <Button variant="primary" type="submit">Submit</Button>
</Form>
    )
}

export default Postform;

//Goals: use react-bootstrap and also have an upload button for pictures