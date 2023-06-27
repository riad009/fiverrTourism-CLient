import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';
import { url } from '../../../Shared/Shared';
import { ToastContainer } from 'react-toastify';
const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${url}/email/findmyproduct?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div>
      <h2>My Products</h2>
      {products.map(product => (
             <div className='text-left'>
             <div className="overflow-x-auto ">
             <table class="table table-xs table-pin-rows table-pin-cols w-full">
        <thead>
          <tr>
            <th class="w-1/3">Item</th>
            <th class="w-1/3">Price</th>
            <th class="w-1/3">Quantity</th>
          
          </tr>
        </thead>
        <tbody>
             <tr>
            <td class="w-1/2"> {product.name} </td>
            <td class="w-1/2"> {product.price} </td>
            <td class="w-1/2">{product.price}</td>
            
               </tr>
           
             </tbody>
             </table>
          
              </div> 
              <ToastContainer />
            </div>
      ))}
    </div>
  );
};

export default MyProduct;
