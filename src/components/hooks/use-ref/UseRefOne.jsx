import React, { useRef } from 'react'

const UseRefOne = () => {
    let data = useRef(0);
    const handlerClick = () => {
        data.current++;
    }
    console.log(data)
    console.log(data.current)

    return (
        <>
            <h3>UseRef</h3>
            <p> Data: {data.current} </p>
            <button className='btn btn-primary' onClick={handlerClick} >Click It</button>
        </>

    )
}

export default UseRefOne