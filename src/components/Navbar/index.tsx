import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link to="/standings">Таблица</Link>
      <Link to="/fixtures">Расписание</Link>
    </div>
  );
};

export default Navbar;
