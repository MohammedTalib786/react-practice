import React, { useState } from 'react'

const OnchnagingInputTwo = () => {

    // Input changes on btn click
    let [name, setName] = useState('')
    let [age, setAge] = useState('')

    let [entries, setEntries] = useState({})

    const handlerChangeName = (e) => setName(e.target.value)
    const handlerChangeAge = (e) => setAge(e.target.value)

    const handlerClick = () => setEntries(
        { name: name, age: age }
    )

    return (
        <>
            <h3>Onchnaging Input Two</h3>
            <label htmlFor="name" className='form-label' >Name: </label> <input onChange={handlerChangeName} className='form-input' type="text" name="name" id="name" /><br />
            <label htmlFor="age" className='form-label' >Age: </label> <input onChange={handlerChangeAge} className='form-input' type="number" name="age" id="age" /><br />
            <button className='btn btn-primary' onClick={handlerClick} >Submit</button><br />

            {/* =========================================== */}

            <p>
                <span><b>Name:</b> {entries.name}<br /></span>
                <span><b>Age:</b> {entries.age}</span>
            </p>
        </>

    )
}

export default OnchnagingInputTwo