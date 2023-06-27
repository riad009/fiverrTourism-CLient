import React, { useContext, useEffect, useState } from 'react';
import Cart from './Cart';
import { url } from '../../../Shared/Shared';
import { AuthContext } from '../../../Auth/AuthProvider';
import { Link } from 'react-router-dom';
const Order = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);
    console.log('order',order)
    
  
    useEffect(() => {
      fetch(`${url}/findOrderByEmail?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }, [order]);


    //order status change
    const handleStatus = (u) => {
          
         
        const submit = {
            orderStatus: "complete"
        };
      
        fetch(`${url}/update/productStatus/${u._id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(submit)
        })
        .then(res => res.json())
        .then(data => {
        
        });
      };
      
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
      <th class="w-1/7">Action</th>
      
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
      <td><button onClick={() => handleStatus(p)} className=" btn-sm btn btn-outline btn-success">Make it complete</button></td>
     
        </tr>)
      }

    
   
    
  </tbody>
       </table>
    
        </div>
        </div>
    );
};

export default Order;