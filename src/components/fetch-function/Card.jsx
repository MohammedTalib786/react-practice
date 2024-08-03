import React from 'react'
const Card = (props) => {
    let { description, thumbnail, price, category } = props
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text"  >{description} </p>
                <p style={{ fontWeight: '500' }} className="card-text">Category: {category} </p>
                <p style={{ fontWeight: '500' }} className="card-text  ">Price:<span style={{ color: 'green' }} >{price}$</span> </p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    )
}

export default Card