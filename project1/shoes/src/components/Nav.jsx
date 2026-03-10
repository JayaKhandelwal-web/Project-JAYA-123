import React from 'react'

const Nav = () => {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src="/images/nike.png"   height="30px"  alt="logo" />

      </div>

      <ul>
       
       <li href="#">menu</li>
       <li href="#">contact</li>
       <li href="#">service</li>
       <li href="#">about</li>
      </ul>
      <button>signup</button>
    </nav>
  )
}

export default Nav