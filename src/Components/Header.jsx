import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='containerHeader'>
      <Link className='containerHeader__Link' to='/'>
        Produtos
      </Link>
      <Link className='containerHeader__Link' to='contato'>
        Contato
      </Link>
    </nav>
  );
};

export default Header;
