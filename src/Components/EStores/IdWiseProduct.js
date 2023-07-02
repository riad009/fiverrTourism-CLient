import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb'
import { TbReplace } from 'react-icons/tb'
import { SiAdguard } from 'react-icons/si'
import axios from 'axios';
import { url } from '../Shared/Shared';
import { AuthContext } from '../Auth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillStar } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
const IdWiseProduct = () => {
  const {user}=useContext(AuthContext)
  const email = user?.email;
  const p = useLoaderData();
  

  //selct color
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  //selct color
  const images = p.image.slice(0, 5); // Assuming p.image is an array of image objects

  const [selectedImage, setSelectedImage] = useState(images[0]);


  // sleect quantity
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  //select color

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
   count: count,
   selectedColors:selectedColor ,
  };
 

  try {
    const response = await axios.post(`${url}/order/card/post`, data);
   console.log('data',data)
  
    toast.success('Add to cart done')
  } catch (error) {
    console.error(error);
  }
};


 //get comments
 const [comments, setComments] = useState([]);

const filteredComments = comments.filter(comment => comment.productID === p._id);
console.log('filteredComments',filteredComments); // Number of matching comments found
const [averageStars, setAverageStars] = useState(5);

useEffect(() => {
  const calculateAverageStars = () => {
    const filterStars = comments.filter(comment => comment.productID === p._id);

    if (filterStars.length > 0) {
      const sumOfStars = filterStars.reduce((accumulator, comment) => {
        if (comment?.stars) {
          return accumulator + comment.stars;
        }
        return accumulator;
      }, 0);

      const averageStars = sumOfStars / filterStars.length;
      setAverageStars(averageStars.toFixed(1));
    } else {
      setAverageStars(0);
    }
  };

  calculateAverageStars();
}, [filteredComments]);

// Number of matching comments found

 
 useEffect(() => {
   const fetchComments = async () => {
     try {
       const response = await axios.get(`${url}/get/comment`);
       setComments(response.data);
     } catch (error) {
       console.error('Error fetching comments:', error);
     }
   };

   fetchComments();
 }, [comments]);


 //delete comments 
 const handleDelete = async (c) => {
    console.log('product id', c);
  try {
    console.log('product id', c);
    const response = await axios.delete(`${url}/delete/comment/${c}`);
    console.log('Deletion result:', response.data);
  
   toast.error('Comment deleted')
   
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

//find users

const [people, setPeople] = useState([]);


//find user
useEffect(() => {
  fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => setPeople(data));
}, [people]);
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
    <h1 className='flex items-center gap-1 text-orange-400 font-semibold'> <AiFillStar/>{averageStars} </h1>
     <h2 className='rating'> </h2>
     <h3>({filteredComments.length} customer reviews)</h3>
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

    <section className='my-4 font-bold text-xl'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <button onClick={decreaseCount}>-</button>
      <h2 className='' style={{ margin: '0 10px' }}>{count}</h2>
     
      <button onClick={increaseCount}>+</button>
    </div>
    </section>
   {/*ssssssssssssssssssssssss  */}
  
   <div className='mt-3 flex items-center'>
    <h1>Color:</h1>
      {p.selectedColors?.map((color, index) => (
          <div  key={index}>
           <p 
           className={`w-4 rounded p-2 cursor-pointer gap-1 mx-1 my-4 ${selectedColor === color ? 'selected' : ''}`}
           onClick={() => handleColorSelect(color)}
             
            style={{ backgroundColor: color.code }}
          >
          
          </p>
        </div>
      ))}
       </div>
   {/*  */}
   <p  className='mb-6 '>Selected Color: {selectedColor ? selectedColor.name : 'None'}</p>
 
     <div className=''>
      <button onClick={handleAddToCard} className='btn btn-success text-white'>Add to cart</button>
     </div>

     <section>
      <div className='overflow-x-auto h-96'>
       {
        filteredComments.map(c=><div className='my-3'>
        <div className="card w-96 bg-base-100 shadow-xl ">
  <div className="card-body">
    <h2 className="space-x-2  text-xl flex items-center"> <FaUserCircle/> <p className='text-md'>{c.email}</p>
   
   {
    people.map(p=><div>
        {
          p.accountType =="admin" ||   p.accountType =="smanager" ||  p.accountType =="shopkepper"  ?
          <><button onClick={() => handleDelete(c._id)} className='btn-xs btn-error btn btn-outline'>Delete</button>
          </>
          :
          <></>
        }
    </div>)
   }
      </h2>
    <p className='overflow-x-auto  p-1 '>{c.reviews} </p>
    
    <div className="card-actions justify-end ">
    <p className='flex gap-1 text-orange-400 items-center'><AiFillStar/>{c.stars}  </p>
      <button className="text-xs text-gray-400  "> {c.timestamp}</button>
    </div>
  </div>
</div>
        </div>)
       }
      </div>
     </section>
    </div>
    <ToastContainer />
    </section>
  );
};

export default IdWiseProduct;
