import React from 'react'
import Link from 'gatsby-link'

function Menu() {
  return (
    <div
      className='sticky-top'
      style={{
        background: '#e9ecef',
        paddingTop: '10px',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Featured</Link>
        </li>
        <li>
          <Link to="/">Poems</Link>
        </li>
        <li>
          <Link to="/">Reviews</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
