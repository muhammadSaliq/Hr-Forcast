import { useContext } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import "./login.css"
import Navbars from '../../components/navbar';

const Login = () => {

    const navigate = useNavigate();
    const [userEmail, setuserEmail] = useState("");
    const [password, setPassword ] = useState("");
    

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        
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
        <h2>Login</h2>
        <TextField fullWidth value={userEmail} onChange={handlecchange} name="userEmail" label="User Email" variant="outlined" />
        <TextField fullWidth value={password} type='password' onChange={handlecchange} name="password" label="password" variant="outlined" />
        <Button fullWidth variant="contained">Login</Button>

        
        </div>
</>
    )
}

export default Login;