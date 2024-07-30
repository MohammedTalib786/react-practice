import React, { useEffect, useState } from 'react'

const UseEffectHookTwo = () => {
    let [data, setData] = useState(0)
    const handlerClick = () => setData(d => d + 1)
    

    useEffect(() => {
        document.title = data
    }, [])

    return (
        <>
            <h3>Use Effect Hook</h3>
            <p>value: {data} </p>
            <button className='btn btn-primary' onClick={handlerClick} >Click It</button>
        </>

    )
}

export default UseEffectHookTwo