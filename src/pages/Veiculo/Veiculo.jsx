import React, { useState } from 'react'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './Veiculo.css';

const Veiculo = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className="modal">
            <button onClick={openModal}>Abrir Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemplo de Modal"
            >
                <h2>Adicionar novo usuário</h2>
                <div className="modal-content">
                    <button className="close" onClick={closeModal}>
                        <FontAwesomeIcon icon={faSquareXmark} />
                    </button>
                </div>
                <div>Eu sou um modal</div>
            </Modal>
        </div>
    )
}

export default Veiculo