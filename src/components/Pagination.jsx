import React from 'react';
import '../styles/pagination.css'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {
        pageNumbers.map(number => (
          <li key={number} className="page-item" onClick={() => paginate(number)}>
            <span  className="page-link">{number}</span>
          </li>
        ))
      }
    </nav>
  )
}