

import React, {useState, useEffect} from 'react';
import {Message} from '../02-useEffect/Message';
import './effects.css';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        
    }, [] );
    useEffect(() => {
        // console.log('Form changed!!!')
    }, [formState] );
    useEffect(() => {
        // console.log('Email changed!!!')
    }, [email] );

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
            {(name === '123') && <Message/>}
        </>

    )
}
