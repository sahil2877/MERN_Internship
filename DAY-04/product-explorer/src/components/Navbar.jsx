import React from 'react'

export default function Navbar({ search, setSearch }) {

  return (
    <div className='navbar'>

      <h2>Product Explorer</h2>

    <input
  type='text'
  placeholder='Search products...'

  value={search}

  onChange={(e) => setSearch(e.target.value)}
/>

    </div>
  )
}