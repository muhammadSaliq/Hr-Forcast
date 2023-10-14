import { useContext } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import "./signup.css"
import Navbars from '../../components/navbar';

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

    return (
<>
<Navbars/>
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