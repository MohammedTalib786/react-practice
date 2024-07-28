import React, { useState } from 'react'

const UpdateArrys = () => {
    let [inp, setInp] = useState('')
    let [arr, setArr] = useState([]);
    // const handlerAddBtn = () => {
    //     let inp = document.getElementById('inp')
    //     setArr(a => [...a, inp.value])
    // }
    const handlerAddBtn = () => setArr(a => [...a, inp])

    const handlerChangeInp = (e) => setInp(e.target.value)

    const handlerRem = (index) => setArr(arr.filter((_, i) => index !== i))

    return (
        <>
            <h3>Update Array</h3>
            <input placeholder='Enter Text' type="text"  onChange={handlerChangeInp} />
            <button onClick={handlerAddBtn} >Add it!</button>

            <br /><br />

            <ul>
                {arr.map((elem, ind) => <li key={ind} onClick={() => handlerRem(ind)} >{elem}</li>)}
            </ul>

        </>

    )
}

export default UpdateArrys