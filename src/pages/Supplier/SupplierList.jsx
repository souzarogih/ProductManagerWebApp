import React from 'react'
import axios from '../../api'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye } from '@fortawesome/free-solid-svg-icons';
import SupplierForm from './SupplierForm';
import { useNavigate } from 'react-router-dom';


const SupplierList = () => {

    const [suppliers, setSuppliers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/suppliers')
        .then(response => {
            setSuppliers(response.data)
        })
        .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ", error))
    }, []);

    function deleteSupplier(id) {
        axios.delete(`/suppliers/${id}`)
        .then(() => {
            alert("Produto Excluído com sucesso.")
            fetchSuppliers()
        })
        .catch(error => console.error("Ocorreu um erro ao excluir um fornecedor: ", error))
    }

    function getSupplier(id) {
        axios.delete(`/suppliers/${id}`)
        .then(() => {
            
        })
        .catch(error => console.error("Ocorreu um erro ao excluir um fornecedor: ", error))
    }

    const fetchSuppliers = () => {
       
            axios.get('/suppliers')
            .then(response => {
                setSuppliers(response.data)

            })
            .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ",error))
    
    }

  return (
    <div className="container mt-5">
        <h2 className='mb-4'>Lista de Fornecedores</h2>
        <button onClick={() => navigate('/add-fornecedor')} className='btn btn-primary mb-2'><FontAwesomeIcon icon={faPlus} /> Adicionar</button>
        <button className='btn btn-primary mb-2 ml-3'><FontAwesomeIcon icon={faArrowsRotate} onClick={fetchSuppliers} /></button>

        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CNPJ</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(supplier => (
                        <tr key={supplier.id}>
                            <td>{supplier.name}</td>
                            <td>{supplier.cnpj}</td>
                            <td>{supplier.email}</td>
                            <td>
                                <button className='btn btn-sm btn-warning mr-2 ml-2'>
                                    <FontAwesomeIcon icon={faPenToSquare} /> Editar
                                </button>
                                <button onClick={() => deleteSupplier(supplier.id)} className='btn btn-sm btn-danger m-2 ml-2'>
                                    <FontAwesomeIcon icon={faTrash} /> Excluir
                                </button>
                                <button onClick={() => getSupplier(supplier.id)} className='btn btn-sm btn-details ml-2'>
                                    <FontAwesomeIcon icon={faEye} /> Detalhes
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>    

  )
}

export default SupplierList


// criar botão para atualizar a tela