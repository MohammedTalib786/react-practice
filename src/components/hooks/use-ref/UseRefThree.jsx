import React, { useRef } from 'react'

const UseRefThree = () => {
    let data = useRef()
    console.log(data)
    console.log(data.current)

    const handlerClick = () => data.current.style.backgroundColor !== 'red' ? data.current.style.backgroundColor = 'red' : data.current.style.backgroundColor = 'pink'


    return (
        <>
            <h3>UseRef</h3>
            <div style={{ margin: '30px 0', width: '100%', height: '5rem', backgroundColor: 'pink' }} ref={data} ></div>
            <button className='btn btn-primary' onClick={handlerClick} >Click Me!</button>
        </>

    )
}

export default UseRefThree