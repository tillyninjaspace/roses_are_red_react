import axios from 'axios';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from './Loading';

const Postform = ({posts, setPosts}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [link, setLink] = useState('')
    const [picture, setPicture] = useState('')

    const [selectedFile, setSelectedFile] = useState();
    const [fileUpload, setFileUpload] = useState(false);
    const [imagePreview, setImagePreview] = useState('')
    const fileImageUpload = React.useRef();

    const handleSubmit = async (event) => {
        event.preventDefault()
        setFileUpload(true);
        
        try {
        let formData = new FormData();
          formData.append('name', name)
          formData.append('description', description)
          formData.append('location', location)
          formData.append('link', link)
          formData.append('picture', picture)
          formData.append('productimage', selectedFile)

          axios.post("https://roses-are-red.herokuapp.com/user/post", formData, {
            // axios.post("http://localhost:4000/user/post", formData, {
          }).then(res => {
            console.log("RES post", res.data)
            setFileUpload(false)
            const newPostsList = [...posts, res.data]
            setPosts(newPostsList)
          }).catch(error => {
            throw error
          })


        setName('')
        setDescription('')
        setLocation('')
        setLink('')
        setSelectedFile()
        setImagePreview('')
        fileImageUpload.current.value = '';

        } catch(error) {
            console.error(error)
        }
    }

    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setImagePreview(URL.createObjectURL(event.target.files[0]))
      setPicture(URL.createObjectURL(event.target.files[0]))
    }

    // console.log("NAME", name, "DESCRIPTION", description, "Link", link,
    // "PICTURE", picture, "SELECTEDFILE", selectedFile, "FILE NAME: ", fileUpload)

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
        <Form.Label>Link Info:</Form.Label>
      
        <Form.Control type="text" placeholder="Link" value={link}
        onChange={(event) => setLink(event.target.value)}
        />
      </Form.Group>

        { fileUpload? <Loading/> : ''}
      <Form.Group>
      <img src={imagePreview}/>
      <Form.File id="exampleFormControlFile1" label="Upload an image" required
        ref={fileImageUpload}
        onChange={changeHandler}
        />
      </Form.Group> 

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

    )
}

export default Postform;

//Goals: use react-bootstrap and also have an upload button for pictures