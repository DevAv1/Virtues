import React, { useEffect } from 'react'
import '../styles/category.css';
export const Category = ({ match }) => {

  useEffect(() => {
    console.log(match.params);
  }, [])

  return (
    <div className="category">
      User {match.params.categoryName}
  
    </div>
  )
}