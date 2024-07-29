import React, { useState } from 'react'

const FunctionalLists = () => {
  let arr = ['mango', 'apple', 'banana', 'cherry', 'grapes']
  let [index, setIndex] = useState(-1);
  const handlerClick = (elemInd) => setIndex(elemInd)

  return (
    <>
      <h3>Functional Lists</h3>
      <ul className="list-group">
        {
          arr.map((elem, ind) => <li key={ind} className={ind === index ? "list-group-item active" : "list-group-item"} onClick={() => handlerClick(ind)} > {ind + 1} {elem}</li>)
        }
      </ul>
    </>

  )
}

export default FunctionalLists