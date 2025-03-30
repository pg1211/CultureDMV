import React, { useState } from 'react';
import './newUser.css';
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

function NewUser() {
    const [selected, setSelected] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const interests = ["Jazz", "Chinese", "French", "Salsa"];

    const handleInterestChange = (event) => {
        setSelected(event.target.value);
    };


    return (
        <div className="bg">
            <div className="sign-in-bg">
                <h1>Create Account</h1>
                <div className="grid-container">
                <h3>Email:</h3>
                <TextField 
                    label="Username"
                    onChange={(e) => setEmail(e.target.value)}/>
                <h3>Password:</h3>
                <TextField 
                    label="Password"
                    type="password"
                    value={password}/>
                <h3>Interests:</h3>
                <Select 
                    multiple
                    value={selected}
                    onChange={handleInterestChange}
                    renderValue={(selected) => selected.join(", ")}>
                        {interests.map((interest) => (
                            <MenuItem key={interest} value={interest}>{interest}</MenuItem>
                        ))}
                </Select>
                </div>

            </div> 

        </div>

    );
}

export default NewUser;
