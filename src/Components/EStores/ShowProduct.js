import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../Shared/Shared';
const ShowProduct = ({p}) => {
    

    //1.4 = 1 star rating
    //1.6 = 2 star rating
    const roundedRating = Math.round(p.stars);
    const stars = '★'.repeat(roundedRating);
   

   
    return (
        <div>
             <Link   to={`/estoreid/${p._id}`} className="  bg-gray-100 ">
  
  <figure> 
    
    {
        p.image[0].url?
        <>
        <img className='h-64 w-96' src={p.image[0].url} alt="picture" />
        </>
        :
        <><img className='h-64 w-96' src="https://usa-oss.edifier.com/Uploads/images/2021/07/19/2021071910430016266625805340.jpg" alt="" /></>
    } </figure>
  <div className="card-body">
  <div className="card-title flex justify-between">
  
  <div className="hover:underline hover:text-green-400">{p.name} <span className="badge badge-secondary">NEW</span></div>
 
  <div className="text-right">Rs {p.price}</div>
  </div>
<p>{p.category}</p>



    <p>{p.description.slice(0,100)}</p>
    
   
    <div className="card-actions justify-end">
     <div className="">{p.reviews} Reviews</div> 
      <div className=" text-xl rating">
      {stars}
    </div>
    </div>
  </div>
  
  
       </Link>    
      
        </div>
    );
};

export default ShowProduct;