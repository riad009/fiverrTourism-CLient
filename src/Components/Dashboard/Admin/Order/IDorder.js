import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const IDorder = () => {
  const product = useLoaderData();
  console.log('product:', product);

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
                <span className='font-bold'>Order ID:</span> {order._id}
              </p>
              <p className='text-gray-600 mb-4'>
                <span className='font-bold'>Card Name:</span> {order.card.name}
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
            </div>
          ))}

          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Total Price:</span> ${product.totalPrice}
          </p>
          <p className='text-gray-600 mb-4'>
            <span className='font-bold'>Order Status:</span> {product.orderStatus}
          </p>
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
