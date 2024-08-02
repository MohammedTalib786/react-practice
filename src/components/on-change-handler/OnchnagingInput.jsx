import React, { useState } from 'react'

const OnchnagingInput = () => {

    // Input changes on run time
    let [name, setName] = useState('')
    let [age, setAge] = useState('')

    const handlerChangeName = (e) => setName(e.target.value)
    const handlerChangeAge = (e) => setAge(e.target.value)


    return (
        <>
            <label htmlFor="name" className='form-label' >Name: </label> <input onChange={handlerChangeName} className='form-input' type="text" name="name" id="name" /><br />
            <label htmlFor="age" className='form-label' >Age: </label> <input onChange={handlerChangeAge} className='form-input' type="number" name="age" id="age" /><br />

            {/* =========================================== */}

            <p>
                <span><b>Name:</b> {name}<br /></span>
                <span><b>Age:</b> {age}</span>
            </p>

        </>
    )
}

export default OnchnagingInput