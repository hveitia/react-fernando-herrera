import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGtrid} from './components/GifGtrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto'])

    // const handleAdd = () => {
    //     setCategories(oldCategories => [...categories, 'HunterXHunter']);
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map((category, index) => {
                        return <GifGtrid 
                        key={category}
                        category={category}/>
                    })
                }
            </ol>

        </>
    )
}