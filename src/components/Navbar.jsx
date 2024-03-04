import React from 'react'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="menu">
      {/* <h1>F</h1> */}
      <div className="menu-container">

        <Link className="menu-item" to="/">Painel de Controle</Link>
        <div className='submenu'>
          <Link to="/fornecedores" className="menu-item">Fornecedores</Link>
          <div className='submenu-content'>
            <Link to="/add-fornecedor">Adicionar Fornecedor</Link>
            <Link to="/listar-fornecedores">Listar Fornecedores</Link>
          </div>
        </div>

        <div className='submenu'>
          <Link to="/produtos" className="menu-item">Produtos</Link>
          <div className='submenu-content'>
            <Link to="/add-produto">Adicionar Produto</Link>
            <Link to="/listar-produtos">Listar Produtos</Link>
          </div>
        </div>

        <div className='submenu'>
          <Link to="/costumer" className="menu-item">Clientes</Link>
          <div className="submenu-content">
            <Link to="/add-costumer">Adicionar Cliente</Link>
            <Link to="/listar-clientes">Listar Clientes</Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar