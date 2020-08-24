
import React from 'react'

import './examples.css';
import { useFetch } from '../../custom-hooks/useFetch';

export const MiltipleCustomsHooks = () => {
    
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(state);
    
    return (
        <div>
            <h1>Custom Hooks!!!</h1>
        </div>
    )
}
