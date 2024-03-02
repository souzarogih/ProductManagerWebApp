import React from 'react'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="menu">
      <h1>F</h1>
        <div>
        {/* <FontAwesomeIcon icon={faPlus} /> */}
           <Link to="/">Painel de Controle</Link>
           <Link to="/add-fornecedor">Adicionar Fornecedor</Link>
           <Link to="/listar-fornecedores">Listar Fornecedores</Link> 
           <Link to="/listar-produtos">Listar Produtos</Link> 
           <Link to="/add-produto">Adicionar Produtos</Link> 
           <Link to="/add-costumer">Adicionar Clientes</Link>
        </div>
    </nav>
   
  )
}

export default Navbar