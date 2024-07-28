import React, { useState } from 'react'

const UpdateObjs = () => {
    let [text, setText] = useState({})

    const handlerNameChange = (e) => setText({ ...text, name: e.target.value })
    const handlerAgeChange = (e) => setText({ ...text, age: e.target.value })

    return (
        <>
            <h3>Update Objects</h3>

            <input placeholder='Enter Name' type="text" onChange={handlerNameChange} />
            <input placeholder='Enter Age' type="number" onChange={handlerAgeChange} />

            <p> {text.name === undefined ? 'Name will be shown here' : text.name} </p>
            <p> {text.age === undefined ? 'Age will be shown here' : text.age} </p>
        </>
    )
}

export default UpdateObjs;