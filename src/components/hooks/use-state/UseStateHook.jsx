import React, { useState } from 'react'

const UseStateHook = () => {
    let [alert, setAlert] = useState(false)
    const handlerClick = () => !alert ? setAlert(true) : setAlert(false)
    // The alert component and the updater functions (updater, arrayUpdater, objectUpdater)
    // Functions are the best example for understanding useState Hook

    return (
        <>
            <h3>Use State Hook</h3>
            {
                alert && <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
            }
            <button className='btn btn-primary' onClick={handlerClick} >Click It!</button>
        </>

    )
}

export default UseStateHook