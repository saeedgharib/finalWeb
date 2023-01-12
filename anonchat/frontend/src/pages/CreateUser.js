
import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input,  styled, Typography } from '@mui/material';
import { addUser } from '../Api';
import { useNavigate,Link } from 'react-router-dom';
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import SideBar from './sidebar';
const initialValue = {
    name: '',
    email: '',
    password: ''
    
}



const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name,email,password} = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        try {
            await addUser(user).then(
                navigate('/UsersList')
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
                        <h1 className="text-center">Create account</h1>
                        
                        {/* {error && <p className="alert alert-danger">{error.data}</p>} */}
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => addUserDetails()}>
                            Create User
                        </Button>
                       
                    </Form>
                </Col>
               
            </Row>
        </Container>
       


         </>
    )
}

export default AddUser;