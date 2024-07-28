import React, { useState } from 'react'

const ColorPicker = () => {
    let [color, setColor] = useState('#000');

    const handlerChange = (e) => {
        setColor(e.target.value)
    }
    const handlerCopy = () => {
        navigator.clipboard.writeText(color);
        alert(`Color Copied to Clipboard: ${color}`)
    }
    return (
        <>
            <h3>Color Picker App</h3>
            <input type="color" onChange={handlerChange} />
            <p>Selected Color:<b>{color}</b></p>
            <button className='btn btn-primary' onClick={handlerCopy} >Copy Color Code</button>
        </>

    )
}

export default ColorPicker