import React, { useEffect, useState } from 'react';
import { url } from '../../Shared/Shared';
import ImgSlider from './ImgSlider';
import { Link } from 'react-router-dom';
const CatagoriesProducts = () => {
    const [product, setProduct] = useState([]);
   
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await fetch(`${url}/estore/get/featureItem`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      fetchReviews();
    }, []);
    console.log('product',product)
  
    console.log('product',product)
    return (
    <section>

    
     {/*  */}
         <div className='grid grid-cols-5 gap-2'>
     {
        product.slice(0, 5).map(p=> <Link to={`/estoreid/${p._id}`} className='hover:shadow-xl overflow-x-auto mb-4 rounded-md '>
        
            <div  className=" bg-base-100 border-2 border-gray-100 p-8  ">
         <img className='rounded-full h-24 w-24' src={p.image[0].url} alt="Shoes" />
         <div className="">
            
        
         <p className='ml-4 mt-2 text-gray-600 font-semibold'>{p.name}</p>
         
   
          </div>
        </div>

        </Link>)
     }
     </div>
     {/*  */}
     
    <section className='bg-[#E1E2DB] p-8 '>
    <h1 className=' flex items-center font-semibold my-4 text-xl justify-center'>Featured Products</h1>
     <div className='grid grid-cols-5 gap-2 '>
       
     {
        product.slice(0, 5).map(p=> <div className='hover:shadow-xl  overflow-x-auto mb-4 rounded-md '>
            <div className=" bg-base-100 border-2 border-gray-100 p-6   ">
         <img className=' h-24 w-24' src={p.image[0].url} alt="Shoes" />
         <div className="">
    
         <p className='ml-4 mt-2 text-gray-600 font-semibold'>{p.name}</p>
   
          </div>
        </div>
        </div>)
     }
     </div>
    </section>
    {/*  */}
     

     {/*  */}
     {/* <div className='my-12'><ImgSlider></ImgSlider></div> */}
    </section>
    );
};

export default CatagoriesProducts;