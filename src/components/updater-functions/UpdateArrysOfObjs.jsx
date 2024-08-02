import React, { useState } from 'react'

const UpdateArrysOfObjs = () => {
    let [theName, setTheName] = useState()
    let [theAge, setTheAge] = useState()

    let [text, setText] = useState([])

    const handlerNameChange = (e) => setTheName(e.target.value)

    const handlerAgeChange = (e) => setTheAge(e.target.value)

    const handlerAddBtn = () => setText([...text, { name: theName, age: theAge }])


    return (
        <>
            <h3>Update Arrays Of Objects</h3>

            <input type="text" placeholder='Enter Name' onChange={handlerNameChange} />
            <input type="number" placeholder='Enter Age' onChange={handlerAgeChange} />
            <button onClick={handlerAddBtn} >Add It!</button>

            <ul>
                {text.map((elem, ind) => <li key={ind} ><b>Name:</b>{elem.name}<b>| Age:</b>{elem.age}</li>)}
            </ul>
        </>
    )
}

export default UpdateArrysOfObjs;