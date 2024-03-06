import React, { useState, useEffect } from 'react';
import axios from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faUsers, faBoxesStacked, faBagShopping } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const [dashboards, setDashboards] = useState([]);

    useEffect(() => {
        fetchDashboards();
    }, []);

    const fetchDashboards = () => {

        axios.get('/dashboard')
            .then(response => {
                setDashboards(response.data)
            })
            .catch(error => console.error("Ocorreu um erro ao obter dados do dashboard: ", error))
    }

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

            <div class="box">

                <div className='box-icon'>
                    <h2>Vendas</h2>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>

                <div className='box-data'>
                    <h2 className='box-number'>521</h2>
                    <h6>vendas realizadas</h6>
                </div>
            </div>

            <div class="container">
                <h3>Análise de Dados</h3>

                <div class="container-tables">
                    <div className='table-dashboard'>
                        <h4>Produtos cadastrados</h4>
                        <thead>
                            <tr>
                                <th>Esta semana</th>
                                <th>Semana passada</th>
                                <th>Este mês</th>
                                <th>Mês passado</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dashboards.map(dashboard => (
                                    <tr key={dashboard.id}>
                                        <td>{dashboard.createdThisWeek}</td>
                                        <td>{dashboard.createdLastWeek}</td>
                                        <td>{dashboard.createdThisMonth}</td>
                                        <td>{dashboard.createdLastMonth}</td>
                                        <td>{dashboard.totalItens}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </div>
                </div>


                <div className='table-dashboard'>
                    <h4>Fornecedores cadastrados</h4>
                    <thead>
                        <tr>
                            <th>Esta semana</th>
                            <th>Semana passada</th>
                            <th>Este mês</th>
                            <th>Mês passado</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dashboards.map(dashboard => (
                                <tr key={dashboard.id}>
                                    <td>{dashboard.createdThisWeek}</td>
                                    <td>{dashboard.createdLastWeek}</td>
                                    <td>{dashboard.createdThisMonth}</td>
                                    <td>{dashboard.createdLastMonth}</td>
                                    <td>{dashboard.totalItens}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </div>

            </div>

        </div>
    )
}

export default Home