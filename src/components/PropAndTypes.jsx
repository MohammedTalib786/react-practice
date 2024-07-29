import React from 'react'
import PropAndTypesCard from './PropAndTypesCard'

const PropAndTypes = () => {
  let admin = {
    name: 'Talib',
    age: 20,
    isAdmin: true
  }
  return (
    <>
      <h4>Props And Types</h4>
      <div className="container d-flex justify-content-center align-items-center flex-wrap gap-4  ">
        <PropAndTypesCard name={admin.name} age={admin.age} isAdmin={admin.isAdmin} />
        <PropAndTypesCard name="Aliza" age={8} isAdmin={false} />
      </div>
    </>
  )
}

export default PropAndTypes