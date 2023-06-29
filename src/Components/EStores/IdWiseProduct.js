import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb'
import { TbReplace } from 'react-icons/tb'
import { SiAdguard } from 'react-icons/si'
import axios from 'axios';
import { url } from '../Shared/Shared';
import { AuthContext } from '../Auth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
const IdWiseProduct = () => {
  const {user}=useContext(AuthContext)
  const email = user?.email;
  const p = useLoaderData();
  const images = p.image.slice(0, 5); // Assuming p.image is an array of image objects

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const roundedRating = Math.round(p.stars);
 const stars = '★'.repeat(roundedRating);

 //add to card
 const navigate=useNavigate()
 const handleAddToCard = async (event) => {
  event.preventDefault();
  if (!user?.email) {
    alert('Please Login')
    navigate('/login')
  }
  const data = {
   email: email,
   card: p,
  };
 

  try {
    const response = await axios.post(`${url}/order/card/post`, data);
   console.log('data',data)
  
    toast.success('Add to cart done')
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section className='m-12 flex gap-8'>
      <div className="flex w-1/3">
      <div className="w-1/4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full cursor-pointer ${
              selectedImage === image ? 'border border-blue-500' : ''
            }`}
            onClick={() => handleImageClick(image)}
          >
            <img
              className="w-full h-auto"
              src={image.url}
              alt={`thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="w-3/4">
        <img
          className="w-full h-auto"
          src={selectedImage.url}
          alt="selectedImage"
        />
      </div>
    </div>
{/*  */}
    <div className='text-left w-2/3 '>
     <h1>{p.name}</h1>
     
     <div className='my-4 flex gap-2'>
    <h1>{p.stars}</h1>
     <h2 className='rating'>{stars}</h2>
     <h3>({p.reviews} customer reviews)</h3>
     </div>

     <h1 className='text-bg-400 font-semibold my-6'>Price: Rs {p.price}</h1>
     <p>{p.description}</p>
     <div className='my-6 grid grid-cols-4'>
        <p><TbTruckDelivery/>Fast Delivery</p>
        <p><TbReplace/> 30 days Replacement</p>
        <p><SiAdguard/>1 year Warranty</p>
     </div>
     <h1 className='my-3'>
     {p.stock > 0 ? `Available: In stock (${p.stock})` : `Out of stock (${p.stock})`}
   </h1>


   <h1 className='my-3'>Shop Name: {p.shopName} </h1>


     

     <div className=''>
      <button onClick={handleAddToCard} className='btn btn-success text-white'>Add to cart</button>
     </div>
    </div>
    <ToastContainer />
    </section>
  );
};

export default IdWiseProduct;
