import React from 'react'
import { Link } from 'react-router-dom' // hint, you may want to use this

// You have a bunch of freedom here to write this how you want
// This is not really tested, other than what props you use here
// Check AllCats specs for what is being checked

const CatCard = ({ name, id }) => {
  return (
    <div className='cat-card'>
      <Link to={`/cats/${id}`} >{ name }</Link>
    </div>
  )
}


export default CatCard
