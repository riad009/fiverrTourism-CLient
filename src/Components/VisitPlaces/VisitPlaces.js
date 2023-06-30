import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Visitplacess.css'
import  { url } from '../Shared/Shared';

const VisitPlaces = () => {
  
  const [places, setPlaces] = useState([]);
  const [loading, setloading] = useState(false);
  


  // get all data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/place/get`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  //get data by catagoires 
  const [catagories, setCatagories] = useState([]);
  const [select, setsalaryRangeSchool] = useState("all");

  
  
  
  useEffect(() => {
    setloading(true)
     
    let urlAdress = `${url}/place/get`;

      if (select !== "all") {
        urlAdress = `${url}/place/getByCategory/${select}`;
      }

    fetch(urlAdress)
    
    .then(res => res.json())
    .then(data => {
      setCatagories(data)
   
    setloading(false)
    
    })
    
    }, [select])




  return (
    <div>
       
{/*  */}
<div className='text-green-600 font-semibold flex gap-6 mx-6 my-6'>
  <label className='btn btn-sm bg-green-800'>
    <input
      type="radio"
      value="religious"
      checked={select === 'religious'}
      onClick={(e) => setsalaryRangeSchool(e.target.value)}
    />
    Religious
  </label>
  <label className='btn btn-sm bg-green-800'>
    <input
      type="radio"
      value="park"
      checked={select === 'park'}
    
      onClick={(e) => setsalaryRangeSchool(e.target.value)}
    />
    Park
  </label>
  <label className='btn btn-sm bg-green-800'>
    <input
      type="radio"
      value="historical"
      checked={select === 'historical'}
     
      onClick={(e) => setsalaryRangeSchool(e.target.value)}
    />
    Historical
  </label>
  <label className='btn btn-sm bg-green-800'>
    <input
      type="radio"
      value="all"
      checked={select === 'all'}
    
      onClick={(e) => setsalaryRangeSchool(e.target.value)}
    />
    All
  </label>
  
</div>
 
   {
      loading?
      <>
      <div class="flex justify-center items-center">
      <div class="custom-spinner"></div>
      </div>

      </>
      :
      <>
       <section className=' md:grid-cols-2 mx-2 my-6 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 '>

{
  catagories.map(show => <div>

    <div className=" my-6 shadow-xl rounded-none card card-compact w-96 bg-base-100 gap-2 ">

      {
        show.picture ?
          <><img className='h-72 w-auto' src={show.picture} alt="picture" />   </>
          :
          <>  <img className='h-72 w-auto' src="https://img.freepik.com/premium-vector/medieval-town-scene-with-market-place_1639-25273.jpg?w=2000" alt="picture" />  </>
      }

      <div className="m-2 text-left ">
        <h1 className='mb-2 h-6 text-xl font-semibold overflow-x-auto '>{show.placeName} </h1>
        <p className="flex items-center">
          <CiLocationOn className="" />
          <span>{show.placeLocation}</span>
        </p>

        <p className='mt-2 h-48 overflow-x-auto '>
          {
            show.description ?
              <>{show.description.slice(0, 320)}</>
              :
              <> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ab. Aperiam, voluptas. Eos praesentium magnam optio ea consequatur facilis neque quo, quos dolorem a eaque distinctio iste! Quisquam laboriosam corporis ipsam beatae fugiat? Quo dolore quaerat odit natus enim. Delectus inventore quod accusamus deserunt impedit repudiandae eaque quos officiis nisi? </>
          }
        </p>
        <div className="card-actions justify-end  ">
          {/* id wise dynamic loading */}
          <Link to={`/placeid/${show._id}`} > <button className="btn btn-primary btn-sm bg-green-600 ">Read More ...</button></Link>
        </div>
      </div>
    </div>

  </div>)
}

</section>
      </>
   }
     
    </div>
  );
};

export default VisitPlaces;