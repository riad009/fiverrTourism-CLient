import React, { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import { CiTimer } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import { url } from '../Shared/Shared';
import { Link } from 'react-router-dom';
import './PlanTour.css'
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



  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };
//search

const [search, setsearch] = useState(""); //take user input
 

const [getitem, setGetSearchByItem] = useState([]); //get from db
console.log('getitem getitem',getitem)

useEffect(() => {


  let urlAdress = `${url}/tour/search/${search}`;


  fetch(urlAdress)

    .then(res => res.json())
    .then(data => {
      setGetSearchByItem(data)



    })

}, [search])



const handlesearch = (event) => {
  setsearch(event.target.value);
};



  return (

    <div>
 <div className="flex  bg-green-600 font-bold shadow-xl p-2">
  <h1 className='mx-4 text-2xl  text-white'>Nature Adventure Club</h1>
     
  <input    onChange={handlesearch}  type="text"  placeholder="Search" className="input input-bordered input-info w-full max-w-xs" />
      {/* <input
        type="text"
        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      {/* <button
        className="bg-blue-500 text-white rounded-r px-4 py-2 ml-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
      >
        Search
      </button> */}
    </div>

    <div class="relative">
  <div class="absolute top-0 left-1/4 shadow-xl  z-10">
    {
      search.length > 0 ?
      <>  {
        getitem.slice(0, 4).map(t => (
          <div class="bg-white bg-opacity-80 p-2 shadow px-20 border-1 hover:bg-green-400 ">
              <Link to={`/get/tour/id/${t._id}`} className=''>{t.placeName}</Link>
         
         
         
          </div>
        ))
      }</>
      :
      <></>

    }
  
  </div>
</div>



<section className='flex overflow-x-auto'>
  {tourDetails.map((card, index) => (
    <div className={`k card-container ${index % 2 === 0 ? 'bend-left' : ''}`}>
      <div className=" w-96 h-96 relative border-4 border-black bg-green-200  background-image w-96 bg-base-100 shadow-xl image-full transform -skew-x-12">
        <figure>
          <img  />
        </figure>
        <div className="">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white p-4 font-bold">
            <h1 className='bg-blue-600 p-1 rounded px-8'>rs. {card.price}</h1>
            <h1 className='my-4 uppercase text-xl '>{card.placeName}</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  ))}
</section>

   <div className='my-4'>
   <h1 className='text-xl font-semibold'>Upcomming Tours</h1>
   <p className='text-gray-400 '>Take A look at our upcomming public tourse</p>
   </div>


      {/*  */}
    <section className='lg:grid lg:grid-cols-3 gap-2 sm:grid sm:grid-cols-2'>
      {tourDetails.map((t) => (
        <div className='m-4' key={t.id}>
          <div className='text-left overflow-x-auto card border-dotted border-2 border-gray-400 p-1 rounded-none'>
            <figure className='relative'>
              <img className='h-64 w-96' src={t.imageUrl} alt='car!' />
              <div className='absolute bottom-0 w-full h-1/5 bg-black bg-opacity-50   flex items-center'>
                <p className='text-white text-left font-bold ml-4'>{t.placeName}</p>
              </div>
            </figure>
            <div className=''>
              <section>
                <p className='bg-blue-500 p-0.7 mx-0.5 px-1 my-1 w-2/4 text-xs text-white uppercase'>{t.sortTrailer.slice(0,20)}</p>
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
    </div>
  );
};

export default PlanTour;
