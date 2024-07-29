import React, { useState } from 'react'

const Alert = () => {
    let [text, setText] = useState('Click It!')
    let [alert, setAlert] = useState(false)
    const handlerClick = () => {
        if (!alert) {
            setAlert(true)
            setText('Close It!')
        }
        else {
            setAlert(false)
            setText('Click It!')

        }
    }
    return (
        <>
            <h3>Alert</h3>

            {
                alert && <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
            }

            <button className='btn btn-primary' onClick={handlerClick} >{text}</button>
        </>

    )
}

export default Alert