import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api'
import { MdFileDownloadDone, MdOutlineCancel } from "react-icons/md";

const ProductForm = () => {

  const [product, setProduct] = useState({ name: '', price: '', supplierId: '' })
  const [suppliers, setSuppliers] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {

    axios.get("/suppliers")
      .then(response => {
        setSuppliers(response.data)
      })
      .catch(error => console.error("Error ao buscar fornecedores", error))

    if (id) {
      axios.get(`/producs/${id}`)
        .then(response => {
          setProduct(response.data)
        })
        .catch(error => console.error("Error ao buscar produtos", error))
    } else {
      setProduct({ name: '', price: '', supplierId: '' })
    }
  }, [id])

  function handleChange(event) {
    const { name, value } = event.target
    setProduct(prevState => ({ ...prevState, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault() //impede que a pagina seja recarregada ao apertar no botão submit

    const method = id ? 'put' : 'post'
    const url = id ? `/products/${id}` : "/products"

    axios[method](url, product)
      .then(() => {
        alert(`Produto ${id ? "atualizado" : "adicionado"} com sucesso.`)
        navigate("/listar-produtos") //redireionar para pagina principal
      })
      .catch(error => console.error("Ocorreu um erro ao obter um produto: ", error))
  }

  return (

    <div className='container mt-5'>
      <h2>{id ? 'Editar Produto' : 'Adicionar Produto'}</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name">Nome do Produto: </label>
          <input
            type="text"
            className='form-control'
            id='name'
            name='name'
            value={product.name}
            placeholder='Mouse Gamer'
            onChange={handleChange}
            required />
        </div>

        <div className='form-group'>
          <label htmlFor="cnpj">PREÇO: </label>
          <input
            type="text"
            className='form-control'
            id='price'
            name='price'
            value={product.price}
            placeholder='00,00'
            onChange={handleChange}
            required />
        </div>

        <div className='form-group'>
          <label htmlFor="supplierId">Fornecedor: </label>
          <select
            className='form-control'
            id='supplierId'
            name='supplierId'
            value={product.supplierId}
            onChange={handleChange}
            required
          >

            <option value="">Selecione um fornecedor</option>

            {
              suppliers.map(supplier => (
                <option key={supplier.id} value={supplier.id} >
                  {supplier.name}
                </option>
              ))
            }
          </select>
        </div>
        <button
          type='submit'
          title='Salvar'
          // className={id ? 'btn btn-warning mr-2 mb-2 m-1' : 'btn btn-success mr-2 mb-2 m-1'}>{id ? 'Editar' : 'Adicionar'}
          className={id ? 'btn btn-warning mr-2 mb-2 m-1' : 'btn btn-success mr-2 mb-2 m-1'}>
          <MdFileDownloadDone style={{ fontSize: '1em', color: 'white' }} />
          Adicionar
        </button>

        <button
          onClick={() => navigate('/listar-produtos')} 
          title='Cancelar'
          type='submit'
          className='btn btn-danger mr-2 mb-2 m-1'>
            <MdOutlineCancel style={{ fontSize: '1em', color: 'white' }} />
                        Cancelar
        </button>

      </form>


    </div>

  )
}

export default ProductForm