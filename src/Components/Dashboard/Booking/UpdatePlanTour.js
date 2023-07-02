import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { url } from '../../Shared/Shared';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
const UpdatePlanTour = () => {

  const tour =useLoaderData()
  
  const [placeName, setPlaceName] = useState('karachi Pakistan');
  const [sortTrailer, setSortTrailer] = useState('NATURE ADVENTURE CLUB');
  const [location, setLocation] = useState('karachi');
  const [duration, setDuration] = useState('3 Days 2 Night');
  const [price, setPrice] = useState('32000');
  const [rating, setRating] = useState('4');
  const [description, setDescription] = useState('Nice place');
  const [dateAndTiming, setDateAndTiming] = useState(new Date());
  const [availability, setAvailability] = useState('Yes');
  const [imageUrl, setImageUrl] = useState('data:image/jpeg;base64,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');

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log('tour',tour._id)
    const formData = {
      placeName,
      sortTrailer,
      location,
      duration,
      price,
      description,
      dateAndTiming,
      availability,
      imageUrl,
    };
 console.log('formData',formData)
 try {
  const response = await axios.put(`${url}/update/tour/${tour._id}`, formData);
  console.log(response.data);
  // Handle successful update
} catch (error) {
  console.error(error);
  // Handle error
}
  };

  return (
    <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Post a Tour</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-1">
            
            <input
              type="text"
             
              onChange={(e) => setPlaceName(e.target.value)}
              placeholder="Place Name"
             
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
            />
          </div>
          {/*  */}
          <div className="flex items-center gap-1">
            
            <input
              type="text"
            
              onChange={(e) => setSortTrailer(e.target.value)}
              placeholder="Default: NATURE ADVENTURE CLUB"
             
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
            />
          </div>
          {/*  */}
          <div className="flex items-center gap-1">
           
            <input
              type="text"
             
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
             
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
            />
          </div>
          {/*  */}
          <div className="flex items-center gap-1">
           
            <input
              type="text"
              
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
             
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
            />
          </div>
          <input
            type="text"
            
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
           
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="3 Days 2 Night"
           
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="dateAndTiming" className="text-gray-600">
              Date and Timing:
            </label>
            <DatePicker
              id="dateAndTiming"
              selected={dateAndTiming}
              onChange={(date) => setDateAndTiming(date)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
              dateFormat="MMMM d, yyyy h:mm aa"
              showTimeSelect
              timeFormat="h:mm aa"
              timeIntervals={15}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="availability" className="text-gray-600">
              Availability:
            </label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <input
            type="text"
            
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-400"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Create Tour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlanTour;
