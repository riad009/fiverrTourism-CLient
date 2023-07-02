import React, { useContext, useEffect, useState } from 'react';
import { url } from '../../../Shared/Shared';
import { AuthContext } from '../../../Auth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import axios from 'axios';
const Cart = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
console.log('cart',order)
  useEffect(() => {
    fetch(`${url}/findUserByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);

  //calculate the total price
  useEffect(() => {
    const calculateTotalPrice = () => {
      const sum = order.reduce((acc, p) => acc + p.card.price, 0);
      setTotalPrice(sum);
    };

    calculateTotalPrice();
  }, [order]);

  //call the function 
  const handleButtonClick = () => {
    const confirmed = window.confirm('Do you want to confirm the order?');
    if (confirmed) {
      handleOrder();
    }
  };
 //confirm order
  const handleOrder = async () => {
    const data = {
      email: user.email,
      order: order,
      totalPrice:totalPrice,
      orderStatus: 'pending',
    };

    try {
      const response = await axios.post(`${url}/order/post`, data);
      toast.success('Order confirmed');
      alert('post done');
    } catch (error) {
      console.error(error);
    }
  };


  //delete item from cart
  const handleDelete = async (p) => {
    try {
      console.log('product id', p._id);
      const response = await axios.delete(`${url}/delete/cart/${p._id}`);
      console.log('Deletion result:', response.data);
      toast('Item deleted from cart');

      const updatedOrder = order.filter((item) => item._id !== p._id);
      setOrder(updatedOrder);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

    return (
        <div className='text-left'>
       <div className="overflow-x-auto ">
       <table class="table table-xs table-pin-rows table-pin-cols w-full">
  <thead>
    <tr>
      <th class="w-2/6"></th>
      <th class="w-2/6">Item</th>
      <th class="w-1/6">Price</th>
      <th class="w-1/6">Quantity</th>
      
      <th class="w-1/6">Remove</th>
    </tr>
  </thead>
  <tbody>
    
      {
        order.map(p=> <tr>
      <td class="w-2/6"><img src={p.card.image[0]?.url} alt="" />
      
       </td>
      <td class="w-2/6">{p.card.name}</td>
      <td class="w-1/6">{p.card.price}</td>
      <td class="w-1/6">{p.count}</td>
     
     
      <td class="w-1/6">  <button onClick={() => handleDelete(p)} className="mr-2 mb-2 btn-sm btn btn-outline btn-error"> <MdDelete/></button></td>
        </tr>)
      }

    
   
    
  </tbody>
       </table>
        
        </div> 
        <div className='flex items-center m-4 font-semibold text-xl  alert w-1/4'>
          Total Price:  <GiPriceTag/> {totalPrice}
        </div>
        <button onClick={handleButtonClick} className='btn btn-success m-4 my-6 text-white bg-green-600  rounded font-semibold' >Confirm order</button>
        <ToastContainer />
      </div>
    );
};

export default Cart;