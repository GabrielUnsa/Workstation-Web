import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import './../forms.css';

const InputLogin = () =>{
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    return(
        <div>
            <br />
            <span className="p-float-label">
                <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="flex" />
                <label htmlFor="username">Usuario</label>
            </span>
            <br />
            <div>
                <span className="p-float-label">
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask/>
                    <label htmlFor="password">Password</label>
                </span>
            </div>
           <br />
        </div>
    );
}

export default InputLogin;
