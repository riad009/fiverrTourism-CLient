import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import axios from 'axios';
import { url } from '../Shared/Shared';
import { ToastContainer, toast } from 'react-toastify';

const IdTour = () => {
    const {user}=useContext(AuthContext)
 
    const tourData = useLoaderData();
  
  
  // post for booking
  const handleBookNow = async (event) => {
    event.preventDefault();

    const data = {
      tourData,
      email: user.email
     
    };

    try {
      const response = await axios.post(`${url}/post/tour/booking`, data);
      toast.success('Booking Success');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row text-left m-2   ">
      <div className="lg:w-1/2 ">
        <img src={tourData.imageUrl} alt="Tour Image" className="w-full h-full" />
      </div>
      <div className="lg:w-1/2 p-4 border-dotted border-y-2 border-r-2 bg-gray-200 border-green-200 ">
        <h2 className="text-2xl font-bold mb-4">{tourData.placeName}</h2>
        <p className="mb-2">
          <strong>Availability:</strong> {tourData.availability}
        </p>
        <p className="mb-2">
          <strong>Duration:</strong> {tourData.duration}
        </p>
        <p className="mb-4">
          <strong>Description:</strong> {tourData.description}
        </p>
        <p className="mb-2">
          <strong>Date and Time:</strong> {tourData.dateTime}
        </p>
        <p className="mb-4">
          <strong>Price:</strong> {tourData.price}
        </p>
        <button onClick={handleBookNow} className="bg-blue-500 text-white px-4 py-2 rounded">
          Book Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default IdTour;
