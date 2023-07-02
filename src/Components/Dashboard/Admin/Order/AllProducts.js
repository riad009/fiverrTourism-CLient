import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';
import { url } from '../../../Shared/Shared';
import { ToastContainer } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { CgMoreR } from 'react-icons/cg';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${url}/estore/getall`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  

  //delete from estore
  const handleDelete = async (products) => {
    try {
      console.log('products',products._id)
      const response = await axios.delete(`${url}/delete/estore/product/${products._id}`);
      console.log('Deletion result:', response.data);
    
     
     
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
 
  return (
    <div>
    <h2 className='p-4 shadow-xl text-xl font-semibold bg-gray-200'>All E-store Products</h2>
    <div className='text-left'>
      <div className="overflow-x-auto">
        <table class="table table-xs table-pin-rows table-pin-cols w-full">
          <thead>
            <tr>
              <th class="w-1/5">Image</th>
              <th class="w-1/5">Item</th>
              <th class="w-1/5">Price</th>
              <th class="w-1/5">stock</th>
              <th class="w-1/5">Details</th>
              <th class="w-1/5">Update</th>
              <th class="w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td class="w-1/5">  <img className='w-20 h-20' src={product.image[0].url} alt="" /> </td>
                <td class="w-1/5"> {product.name} </td>
                <td class="w-1/5"> {product.price} </td>
                <td class="w-1/5">{product.stock}</td>
                <td class="w-1/5"> <Link  className='btn btn-xs btn-info btn-outline bg-gray-100' to={`/estoreid/${product._id}`}> <CgMoreR/></Link>     </td>
                <td class="w-1/5">  <Link  to={`/dashboard/update/estore/product/${product._id}`} className="btn btn-xs btn-success btn-outline  bg-gray-100 "><AiFillEdit/> </Link> </td>
                <td class="w-1/5"> <button className='btn btn-xs btn-error btn-outline bg-gray-100 ' onClick={() => handleDelete(product)}> <MdDelete/></button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  </div>
  
  );
};

export default AllProducts;
