
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const mousemove = (e) => {
            const cords = { x: e.x, y: e.y };
            console.log(cords);
        }

        window.addEventListener('mousemove', mousemove);

        return () => {
            window.removeEventListener('mousemove', mousemove);
        }
    }, [])

    return (
        <div>
            <h1>Amazing!!!</h1>
        </div>
    )
}
