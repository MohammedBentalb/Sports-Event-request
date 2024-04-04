import React from 'react';
import ThemeToggle from './ThemeToggle';

function NavBar() {
  return (
    <nav className="max-width  mt-16 m-auto flex justify-between  items-center">
      <h1 className='line relative text-[1.5rem] font-extrabold dark:text-white'>Sports</h1>
      <ThemeToggle />
    </nav>
  );
}

export default NavBar;
