import React, { useState, useEffect } from 'react';
import axios from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPenToSquare, faTrash, faPlus, faArrowsRotate, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const navigate = useNavigate();

    // http://localhost:3000/products?_expand=supplier

    useEffect(() => {
        fetchProducts();
    }, []);

    // useEffect(() => {
    //     axios.get('/products?_expand=supplier')
    //         .then(response => {
    //             setProducts(response.data)
    //         })
    //         .catch(error => console.error("Ocorreu um erro ao obter um produto: ", error))
    // }, []);


    const fetchProducts = () => {

        axios.get('/products?_expand=supplier')
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => console.error("Ocorreu um erro ao obter um produto: ", error))
    }

    function deleteProduct(id) {
        axios.delete(`/products/${id}`)
            .then(() => {
                alert("Produto Excluído com sucesso.")
                fetchProducts()
            })
            .catch(error => console.error("Ocorreu um erro ao excluir o produto: ", error))
    }

    function getProduct(id) {
        axios.delete(`/product/${id}`)
            .then(() => {

            })
            .catch(error => console.error("Ocorreu um erro ao excluir um produto: ", error))
    }


    return (
        <div className="container mt-5">
            <h2 className='mb-4'>Lista de Produtos</h2>

            <button 
                title=""
                onClick={() => navigate('/add-produto')} 
                className='btn btn-primary mb-2 mr-4 m-1'>
                <FontAwesomeIcon icon={faPlus} /> 
            </button>

            <button 
                title=""
                className='btn btn-primary mb-2 ml-4 m-1'>
                <FontAwesomeIcon icon={faArrowsRotate} 
                onClick={fetchProducts} />
            </button>
            
            <button 
                title=""
                onClick={() => navigate(`/editar-produto/${selectedProductId}`)} 
                className='btn btn-primary mr-2 mb-2 m-1'>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
           
            <button 
                title=""
                onClick={() => deleteProduct(selectedProductId)} 
                className='btn btn-primary mb-2 ml-2 m-1'>
                <FontAwesomeIcon icon={faTrash} />
            </button>
           
            <button
                title=""
                onClick={() => getProduct(selectedProductId)}
                className='btn btn-primary mb-2 ml-2 m-1'>
                <FontAwesomeIcon icon={faEye} />
            </button>
           
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>PREÇO</th>
                        <th>FORNECEDOR</th>
                        <th>ESTOQUE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.supplier.name}</td>
                                <td>{product.stock}</td>
                                <td>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default ProductList