import React, { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import { CiTimer } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import { url } from '../Shared/Shared';
import { Link } from 'react-router-dom';

const PlanTour = () => {
  const [tourDetails, setTourDetails] = useState([]);
 

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await fetch(`${url}/get/tour`);
        const data = await response.json();
        setTourDetails(data);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    fetchTourDetails();
  }, []);

  console.log('tourDetails', tourDetails);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <section className='lg:grid lg:grid-cols-3 gap-2 sm:grid sm:grid-cols-2'>
      {tourDetails.map((t) => (
        <div className='m-4' key={t.id}>
          <div className='text-left card border-dotted border-2 border-gray-400 p-1 rounded-none'>
            <figure className='relative'>
              <img className='h-64 w-96' src={t.imageUrl} alt='car!' />
              <div className='absolute bottom-0 w-full h-1/5 bg-black bg-opacity-50   flex items-center'>
                <p className='text-white text-left font-bold ml-4'>{t.placeName}</p>
              </div>
            </figure>
            <div className=''>
              <section>
                <p className='bg-blue-500 p-0.7 mx-0.5 px-1 my-1 w-2/4 text-xs text-white uppercase'>{t.sortTrailer}</p>
              </section>

              <section className='flex justify-between '>
                <h1 className='text-xl font-bold my-1'>Rs. {t.price} </h1>
                <h1 className='text-xl flex items-center gap-1'><p className='text-yellow-400'><AiFillStar/></p>4</h1>
              </section>
              <section className='text-gray-400 font-semibold flex justify-between my-1 mr-1'>
                <h1 className='flex items-center gap-2'>
                  <CiCalendarDate />
                  {formatDate(t.dateAndTiming)}
                </h1>
                <h1 className='flex items-center gap-2'><CiTimer/>{t.duration}</h1>
              </section>
              <div className=''>
               <Link to={`/get/tour/id/${t._id}`} className='btn-md btn bg-blue-500 text-white mt-6 w-full rounded-none'>More details</Link>
       
               
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PlanTour;
