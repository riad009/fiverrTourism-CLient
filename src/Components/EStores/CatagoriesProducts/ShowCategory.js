import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = ({p}) => {
   
    return (
        <Link  to={`/dashboard/categoryId/${p._id}`}>
               <div  className=" bg-base-100 border-2 border-gray-100 p-8  ">
         <img className='rounded-full h-24 w-24' src={p.cateryImg} alt="Shoes" />
         <div className="">
            
        
         <p className='ml-4 mt-2 text-gray-600 font-semibold'>{p.category}</p>
       
   
          </div>
        </div>
        </Link>
    );
};

export default ShowCategory;