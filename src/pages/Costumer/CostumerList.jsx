import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
// import { RiLoginCircleFill } from "react-icons/ri";
import { TiPlus, TiRefresh } from "react-icons/ti";
import { IoMdRefresh, IoMdEye, IoMdClose } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";


Modal.setAppElement('#root');

const CostumerList = () => {

    const [costumers, setCostumers] = useState([]);
    const [selectedCostumerId, setSelectedCostumerId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCostumers();
    }, []);

    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function deleteCostumer(id) {
        axios.delete(`/costumers/${id}`)
            .then(() => {
                alert("Cliente excluído com sucesso.")
                fetchCostumers()
            })
            .catch(error => console.error("Ocorreu um erro ao excluir o cliente: ", error))
    }

    const fetchCostumers = () => {

        axios.get('/costumers')
            .then(response => {
                setCostumers(response.data)
            })
            .catch(error => console.error("Ocorreu um erro ao obter um cliente: ", error))
    }



    function getCostumer(id) {
        axios.get(`/costumers/${id}`)
            .then(response => {
                // history.push(`/detalhes-cliente/${response.data.id}`)
                // navigate(`/detalhes-cliente/${response.data.id}`)
                openModal()
                console.log("chamando openModal")

            })
            .catch(error => console.error("Ocorreu um erro ao obter um cliente: ", error))
    }

    return (
        <div className="container mt-5">
            <h2 className='mb-4'>Lista de Clientes</h2>

            <button
                title="Cadastrar cliente"
                onClick={() => navigate('/add-costumer')}
                className='btn btn-primary mb-2 mr-4 m-1'>
                <TiPlus style={{ fontSize: '1em', color: 'white' }} />
            </button>

            <button
                title="Atualizar a lista de clientes"
                className='btn btn-primary mb-2 ml-4 m-1'
                onClick={fetchCostumers}>
                <IoMdRefresh style={{ fontSize: '1em', color: 'white' }} />
            </button>

            <button
                title="Editar cadastro do cliente"
                onClick={() => navigate(`/editar-costumer/${selectedCostumerId}`)}
                className='btn btn-primary mr-2 mb-2 m-1'>
                <MdModeEditOutline style={{ fontSize: '1em', color: 'white' }} />
            </button>

            <button
                title="Apagar cadastro do cliente"
                onClick={() => deleteCostumer(selectedCostumerId)}
                className='btn btn-primary mb-2 ml-2 m-1'>
                <FaTrash style={{ fontSize: '1em', color: 'white' }} />
            </button>

            <button
                title="Detalhes do cadastro do cliente"
                onClick={() => getCostumer(selectedCostumerId)}
                className='btn btn-primary mb-2 ml-2 m-1'>
                <IoMdEye style={{ fontSize: '1em', color: 'white' }} />
            </button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        costumers.map(costumer => (
                            <tr key={costumer.id}
                                className={selectedCostumerId === costumer.id ? 'selected-row' : ''}
                                onClick={() => setSelectedCostumerId(costumer.id)}>
                                <td>{costumer.name}</td>
                                <td>{costumer.cpf}</td>
                                <td>{costumer.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal de Adicionar Usuário"
                ariaHideApp={false}
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <div className='modal-background'>

                    <div className='modal-field-content'>

                        <button onClick={closeModal}>
                            <FontAwesomeIcon icon={faSquareXmark} />
                        </button>
                        <p>Eu sou um modal teste</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CostumerList