import React, { useContext, useEffect, useState } from 'react';

import { url } from '../../../Shared/Shared'

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider';
const OrderHistory = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);
    
   
  
    useEffect(() => {
      fetch(`${url}/get/history/byemail?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }, [order]);

    return (
        <div>
           <div className="overflow-x-auto ">
       <table class="table table-xs table-pin-rows table-pin-cols w-full">
  <thead>
    <tr>
      <th class="w-1/6">User</th>
      <th class="w-1/6">Buying Date </th>
      <th class="w-1/6">Price</th>
      <th class="w-1/6">item</th>
      <th class="w-1/6">Status</th>
    
    </tr>
  </thead>
  <tbody>
    
      {
        order?.map(p=> <tr>
      <td class="w-2/8"> {p.email} </td>      
      <td class="w-2/8"> {p.time} </td>      
      <td class="w-2/8">{p.totalPrice}  </td>
      <td class="w-2/8">   <Link to={`/dashboard/get/idWise/order/${p._id}`} > <button className="btn btn-info btn-outline btn-sm ">Details</button></Link>
       </td>
      <td class="w-3/8"> {p.orderStatus} </td>
     
        </tr>)
      }

    
   
    
  </tbody>
       </table>
    
        </div>
        </div>
    );
};

export default OrderHistory;