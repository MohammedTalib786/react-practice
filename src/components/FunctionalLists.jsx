import React, { useState } from 'react'

const FunctionalLists = () => {
    let arr = ['mango', 'banana', 'pineapple', 'cherry', 'grapes', 'orange'];
    let [state, setState] = useState(-1)
    let newArr = [];

    for (let a of arr) {
        let main = a.toUpperCase().slice(0, 1) + a.slice(1)
        newArr.push(main)
    }
    // console.log(newArr)

    const handlerSetState = (i) => setState(i)

    return (
        <>
            <h3>Functional Lists</h3>
            <ul className="list-group">
                {
                    newArr.map((elem, ind) => <li key={ind} className={ind === state ? "list-group-item active" : "list-group-item "} onClick={() => handlerSetState(ind)} > {ind + 1} {elem} </li>)
                }
            </ul>
        </>
    )
}

export default FunctionalLists