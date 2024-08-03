import React, { useEffect, useState } from 'react'
import Card from './Card'

const FetchFunc = () => {
    let [prod, setProds] = useState([])
    let url = 'https://dummyjson.com/products?limit=40&skip=10';
    useEffect(() => {
        const fetchingData = async () => {
            let data = await fetch(url);
            let res = await data.json();
            setProds(res.products);
        }
        fetchingData()
    }, [])
    console.log(prod)
    return (
        <>
            <h3>Fetch Function</h3>
            <div className="container d-flex justify-content-center align-items-center gap-4 flex-wrap  ">
                {prod.map((elem, ind) => <Card key={ind} title={elem.title} price={elem.price} thumbnail={elem.thumbnail} description={elem.description} category={elem.category} />)}
            </div>
        </>
    )
}

export default FetchFunc