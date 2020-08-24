
import React, {useState} from 'react';
import './effects.css';

export const FormWithCustomHook = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password:''
    });

    const {name, email, password} = formState;

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    
    return (
        <>
            <h1>Use Effect</h1>
            <hr/>

            <div className="form-group">
                <input 
                    typ="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    typ="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Your password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            
        </>

    )
}
