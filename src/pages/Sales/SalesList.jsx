import React, { useState, useEffect } from 'react'
import Modal from "react-modal";
import axios from '../../api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleXmark, faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement("#root");

const SalesList = () => {

  const [sales, setSales] = useState([]);
  const [selectedSalesId, setSelectedSalesId] = useState(null);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    fetchSales();
  }, []);

  // useEffect(() => {
  //     axios.get('/products?_expand=supplier')
  //         .then(response => {
  //             setProducts(response.data)
  //         })
  //         .catch(error => console.error("Ocorreu um erro ao obter um produto: ", error))
  // }, []);

  const fetchSales = () => {

    axios.get('/sales')
      .then(response => {
        setSales(response.data)
      })
      .catch(error => console.error("Ocorreu um erro ao obter aa vendas: ", error))
  }

  function deleteSale(id) {
    axios.delete(`/sales/${id}`)
      .then(() => {
        alert("Venda excluída com sucesso.")
        fetchSales()
      })
      .catch(error => console.error("Ocorreu um erro ao excluir a venda: ", error))
  }

  function getSale(id) {
    axios.get(`/sales/${id}`)
      .then(() => {

      })
      .catch(error => console.error("Ocorreu um erro ao obter uma venda: ", error))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setSupplier(prevState => ({ ...prevState, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault() //impede que a pagina seja recarregada ao apertar no botão submit

    const method = id ? 'put' : 'post'
    const url = id ? `/sales/${id}` : "/suppliers"

    axios[method](url, sales)
      .then(() => {
        alert(`Venda ${id ? "atualizado" : "adicionado"} com sucesso.`)
        navigate("/listar-fornecedores") //redireionar para pagina principal
      })
      .catch(error => console.error("Ocorreu um erro ao obter um fornecedor: ", error))
  }



  return (


    <div className="container mt-5">
      <h2 className='mb-4'>Lista de Vendas</h2>

      {/* <div>
        <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
      </div> */}

      <button
        title="Criar venda"
        onClick={() => setOpenModal(true)}
        className='btn btn-primary mb-2 mr-4 m-1'>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <button
        title="Atualizar venda"
        className='btn btn-primary mb-2 ml-4 m-1'>
        <FontAwesomeIcon icon={faArrowsRotate}
          onClick={fetchSales} />
      </button>

      <button
        title="Editar venda"
        onClick={() => navigate(`/editar-venda/${selectedSalesId}`)}
        className='btn btn-primary mr-2 mb-2 m-1'>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>

      <button
        title="Remover venda"
        onClick={() => deleteSale(selectedSalesId)}
        className='btn btn-primary mb-2 ml-2 m-1'>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <button
        title="Detalhes do venda"
        onClick={() => getSale(selectedSalesId)}
        className='btn btn-primary mb-2 ml-2 m-1'>
        <FontAwesomeIcon icon={faEye} />
      </button>

      <table className='table'>
        <thead>
          <tr>
            <th>DATA E HORA</th>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>STATUS</th>
            {/* <th>STATUS</th> */}
          </tr>
        </thead>
        <tbody>
          {
            sales.map(sale => (
              <tr key={sale.id}>
                <td>{sale.data}</td>
                <td>{sale.product}</td>
                <td>{sale.qtd}</td>
                <td>{sale.value}</td>
                <td>{sale.status}</td>
                {/* <td>{product.stock}</td> */}
                {/* <td>{product.status}</td> */}
              </tr>
            ))
          }
        </tbody>
      </table>
      {/* </div> */}


      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>

        <div className='container mt-5'>
          {/* <h2>{id ? 'Editar Venda' : 'Adicionar Venda'}</h2> */}
          <h2>Cadastrar venda</h2>

          <form action="" onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Nome do Venda: </label>
              <input
                type="text"
                className='form-control'
                id='name'
                name='name'
                value={sales.name}
                placeholder='Mouse Gamer'
                onChange={handleChange}
                // required
                 />
            </div>

            <div className='form-group'>
              <label htmlFor="cnpj">PREÇO: </label>
              <input
                type="text"
                className='form-control'
                id='price'
                name='price'
                // value={sales.price}
                placeholder='00,00'
                onChange={handleChange}
                // required
                 />
            </div>

            <div className='form-group'>
              <label htmlFor="supplierId">Fornecedor: </label>
              <select
                className='form-control'
                id='supplierId'
                name='supplierId'
                value={sales.supplierId}
                onChange={handleChange}
                // required
              >

                <option value="">Selecione um fornecedor</option>

                {
                  sales.map(sale => (
                    <option key={sale.id} value={sale.id} >
                      {sale.name}
                    </option>
                  ))
                }
              </select>
            </div>

            <button
              type='submit'
              title='Salvar'
              // className={id ? 'btn btn-warning mr-2 mb-2 m-1' : 'btn btn-success mr-2 mb-2 m-1'}>{id ? 'Editar' : 'Adicionar'}
              className='btn btn-success mr-2 mb-2 m-1'> Salvar
            </button>

            <button
              onClick={() => setOpenModal(false)}
              title='Cancelar'
              type='button'
              className='btn btn-danger mr-2 mb-2 m-1'>
                Cancelar
            </button>

            <button onClick={() => setOpenModal(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

          </form>
        </div>
      </Modal>

    </div>


  )
}

export default SalesList