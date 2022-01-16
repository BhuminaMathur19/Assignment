import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState } from 'react';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '50% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {
    const [ user, setUser ] = useState(initialValues);
    const { name, username, email, phone} = user;
    const classes = useStyle();
    const navigate = useNavigate();


    const onValueChange = (e) => {
          setUser({...user, [e.target.name]: e.target.value })
         }
    const addUserDetails = async () => {
        await addUser(user);
        navigate.push('./all');
    }

    return(
        <FormGroup className = {classes.container}>
        <Typography variant = "h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User</Button>
        </FormGroup>

    );
}

export default AddUser;