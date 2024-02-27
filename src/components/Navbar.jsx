import React from 'react'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="menu">
        <div>
        {/* <FontAwesomeIcon icon={faPlus} /> */}
           <Link to="/">Painel de Controle</Link>
           <Link to="/add-fornecedor">Adicionar Fornecedor</Link>
           <Link to="/listar-fornecedores">Listar Fornecedores</Link> 
        </div>
    </nav>
   
  )
}

export default Navbar