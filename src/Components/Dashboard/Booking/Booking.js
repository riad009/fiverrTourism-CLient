import React, { useContext, useEffect, useState } from 'react';
import { url } from '../../Shared/Shared';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
   
       fetch(`${url}/get/findMyBooking/byEmail?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooking(data))
        .catch((error) => console.log(error));
   
  }, [booking]);
  
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
    
      {booking?.map((bookingData) => (
        <div key={bookingData._id} className='m-4'>
          <div className='flex flex-col lg:flex-row text-left m-2'>
            <div className='lg:w-1/2'>
              <img  src={bookingData.tourData.imageUrl} alt='Tour Image' className='w-full h-full' />
            </div>
            <div className='lg:w-1/2 p-4 border-dotted border-y-2 border-r-2 bg-gray-200 border-green-200'>
              <h2 className='text-2xl font-bold mb-4'>{bookingData.tourData.placeName}</h2>
              <p className='mb-2'>
                <strong>Availability:</strong> {bookingData.tourData.availability}
              </p>
              <p className='mb-2'>
                <strong>Duration:</strong> {bookingData.tourData.duration}
              </p>
              <p className='mb-4'>
                <strong>Description:</strong> {bookingData.tourData.description}
              </p>
              <p className='mb-2'>
                <strong>Date and Time:</strong> {bookingData.tourData.dateAndTiming}
              </p>
              <p className='mb-4'>
                <strong>Price:</strong> {bookingData.tourData.price}
              </p>
              <p className='mb-4'>
                <strong>Clearance:</strong> {bookingData.clearance}
              </p>
              
              <button  className='btn hover:bg-red-600 btn-xs text-white' onClick={() => handleDelete(bookingData)}>Delete this booking<AiFillDelete/> </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      ))}
    </div>
  );
};

export default Booking;
