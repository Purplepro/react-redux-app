import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { colorChange } from './features/theme';

function ColorChange() {

    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={(event) => {
                setColor(event.target.value);
                }} 
            />
            <button 
            onClick={() => {
                dispatch(colorChange(color));
                }}>
                Change Color
            </button>
        </div>
    )
}

export default ColorChange;
