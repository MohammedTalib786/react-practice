import React, { useRef, useState } from 'react'

const UseRefTwo = () => {
    let [data, setData]  =useState(0)
    let num = useRef(0);
    const handlerClick = () => {
        setData(num.current)
        num.current++;
    }
    console.log(num)
    console.log(num.current)

    return (
        <>
            <h3>UseRef</h3>
            <p> Data: {data} </p>
            <button className='btn btn-primary' onClick={handlerClick} >Click It</button>
        </>

    )
}

export default UseRefTwo