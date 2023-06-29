import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthProvider';
import { url } from '../Shared/Shared';
const YourComponent = () => {
  const {user}=useContext(AuthContext)
  const email = user?.email;
 //get shopkeeper details
 const [people, setPeople] = useState([]);
 
  

  useEffect(() => {
    fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
  



 //get shopkeeper details
  const [formData, setFormData] = useState({
    ownerEmail:email,
    name: '',
    Shops: '',
    price: 0,
    description: '',
    category: '',
    featured: true,
    stock: 5,
    reviews: 58,
    stars: 4.8,
    image: [
      {
        url: 'https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/plp/ipad-keyboards/ipad-keyboard-twitter-image.png?v=1'
      },
      {
        url: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQDP3TH?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1665496583591'
      },
      {
        url: 'https://www.digitaltrends.com/wp-content/uploads/2020/11/ipad-air-4-space-grey-3-scaled.jpg?p=1'
      }
    ]
  });

  const handleChange = (e) => {
    if (e.target.name.includes('image')) {
      const index = e.target.name.split('_')[1];
      const updatedImages = [...formData.image];
      updatedImages[index].url = e.target.value;
      setFormData({ ...formData, image: updatedImages });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // const updatedFormData = { ...formData, people: people.people };
  
    axios.post(`${url}/estore/post`, formData)
      .then((response) => {
        // Handle the response
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

 

  return (
    <div className="container mx-auto">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="Shops" className="block mb-2 text-gray-700">Shops</label>
          <input type="text" id="Shops" name="Shops" value={formData.Shops} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-gray-700">Price</label>
          <input type="number" id="price" name="price" required value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-gray-700">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-gray-700">Category</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="featured" className="block mb-2 text-gray-700">Featured</label>
          <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="form-checkbox h-5 w-5 text-gray-600" />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block mb-2 text-gray-700">Stock</label>
          <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="reviews" className="block mb-2 text-gray-700">Reviews</label>
          <input type="number" id="reviews" name="reviews" value={formData.reviews} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="stars" className="block mb-2 text-gray-700">Stars</label>
          <input type="number" step="0.1" id="stars" name="stars" value={formData.stars} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Images</label>
          {formData.image.map((img, index) => (
            <input
              key={index}
              type="text"
              name={`image_${index}`}
             
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md"
              placeholder={`Enter Img link`}
            />
          ))}
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default YourComponent;
