import React, { useEffect, useState } from 'react'

const UseEffectHookThree = () => {
    let [data, setData] = useState(0)
    let [data2, setData2] = useState(0)
    const handlerClick = () => setData(d => d + 1)


    const handlerControl = () => setData2(d => d + 1)


    useEffect(() => {
        document.title = data2
    }, [data2])

    return (
        <>
            <h3>Use Effect Hook</h3>
            <p>value: {data} </p>
            <button className='btn btn-primary' onClick={handlerClick} >Click It</button>
            <p>value: {data2} </p>
            <button className='btn btn-primary' onClick={handlerControl} >Click It</button>
            {/* <button onClick={handlerControl} >Click on purpose</button> */}
        </>

    )
}

export default UseEffectHookThree;
