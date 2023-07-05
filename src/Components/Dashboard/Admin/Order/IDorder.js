import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { url } from '../../../Shared/Shared';
import { AuthContext } from '../../../Auth/AuthProvider';
const IDorder = () => {
  const {user,loading}=useContext(AuthContext)
  const product = useLoaderData();
  console.log('product:', product);


  //comemt post 
  const [reviews, setComment] = useState('');
  const [stars, setRating] = useState();
 
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handlePostComment = (order) => {
    // Create an object with the comment, rating, and productID values
    const data = {
      email: user.email,
      reviews: reviews,
      stars: stars,
      productID: order.card._id,
    };
    console.log('data',data)
    // Perform the POST request
    fetch(`${url}/post/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response
        console.log('Comment posted successfully:', result);
        // Reset the form values
        setComment('');
        
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      });
  };

  return (
    <div className='bg-gray-100 min-h-screen text-left'>
      <div className='container mx-auto px-4 py-8'>
        <h2 className='text-3xl font-bold text-center mb-6'>Order Details</h2>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Product ID:</span> {product._id}
          </p>
          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Email:</span> {product.email}
          </p>

          {product.order.map((order) => (
            <div key={order._id} className='mb-6'>
              <p className='text-gray-600 mb-2'>
                <span className='font-bold'>Order ID:</span> {order.card._id}
              </p>
              <p className='text-gray-600 mb-4'>
                <span className='font-bold'>Product Name:</span> {order.card.name}
              </p>
              <p className='text-gray-600 mb-4'>
                <span className='font-bold'>Quantity:</span> {order.count}
              </p>
              <p className='text-gray-600 mb-4 flex items-center gap-2'>
              <span className='font-bold'>Color:</span>
              
              <p className={`p-2 rounded-lg `} style={{ backgroundColor: order.selectedColors?.code }}>
                  
                  </p>
           

              </p>

              <div className='flex flex-wrap -mx-2'>
                {order.card.image.map((image, index) => (
                  <div key={index} className='w-full md:w-1/3 px-2 mb-4'>
                    <img
                      src={image.url}
                      alt={`Image ${index + 1}`}
                      className='w-full h-auto rounded-lg'
                    />
                  </div>
                ))}
              </div>
              {/*  */}
           {
            product.orderStatus=="complete" ?
            <>   <div>
            {/* Your JSX code */}
            <textarea
              className="my-4 textarea textarea-accent"
              placeholder="Write a comment"
              onChange={handleCommentChange}
            ></textarea>
            <br />
            <div className="rating">
              <input
                type="radio"
                name="rating"
                value="1"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="2"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="3"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating"
                value="4"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />  
              <input
                type="radio"
                name="rating"
                value="5"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
            </div>
            <br />
            <button
              className="my-2 text-white btn btn-success"
              onClick={() => handlePostComment(order)}
            >
              Post Comment
            </button>
                    </div></>
            :
            <></>
           }
              {/*  */}

            </div>
          ))}

          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Total Price:</span> ${product.totalPrice}
          </p>
          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Order Status:</span> {product.orderStatus}
            <div>
     
    </div>   </p>
          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Time:</span> {product.time}
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default IDorder;
