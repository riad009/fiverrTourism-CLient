import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { CgMoreR } from 'react-icons/cg';
import { url } from '../../Shared/Shared';
import axios from 'axios';
const AllTour = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      fetchBookings();
    }, [bookings]);
  
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${url}/get/alltour/list`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
  //delete tour
   //delete from estore
   const handleDelete = async (products) => {
    try {
      console.log('products',products._id)
      const response = await axios.delete(`${url}/delete/tour/${products._id}`);
      console.log('Deletion result:', response.data);
    
     
     
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
    return (
        <div>
            
            <div>
  <h2 className='p-4 shadow-xl text-xl font-semibold bg-gray-200'>All tour List</h2>
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
          {bookings.map(product => (
            <tr key={product._id}>
              <td class="w-1/5"> <img className='w-30 h-20' src={product.imageUrl}alt="" /> </td>
              <td class="w-1/5"> {product.placeName} </td>
              <td class="w-1/5"> {product.price} </td>
              <td class="w-1/5">{product.duration}</td>
              <td class="w-1/5"> <Link  className='btn btn-xs btn-info btn-outline bg-gray-100' to={`/get/tour/id/${product._id}`}> <CgMoreR/></Link>     </td>
              <td class="w-1/5">  <Link  to={`/dashboard/update/get/tour/id/${product._id}`} className="btn btn-xs btn-success btn-outline  bg-gray-100 "><AiFillEdit/> </Link> </td>
              <td class="w-1/5"> <button className='btn btn-xs btn-error btn-outline bg-gray-100 ' onClick={() => handleDelete(product)}> <MdDelete/></button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ToastContainer />
  </div>
</div>

        </div>
    );
};

export default AllTour;