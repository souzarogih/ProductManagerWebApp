import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../images/m-logo.png'

const Navbar = () => {
  return (
    <nav className="menu">

      <div className="menu-container">

        <Link>
          <img className="logo" src={LogoImage} alt="" />
        </Link>

        <Link className="menu-item" to="/">Dashboard</Link>
        <div className='submenu'>
          <Link to="/fornecedores" className="menu-item">Fornecedores</Link>
          <div className='submenu-content'>
            <Link to="/listar-fornecedores">Listar Fornecedores</Link>
            <Link to="/add-fornecedor">Adicionar Fornecedor</Link>
          </div>
        </div>

        <div className='submenu'>
          <Link to="/produtos" className="menu-item">Produtos</Link>
          <div className='submenu-content'>
            <Link to="/listar-produtos">Listar Produtos</Link>
            <Link to="/add-produto">Adicionar Produto</Link>
          </div>
        </div>

        <div className='submenu'>
          <Link to="/costumer" className="menu-item">Clientes</Link>
          <div className="submenu-content">
            <Link to="/listar-clientes">Listar Clientes</Link>
            <Link to="/add-costumer">Adicionar Cliente</Link>
          </div>
        </div>

        <div className='submenu'>
          <Link to="/sales" className="menu-item">Vendas</Link>
          <div className="submenu-content">
            <Link to="/listar-vendas">Listar Vendas</Link>
          </div>
        </div>
        
      </div>
    </nav>

  )
}

export default Navbar