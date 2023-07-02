import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GoogleMap from './GoogleMap';

const Details = ({show}) => {
   
    const city = useLoaderData()
    return (
       <section>
         <div className='flex m-8'>
            <div className='w-1/2 '>
               {
                city.picture?
                <><img src={city.picture} alt="" /></>
                :
                <> <img src="https://www.jetsetter.com//uploads/sites/7/2018/04/UH0NeXII-1380x690.jpeg" alt="" /></>
               }
            </div>
            {/*  */}
            <div className='w-1/2 text-left mx-4'>
               <h1>{city.placeName}</h1>
               <h2 className='font-semibold'>Place Type: <span className='font-normal'>{city.placeType}</span></h2>
               <p className='my-3'> {city.description} </p>
               <h2 className='font-semibold'>Address: <span className='font-normal'>{city.placeLocation}</span></h2>
               <h2 className='font-semibold'>Timing: <span className='font-normal'>{city.timings}</span></h2>
             
            </div>
           
        </div>
        <GoogleMap city={city}></GoogleMap>
       </section>
    );
};

export default Details;