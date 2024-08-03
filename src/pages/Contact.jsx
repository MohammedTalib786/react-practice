import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="card my-5 container ">
                <div className="card-header">
                    <h3>Contact Us</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                </div>
            </div>
            <div className="mb-3 container ">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3 container ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )
}

export default Contact