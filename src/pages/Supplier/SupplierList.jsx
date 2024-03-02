// import React from 'react'
// import axios from '../../api'
// import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye } from '@fortawesome/free-solid-svg-icons';
// import SupplierForm from './SupplierForm';
// import { useNavigate } from 'react-router-dom';


// const SupplierList = () => {

//     const [suppliers, setSuppliers] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get('/suppliers')
//         .then(response => {
//             setSuppliers(response.data)
//         })
//         .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ", error))
//     }, []);

//     function deleteSupplier(id) {
//         axios.delete(`/suppliers/${id}`)
//         .then(() => {
//             alert("Produto Excluído com sucesso.")
//             fetchSuppliers()
//         })
//         .catch(error => console.error("Ocorreu um erro ao excluir um fornecedor: ", error))
//     }

//     function getSupplier(id) {
//         axios.delete(`/suppliers/${id}`)
//         .then(() => {

//         })
//         .catch(error => console.error("Ocorreu um erro ao excluir um fornecedor: ", error))
//     }

//     const fetchSuppliers = () => {

//             axios.get('/suppliers')
//             .then(response => {
//                 setSuppliers(response.data)

//             })
//             .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ",error))

//     }

//     // function updateSupplier() {

//     // }

//   return (
//     <div className="container mt-5">
//         <h2 className='mb-4'>Lista de Fornecedores</h2>
//         <button onClick={() => navigate('/add-fornecedor')} className='btn btn-primary mb-2'><FontAwesomeIcon icon={faPlus} /> Adicionar</button>
//         <button className='btn btn-primary mb-2 ml-4'><FontAwesomeIcon icon={faArrowsRotate} onClick={fetchSuppliers} /></button>

//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Nome</th>
//                     <th>CNPJ</th>
//                     <th>Email</th>
//                     <th>Ações</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     suppliers.map(supplier => (
//                         <tr key={supplier.id}>
//                             <td>{supplier.name}</td>
//                             <td>{supplier.cnpj}</td>
//                             <td>{supplier.email}</td>
//                             <td>
//                                 <button onClick={() => navigate(`/editar-fornecedor/${supplier.id}`)} className='btn btn-sm btn-warning mr-2 ml-2'>
//                                     <FontAwesomeIcon icon={faPenToSquare} /> Editar
//                                 </button>
//                                 <button onClick={() => deleteSupplier(supplier.id)} className='btn btn-sm btn-danger m-2 ml-2'>
//                                     <FontAwesomeIcon icon={faTrash} /> Excluir
//                                 </button>
//                                 <button onClick={() => getSupplier(supplier.id)} className='btn btn-sm btn-details ml-2'>
//                                     <FontAwesomeIcon icon={faEye} /> Detalhes
//                                 </button>
//                             </td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </table>
//     </div>    

//   )
// }

// export default SupplierList



// import React from 'react';
// import axios from '../../api';
// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye } from '@fortawesome/free-solid-svg-icons';
// import SupplierForm from './SupplierForm';
// import { useNavigate } from 'react-router-dom';

// const SupplierList = () => {
//     const [suppliers, setSuppliers] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchSuppliers();
//     }, []);

//     function deleteSupplier(id) {
//         axios.delete(`/suppliers/${id}`)
//             .then(() => {
//                 alert("Fornecedor Excluído com sucesso.");
//                 fetchSuppliers();
//             })
//             .catch(error => console.error("Ocorreu um erro ao excluir um fornecedor: ", error));
//     }

//     function getSupplier(id) {
//         // Implemente a lógica para obter detalhes do fornecedor aqui
//         console.log("Obter detalhes do fornecedor com ID:", id);
//     }

//     const fetchSuppliers = () => {
//         axios.get('/suppliers')
//             .then(response => {
//                 setSuppliers(response.data);
//             })
//             .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ", error));
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className='mb-4'>Lista de Fornecedores</h2>
//             <button onClick={() => navigate('/add-fornecedor')} className='btn btn-primary mb-2'><FontAwesomeIcon icon={faPlus} /> Adicionar</button>
//             <button onClick={fetchSuppliers} className='btn btn-primary mb-2 ml-4'><FontAwesomeIcon icon={faArrowsRotate} /> Atualizar</button>

//             <table className='table'>
//                 <thead>
//                     <tr>
//                         <th>Nome</th>
//                         <th>CNPJ</th>
//                         <th>Email</th>
//                         <th>Ações</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         suppliers.map(supplier => (
//                             <tr key={supplier.id} onClick={() => navigate(`/editar-fornecedor/${supplier.id}`)}>
//                                 <td>{supplier.name}</td>
//                                 <td>{supplier.cnpj}</td>
//                                 <td>{supplier.email}</td>
//                                 <td>
//                                     <button onClick={(e) => { e.stopPropagation(); deleteSupplier(supplier.id); }} className='btn btn-sm btn-danger m-2 ml-2'>
//                                         <FontAwesomeIcon icon={faTrash} /> Excluir
//                                     </button>
//                                     <button onClick={(e) => { e.stopPropagation(); getSupplier(supplier.id); }} className='btn btn-sm btn-details ml-2'>
//                                         <FontAwesomeIcon icon={faEye} /> Detalhes
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default SupplierList;

import React, { useState, useEffect } from 'react';
import axios from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSupplierId, setSelectedSupplierId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSuppliers();
    }, []);

    function deleteSupplier(id) {
        axios.delete(`/suppliers/${id}`)
            .then(() => {
                alert("Fornecedor Excluído com sucesso.");
                fetchSuppliers();
            })
            .catch(error => console.error("Ocorreu um erro ao excluir um fornecedor: ", error));
    }

    function getSupplier(id) {
        // Implemente a lógica para obter detalhes do fornecedor aqui
        console.log("Obter detalhes do fornecedor com ID:", id);
    }

    const fetchSuppliers = () => {
        axios.get('/suppliers')
            .then(response => {
                setSuppliers(response.data);
            })
            .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ", error));
    };

    return (
        <div className="container mt-5">
            <h2 className='mb-4'>Lista de Fornecedores</h2>

            <button 
                title="Adicionar fornecedor" 
                onClick={() => navigate('/add-fornecedor')} 
                className='btn btn-primary mb-2 mr-4 m-1'>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            <button 
                title="Recarregar dados da tela" 
                onClick={fetchSuppliers} 
                className='btn btn-primary mb-2 ml-4 m-1'>
                <FontAwesomeIcon icon={faArrowsRotate} />
            </button>

            <button 
                title="Editar um fornecedor" 
                onClick={() => navigate(`/editar-fornecedor/${selectedSupplierId}`)} 
                className='btn btn-primary mr-2 mb-2 m-1'>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>

            <button 
                title="Remover um fornecedor" 
                onClick={() => deleteSupplier(selectedSupplierId)} 
                className='btn btn-primary mb-2 ml-2 m-1'>
                <FontAwesomeIcon icon={faTrash} />
            </button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers.map(supplier => (
                            <tr key={supplier.id} className={selectedSupplierId === supplier.id ? 'selected-row' : ''} onClick={() => setSelectedSupplierId(supplier.id)}>
                                <td>{supplier.name}</td>
                                <td>{supplier.cnpj}</td>
                                <td>{supplier.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SupplierList;

// adicionar botão de cancelar para fechar a tela de alterar
//criar um modal para tela de editar e visualizar
//colocar o status na linha do ações