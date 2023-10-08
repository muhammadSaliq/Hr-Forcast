import { useContext } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import "./signup.css"

const Signup = () => {

    const navigate = useNavigate();
    const [userName, setuserName] = useState("");

    const [userEmail, setuserEmail] = useState("");
    const [password, setPassword ] = useState("");
    

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        
        if (name == "userName") {
            setuserName(value);
        }
        if (name == "userEmail") {
            setuserEmail(value);
        }
        if (name == "password") {
            setPassword(value);
        }

    };

    const handlesubmit = async () => {
        const userData = {userEmail,password};
        const response = await fetch('http://localhost:3000/users/login' , {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body : JSON.stringify(userData)
        });
        const data = await response.json();
        if (data.user){
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));
        navigate('/addproduct')
        return;
    }
}
    return (
<>

<div className='rootcontainer'>
        <h2>Sign Up</h2>
        <TextField fullWidth value={userName} onChange={handlecchange} name="userName" label="User Name" variant="outlined" />
        <TextField fullWidth value={userEmail} onChange={handlecchange} name="userEmail" label="User Email" variant="outlined" />
        <TextField fullWidth value={password} type='password' onChange={handlecchange} name="password" label="password" variant="outlined" />
        <Button fullWidth onClick={() => {console.log(userName)}} variant="contained">Sign up</Button>

        
        </div>

</>
    )
}

export default Signup;