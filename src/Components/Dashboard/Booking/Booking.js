import React, { useContext, useEffect, useState } from 'react';
import { url } from '../../Shared/Shared';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Auth/AuthProvider';


const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
   
       fetch(`${url}/get/findMyBooking/byEmail?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooking(data))
        .catch((error) => console.log(error));
   
  }, [user]);

  return (
    <div>
     <h2>jello</h2>
      {booking.map((bookingData) => (
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
            </div>
          </div>
          <ToastContainer />
        </div>
      ))}
    </div>
  );
};

export default Booking;
