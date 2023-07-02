import React, { useContext, useEffect, useState } from 'react';
import Cart from './Cart';
import { url } from '../../../Shared/Shared';
import { AuthContext } from '../../../Auth/AuthProvider';
import { Link } from 'react-router-dom';
const Order = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);
    
    
  
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
      

      const [people, setPeople] = useState([]);

      useEffect(() => {
        fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setPeople(data));
      }, [people]);


      //get all order details
      

    return (
        <div>
           <div className="overflow-x-auto ">
       <table class="table table-xs table-pin-rows table-pin-cols w-full">
  <thead>
    <tr>
      <th class="w-1/6">User sss</th>
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

export default Order;