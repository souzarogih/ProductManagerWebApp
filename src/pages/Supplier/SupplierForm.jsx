import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api'
import { MdFileDownloadDone, MdOutlineCancel } from "react-icons/md";

const SupplierForm = () => {

    const [supplier, setSupplier] = useState({ name: '', cnpj: '', email: '' })
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            axios.get(`/suppliers/${id}`)
                .then(response => {
                    setSupplier(response.data)
                })
                .catch(error => console.error("Error ao buscar fornecedor", error))
        } else {
            setSupplier({ name: '', cnpj: '', email: '' })
        }
    }, [id])

    function handleChange(event) {
        const { name, value } = event.target
        setSupplier(prevState => ({ ...prevState, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault() //impede que a pagina seja recarregada ao apertar no botão submit

        const method = id ? 'put' : 'post'
        const url = id ? `/suppliers/${id}` : "/suppliers"

        axios[method](url, supplier)
            .then(() => {
                alert(`Fornecedor ${id ? "atualizado" : "adicionado"} com sucesso.`)
                navigate("/listar-fornecedores") //redireionar para pagina principal
            })
            .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ", error))
    }

    return (
        <div className='container mt-5'>
            <h2>{id ? 'Editar Fornecedor' : 'Adicionar Fornecedor'}</h2>

            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Nome do Fornecedor: </label>
                    <input
                        type="text"
                        className='form-control'
                        id='name'
                        name='name'
                        value={supplier.name}
                        placeholder='Fornecedor abc'
                        onChange={handleChange}
                        required />
                </div>

                <div className='form-group'>
                    <label htmlFor="cnpj">CNPJ: </label>
                    <input
                        type="text"
                        className='form-control'
                        id='cnpj'
                        name='cnpj'
                        value={supplier.cnpj}
                        placeholder='xx.xxx.xxx/xxxx-xx'
                        onChange={handleChange}
                        required />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        className='form-control'
                        id='email'
                        name='email'
                        value={supplier.email}
                        placeholder='empresa@mail.com'
                        onChange={handleChange}
                        required />
                </div>

                <button
                    type='submit'
                    // className={id ? 'btn btn-warning mr-2 mb-2 m-1' : 'btn btn-success mr-2 mb-2 m-1'}>{id ? 'Editar' : 'Adicionar'}
                    className={id ? 'btn btn-warning mr-2 mb-2 m-1' : 'btn btn-success mr-2 mb-2 m-1'}>
                        <MdFileDownloadDone style={{ fontSize: '1em', color: 'white' }} />
                        Adicionar
                </button>

                <button
                    onClick={() => navigate('/listar-fornecedores')}
                    type='submit'
                    className='btn btn-danger mr-2 mb-2 m-1'>
                        <MdOutlineCancel style={{ fontSize: '1em', color: 'white' }} />
                        Cancelar
                </button>

            </form>


        </div>
    )
}

export default SupplierForm