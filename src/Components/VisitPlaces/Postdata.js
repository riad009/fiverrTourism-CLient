import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../Shared/Shared';
const PostData = () => {
  const [placeName, setPlaceName] = useState('');
  const [placeType, setPlaceType] = useState('all');
  const [placeLocation, setPlaceLocation] = useState('');
  const [picture, setPicture] = useState('');
  const [timings, setTimings] = useState('');
  const [description, setDescription] = useState('');
  const [history, setHistory] = useState('');
  const [iframe, setIframe] = useState('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14162938.508285249!2d58.3731919608807!3d29.92913724027424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2sbd!4v1688211594577!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      placeName,
      placeType,
      placeLocation,
      picture,
      timings,
      description,
      history,
      iframe,
    };
   

    try {
      const response = await axios.post(`${url}/place/post`, data);
     
      resetForm();
      alert('post done')
    } catch (error) {
      console.error(error);
    }
  };
 
  const resetForm = () => {
    setPlaceName('');
    setPlaceType('');
    setPlaceLocation('');
    setPicture('');
    setTimings('');
    setDescription('');
    setHistory('');
    setIframe('');
  };

  return (

    <div>
      <div className='w-1/5 m-8'>
    <img src="https://img.freepik.com/free-vector/posts-concept-illustration_114360-194.jpg" alt="" />
    </div>
  <section className='flex text-left  m-8'>

   
   <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Post Data </h2>
      <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-2 sm:grid-cols-1 space-y-4">

      <div>
  <label htmlFor="placeType" className="block font-medium">
    Place Type:
  </label>
  <select
    id="placeType"
    value={placeType}
    onChange={(e) => setPlaceType(e.target.value)}
    className="my-2 select select-success w-full max-w-xs"
  >
    <option disabled selected>Pick place categories</option>
    <option value="All">All</option>
    <option value="religious">Religious</option>
    <option value="park">Park</option>
    <option value="historical">Historical</option>
  </select>
      </div>

        <div>
          
          <label htmlFor="placeName" className="block font-medium">
            Place Name:
          </label>

          <input
            id="placeName"
            type="text"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            className="my-2 input input-bordered input-success w-full max-w-xs"
          />
        </div>
        <div>
          
          <label htmlFor="picture" className="block font-medium">
            Place picture:
          </label>

          <input
            id="placeName"
            type="text"
            placeholder='give img link here https:link'
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            className="my-2 input input-bordered input-success w-full max-w-xs"
          />
        </div>
       
        <div>
          <label htmlFor="placeLocation" className="block font-medium">
            Place Location:
          </label>
          <input
            id="placeLocation"
            type="text"
            value={placeLocation}
            onChange={(e) => setPlaceLocation(e.target.value)}
            className='my-2 input input-bordered input-success w-full max-w-xs'
          />
        </div>
        <div>
          <label htmlFor="timings" className="block font-medium">
          Timings:
          </label>
          <input
            id="timings"
            type="text"
            value={timings}
            onChange={(e) => setTimings(e.target.value)}
            className='my-2 input input-bordered input-success w-full max-w-xs'
          />
        </div>
        <div>
          <label htmlFor="history" className="block font-medium">
           Google map Iframe Link (Embed map)
          </label>
          <input
            id="history"
            placeholder='Example: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.4300070296!2d90.25481431203616!3d23.78054934702908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1688206929307!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            onChange={(e) => setIframe(e.target.value)}
            className="my-2 input input-bordered input-success w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-xs  textarea textarea-success"
          /> 
        </div>
        <div>
          <label htmlFor="history" className="block font-medium">
            History:
          </label>
          <textarea
            id="history"
            value={history}
            onChange={(e) => setHistory(e.target.value)}
            className="w-full max-w-xs  textarea textarea-success"
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="w-1/2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  
   
   
  </section>
    </div>
  );
};

export default PostData;
