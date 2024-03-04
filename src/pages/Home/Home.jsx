import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faUsers, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div class="dashboard">
            

            <div class="box">

                <div className='box-icon'>
                    <h2>Produtos</h2>
                    <FontAwesomeIcon icon={faBoxesStacked} />
                </div>
                <div className='box-data'>
                    <h2>2000</h2>
                    <h6>itens cadastrados</h6>
                </div>
            </div>

            <div class="box">
                
                <div className='box-icon'>
                <h2>Fornecedores</h2>
                    <FontAwesomeIcon icon={faBoxesPacking} />
                </div>
                <div className='box-data'>
                    <h2>51</h2>
                    <h6>empresas cadastradas</h6>
                </div>
            </div>

            <div class="box">
                
                <div className='box-icon'>
                <h2>Clientes</h2>
                    <FontAwesomeIcon icon={faUsers} />
                </div>

                <div className='box-data'>
                    <h2>176</h2>
                    <h6>usuários cadastrados</h6>
                </div>
            </div>

        </div>
    )
}

export default Home