import React, { useContext, useEffect, useState } from 'react';
import { url } from '../../Shared/Shared';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const IdListBooking = () => {
  const { user } = useContext(AuthContext);


  const booking= useLoaderData()
  
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

  
  return (
    <div>
     <h2>jello</h2>
     
        <div key={booking?.tourData._id} className='m-4'>
          <div className='flex flex-col lg:flex-row text-left m-2'>
            <div className='lg:w-1/2'>
              <img  src={booking.tourData.imageUrl} alt='Tour Image' className='w-full h-full' />
            </div>
            <div className='lg:w-1/2 p-4 border-dotted border-y-2 border-r-2 bg-gray-200 border-green-200'>
              <h2 className='text-2xl font-bold mb-4'>{booking.tourData.placeName}</h2>
              <p className='mb-2'>
                <strong>Availability:</strong> {booking.tourData.availability}
              </p>
              <p className='mb-2'>
                <strong>Duration:</strong> {booking.tourData.duration}
              </p>
              <p className='mb-4'>
                <strong>Description:</strong> {booking.tourData.description}
              </p>
              <p className='mb-2'>
                <strong>Date and Time:</strong> {booking.tourData.dateAndTiming}
              </p>
              <p className='mb-4'>
                <strong>Price:</strong> {booking.tourData.price}
              </p>
              <p className='mb-4'>
                <strong>Clearance:</strong> {booking.clearance}
              </p>
              <button  className='btn btn-warning btn-xs text-white' onClick={() => handleDelete(booking)}>Delete this booking<AiFillDelete/> </button>
            </div>
          </div>
          <ToastContainer />
        </div>

    </div>
  );
};

export default IdListBooking;
