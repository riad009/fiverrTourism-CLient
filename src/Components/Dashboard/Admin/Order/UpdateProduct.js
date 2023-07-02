import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { url } from '../../../Shared/Shared';
import { AuthContext } from '../../../Auth/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
  const product = useLoaderData()
  //pixk color
  
  const [selectedColors, setSelectedColors] = useState([]);

  const commonColors = [
    { name: "Red", code: "#ff0000" },
    { name: "Green", code: "#00ff00" },
    { name: "Blue", code: "#0000ff" },
    { name: "Yellow", code: "#ffff00" },
    { name: "Purple", code: "#800080" },
    { name: "Orange", code: "#ffa500" },
    { name: "Pink", code: "#ffc0cb" },
    { name: "Gray", code: "#808080" },
    { name: "Brown", code: "#a52a2a" },
    { name: "Teal", code: "#008080" }
  ];

  const handleColorSelect = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  //pixk color
  
  const {user}=useContext(AuthContext)
  const email = user?.email;
 //get shopkeeper details
 const [people, setPeople] = useState([]);
 
  

  useEffect(() => {
    fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
  

  //take latest color data if its changed
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedColors: selectedColors
    }));
  }, [selectedColors]);

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
    count : 1,
    selectedColors: selectedColors,
  
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
  
  console.log('selectedColors',selectedColors)
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

  const handleSubmit = async (p) => {
    p.preventDefault();
  console.log('sssssssssssssssss',product._id)
    try {
      const response = await axios.put(`${url}/update/estore/product/${product._id}`, formData);
      console.log(response.data);
      // Handle successful update
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  
  


  return (
    <div className="container mx-auto">
        <h1 className='alert p-4 font-semibold'>Update E store product</h1>
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

 {/* color pickerrrrrrrrrrrrrrrrrr */}
 <div className='my-3 text-left '>
<h1 className=' mt-6'>Select product colors available </h1>
{commonColors.map((color) => (
  <div 
    key={color.code}
    style={{
      backgroundColor: color.code,
      width: "30px",
      height: "30px",
      display: "inline-block",
      margin: "5px",
      cursor: "pointer",
      border: selectedColors.includes(color) ? "3px solid black" : "none",
    }}
    onClick={() => handleColorSelect(color)}
  ></div>
))}
<h2 className='my-2'>Selected Colors:</h2>
{selectedColors.map((color) => (
  <div
    key={color.code}
    className='rounded-lg'
    style={{
      backgroundColor: color.code,
      width: "20px",
      height: "20px",
      display: "inline-block",
      margin: "2px",
    }}
  ></div>
))}
</div>
 {/*  */}

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
  <button type="submit"   className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
</form>
</div>
  );
};

export default UpdateProduct;
