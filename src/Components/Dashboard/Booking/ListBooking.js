import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../Shared/Shared';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
const ListBooking = () => {
  const [bookings, setBookings] = useState([]);
  console.log('bookings', bookings);

  useEffect(() => {
    getAllBookings();
  }, [bookings]);

  const getAllBookings = async () => {
    try {
      const response = await axios.get(`${url}/get/allbooking/list`);
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //handle delete
  const handleDelete = async (p) => {
    try {
      console.log('product id', p._id);
      const response = await axios.delete(`${url}/delete/bookingList/${p._id}`);
      console.log('Deletion result:', response.data);
    
     toast.error('Deleted')
     
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // update clearance

  const [clearance, setClearance] = useState('');

  const handleClearanceChange = (e) => {
    setClearance(e.target.value);
  };
  const handleUpdate = (u) => {
          
         
    const submit = {
        clearance: clearance
    };
  
    fetch(`${url}/update/booking/clearance/${u._id}`, {
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
  // update clearance
  return (
    <div>
    
      <div className="overflow-x-auto ">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
            
              <td>Email</td>
              <td>Location</td>
              <td>Price</td>
              <td>Clearance booking</td>
           
             
              <td>Booking Time</td>
              <td>Details</td>
              <td>Delete</td>
            
            
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className='bg-blue-400'>
                <th>{index + 1}</th>
                
                  <td>{booking.email}</td>
                <td>{booking.tourData.placeName}</td>
               
                <td>{booking.tourData.price}</td>
               
                <td>

                <div onClick={() => handleUpdate(booking)} class="p-4">
  <label class="block mb-2 text-sm font-medium text-gray-700">
    Clearance: {booking.clearance}
    <select value={booking.clearance} onChange={handleClearanceChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <option value="">Select Clearance</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
      <option value="pending">Pending</option>
    </select>
  </label>
  <button type="submit" class="btn-success w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-800">Update</button>
</div>


                </td>
          
                <td>{booking.timestamp}</td>
                <td className=''> <Link to={`/dashboard/get/bookingList/id/${booking._id}`} > <button className="btn btn-info btn-outline btn-sm ">Details</button></Link>
                   
                </td>
                <td>  <button  className='text-yellow-400 text-xl' onClick={() => handleDelete(booking)}><AiFillDelete/> </button> </td>
               
              </tr>
            ))}
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ListBooking;
