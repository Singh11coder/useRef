import React from 'react'

const Navbar = ({setToggle}) => {

  const handleClick = () => {
    setToggle(prev => !prev);
  }
  return (
    <div>
      <button class="create" onClick={handleClick}>Create</button>
    </div>
  )
}

export default Navbar;
