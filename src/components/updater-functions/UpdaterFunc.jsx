import React, { useState } from 'react'

const UpdaterFunc = () => {
    let [value1, setValue1] = useState(0)
    let [value2, setValue2] = useState(0)
    const handlerClickNormal = () => {
        setValue1(value1 + 1)
        setValue1(value1 + 1)
        setValue1(value1 + 1)
    }

    const handlerClickUpdaterFunc = () => {
        setValue2((v) => v + 1)
        setValue2((v) => v + 1)
        setValue2((v) => v + 1)
    }
    return (
        <>
            <h3>Updater Function</h3>
            <div className="container d-flex ">
                <div className="box">
                    <p> {value1} </p>
                    <button className='btn btn-primary' onClick={handlerClickNormal} >Click It</button>
                </div>
                <div className="box">
                    <p> {value2} </p>
                    <button className='btn btn-primary' onClick={handlerClickUpdaterFunc} >Click It</button>
                </div>

                {/* we can also set Items like this */}
                {/* <button className='btn btn-primary' onClick={setValue1(value1 - 1)} >Click It</button> */}

            </div>
        </>
    )
}

export default UpdaterFunc