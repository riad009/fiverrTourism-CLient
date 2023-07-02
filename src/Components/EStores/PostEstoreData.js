import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthProvider';
import { url } from '../Shared/Shared';
const YourComponent = () => {

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
    name: 'Macbok pro',
    Shops: 'Daraj',
    price: 12000,
    description: 'The MacBook Pro is a premium line of laptops designed and manufactured by Apple Inc. It is highly regarded for its exceptional performance, sleek design, and advanced features. With its slim and elegant aluminum construction, the MacBook Pro exudes a premium and modern aesthetic. Featuring a high-resolution Retina display, the MacBook Pro delivers stunning visuals with vibrant colors and sharp details. The display provides an immersive viewing experience, making it ideal for creative professionals, content creators, and multimedia enthusiasts.   Powerful performance lies at the core of the MacBook Pro. Equipped with either Intel or Apples M1 processors, depending on the model, it offers fast and efficient processing power to handle demanding tasks such as video editing, graphic design, and software development. Ample RAM and storage options are available to accommodate various needs  Graphics capabilities are enhanced with dedicated graphics processors, enabling smooth rendering of graphics-intensive applications such as video editing  3D modeling, and gaming. This ensures a seamless and immersive user experience when working with visually demanding content  The MacBook Pro features a Touch Bar, a contextual OLED touchscreen strip located above the keyboard. It dynamically adapts to different applications, providing context-sensitive controls and shortcuts for improved productivity. Additionally, the Touch ID fingerprint sensor, integrated into the power button, offers secure and convenient authentication, as well as compatibility with Apple Pay   A comfortable and responsive keyboard, paired with a large Force Touch trackpad, provides precise input and supports various multi-touch gestures. This allows for a smooth and intuitive user experience, whether you are typing, navigating, or interacting with content',
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
    } else if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
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
          <input type="text" id="name" name="name"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="Shops" className="block mb-2 text-gray-700">Shops</label>
          <input type="text" id="Shops" name="Shops"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-gray-700">Price</label>
          <input type="number" id="price" name="price" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-gray-700">Description</label>
          <textarea id="description" name="description"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-gray-700">Category</label>
          <input type="text" id="category" name="category"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
  <label htmlFor="featured" className="block mb-2 text-gray-700">Featured</label>
  <input
    type="checkbox"
    id="featured"
    name="featured"
    checked={formData.featured}
    onChange={handleChange}
    className="form-checkbox h-5 w-5 text-gray-600"
  />
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
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
      {/*  */}
      
    </div>
  );
};

export default YourComponent;
