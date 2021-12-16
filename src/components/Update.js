import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {updatingPost} from '../api';

const Update = ({idToUpdate, setIsChanged, setIdToUpdate, setIsUpdating}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [link, setLink] = useState('')
    const [active, setActive] = useState(true)


const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log("Starting to Submit Update: ", name, description, location, link, active)
    setIsChanged(false)
    try {
        const update = await updatingPost(idToUpdate, name, description, location, link, active)
        console.log("Data updated: ", update)
        setIsChanged(true)
        setName('')
        setDescription('')
        setLocation('')
        setLink('')
        setIdToUpdate(0)

    } catch (error) {
        console.error(error)
    }
}

    return (

        <Form onSubmit={handleSubmit} style={{position: "fixed", top: "100px", left:"30%", zIndex: "1"}}>
        <Form.Group style={{border: "2px solid gray", backgroundColor: "lightgray"}}>
            <h3 style={{backgroundColor: "#28A744", color: "white"}}>Update Post </h3>

            <p style={{fontWeight: "bolder"}}>ID to Update: {idToUpdate}
            <span onClick={(event) => {setIsUpdating(false)}} style={{color: "red", border: "1px solid black", paddingLeft: "3px", paddingRight: "3px", marginLeft: "30px", fontSize: "22px", textAlign: "right"}}>X </span>
            </p>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name}
                onChange={ (event) => setName(event.target.value)}
            />
            {/* <Form.Label>Description</Form.Label> */}
            {/* <Form.Control type="textarea" rows="3" placeholder="Description" value={description} 
                onChange={ (event) => setDescription(event.target.value)}
            /> */}

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">New Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"
            placeholder="Description" value={description} 
            onChange={ (event) => setDescription(event.target.value)}
            ></textarea>
            </div>

            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location" value={location} 
                onChange={ (event) => setLocation(event.target.value)}
            />
            <Form.Label>Link URL</Form.Label>
            <Form.Control type="text" placeholder="Link" value={link}
                onChange={ (event) => setLink(event.target.value)}    
            />
            <Form.Label>Active</Form.Label>
            <Form.Control type="text" placeholder="Active" value={true}
                onChange={ (event) => setActive(event.target.value)}
            />
            <Button style={{margin: "5px"}}variant="secondary" type="submit">Submit Changes</Button>

        </Form.Group>
        </Form>
     
    );
};

export default Update;