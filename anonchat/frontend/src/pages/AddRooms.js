
import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input,  styled, Typography } from '@mui/material';
import { addUser ,addRoom} from '../Api';
import { useNavigate,Link } from 'react-router-dom';
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import SideBar from './sidebar';
const initialValue = {
    name: '',
    description:''
    
}



const AddRooms = () => {
    const [room, setRoom] = useState(initialValue);
    const { name,description} = room;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setRoom({...room, [e.target.name]: e.target.value})
        console.log(room);
    }

    const addRoomName = async() => {
        try {
            await addRoom(room).then(
                navigate('/Rooms')
            )
            
        } catch (error) {
            
        }
        
    }


    return (

<>
        {/* <SideBar/> */}
        {/* <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container> */}
        <Container>
            <Row>
                <Col md={2}>
                    <SideBar/>
                </Col>
                <Col md={8} className="d-flex align-items-center justify-content-center flex-direction-column" style={{}}>
                    <Form style={{ width: "80%", maxWidth: 500 }} >
                        <h1 className="text-center">Create New Room</h1>
                        
                        {/* {error && <p className="alert alert-danger">{error.data}</p>} */}
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Your name" onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
                        </Form.Group>
                    
                        <Button variant="primary" type="submit" onClick={() => addRoomName()}>
                            Create Room
                        </Button>
                       
                    </Form>
                </Col>
               
            </Row>
        </Container>
       


         </>
    )
}

export default AddRooms;