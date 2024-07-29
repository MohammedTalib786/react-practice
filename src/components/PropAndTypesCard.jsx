import React from 'react'
import { PropTypes } from "prop-types";
const PropAndTypesCard = (props) => {
  let { age, isAdmin } = props;
  return (
    <>
      <div className="card" style={{ width: '20rem' }}>
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Age: {age} </p>
          <p className="card-text">is admin: {isAdmin ? 'Yes' : 'No'} </p>
        </div>
      </div>
    </>

  )
}

PropAndTypesCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isAdmin: PropTypes.bool
}

export default PropAndTypesCard