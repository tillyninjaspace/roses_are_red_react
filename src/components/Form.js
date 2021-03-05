import axios from 'axios';
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

    const [selectedFile, setSelectedFile] = useState();
    const [fileUpload, setFileUpload] = useState(false);
    const [test, setTest] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("HELLO HELLO, ABOUT TO POST")
        try {
        // const post = await newPost(name, description, location, contact, picture)

        //new
        let formData = new FormData();
          formData.append('name', name)
          formData.append('description', description)
          formData.append('location', location)
          formData.append('contact', contact)
          formData.append('picture', picture)
          formData.append('productimage', selectedFile)

          // axios.post("https://roses-are-red.herokuapp.com/api/post", formData, {
          // axios.post("http://localhost:4000/api/post", formData, {
            axios.post("http://localhost:4000/user/post", formData, {
          }).then(res => {
            console.log("RES post", res.data)
            const newPostsList = [...posts, res.data]
            setPosts(newPostsList)
          }).catch(error => {
            throw error
          })

        //end of new

        console.log("POST IS MAGIC!")

        setName('')
        setDescription('')
        setLocation('')
        setContact('')
        setSelectedFile()
        setTest('')

        } catch(error) {
            console.error(error)
        }
    }

    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      console.log("What is the file", selectedFile)
      setTest(URL.createObjectURL(event.target.files[0]))
      setPicture(URL.createObjectURL(event.target.files[0]))
      console.log("What's the TEST", test)
      setFileUpload(true);
    }

console.log("SELECTED FILE IS", selectedFile)

    console.log("NAME", name, "DESCRIPTION", description, "Contact", contact,
    "PICTURE", picture, "SELECTEDFILE", selectedFile, "FILE NAME: ", fileUpload)

    return (
   
  <Form onSubmit={handleSubmit} style={{margin: "7px"}}
  >
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

  {/* This is the picture string below */}
  {/* <Form.Group>
    <Form.Label>Picture URL</Form.Label>
    <Form.Control type="text" placeholder="Picture URL"
    onChange={(event) => setPic
      ture(event.target.value)}
    />
  </Form.Group>
     */}
  {/* End of picture string input */}


  <Form.Group>
  <img src={test}/>
  <Form.File id="exampleFormControlFile1" label="Upload an image" required
    onChange={changeHandler}
    />
    {/* <Button variant="secondary" type="submit">Upload picture</Button> */}
  </Form.Group> 



  <Button variant="primary" type="submit">Submit</Button>
</Form>

    )
}

export default Postform;

//Goals: use react-bootstrap and also have an upload button for pictures