import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthProvider';
import { url } from '../Shared/Shared';
import { toast } from 'react-toastify';
const YourComponent = () => {


  const [category, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
  
    // Update formData with selectedCity
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedValue,
    }));
  
    // You can perform further actions with the selected value here
  };
  

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
    selectedCity :category ,
    ownerEmail:email,
    name: '',
    Shops: '',
    price: 200,
    description: 'The MacBook Pro is a premium line of laptops designed and manufactured by Apple Inc. It is highly regarded for its exceptional performance, sleek design, and advanced features. With its slim and elegant aluminum construction, the MacBook Pro exudes a premium and modern aesthetic. Featuring a high-resolution Retina display, the MacBook Pro delivers stunning visuals with vibrant colors and sharp details. The display provides an immersive viewing experience, making it ideal for creative professionals, content creators, and multimedia enthusiasts.   Powerful performance lies at the core of the MacBook Pro. Equipped with either Intel or Apples M1 processors, depending on the model, it offers fast and efficient processing power to handle demanding tasks such as video editing, graphic design, and software development. Ample RAM and storage options are available to accommodate various needs  Graphics capabilities are enhanced with dedicated graphics processors, enabling smooth rendering of graphics-intensive applications such as video editing  3D modeling, and gaming. This ensures a seamless and immersive user experience when working with visually demanding content  The MacBook Pro features a Touch Bar, a contextual OLED touchscreen strip located above the keyboard. It dynamically adapts to different applications, providing context-sensitive controls and shortcuts for improved productivity. Additionally, the Touch ID fingerprint sensor, integrated into the power button, offers secure and convenient authentication, as well as compatibility with Apple Pay   A comfortable and responsive keyboard, paired with a large Force Touch trackpad, provides precise input and supports various multi-touch gestures. This allows for a smooth and intuitive user experience, whether you are typing, navigating, or interacting with content',
   
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
  console.log('formData',formData)
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
        toast.success('Product submitted')
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

 //create category
 const [categorystate, setcategoryName] = useState('all');
 const [cateryImg, setcategoryImg] = useState('https://www.careeraddict.com/uploads/article/60419/entrepreneurship-product-ideas.png');

const handlecreate = async (e) => {
  e.preventDefault();

  const formData = {
    category:categorystate,
    cateryImg:cateryImg,
  
  };


  try {
    console.log('formData',)
    const response = await fetch(`${url}/post/create/category`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      toast.success('New Category created')
    } else {
      // handle the error, e.g., show an error message
    }
  } catch (error) {
    // handle the error, e.g., show an error message
  }
};

//catagories get
const [categories, setCategories] = useState();
   
console.log('categories',categories)
useEffect(()=>{
    fetch(`${url}/get/categoryName`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
    
    
        },
        [categories])

  return (
    <div className="container mx-auto ">
   <div className="container mx-auto py-4">
      <form onSubmit={handlecreate} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Create  a new Category for Product <p className=' text-red-400'></p> </h2>

        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Category Name</label>
          <p className=' text-gray-400'>Do not create a category with the same name twice</p>
          <input
            type="text"
            id="name"
            name="name"
           
            onChange={(e) => setcategoryName(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Example: Clothes"
          />
          <input
            type="text"
            id="name"
            name="name"
           
            onChange={(e) => setcategoryImg(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="img url"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Create
        </button>
      </form>
    </div>
      
      {/*  */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
          <input type="text" id="name" name="name" required  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="Shops" className="block mb-2 text-gray-700">Shops</label>
          <input type="text" id="Shops" name="Shops"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 text-gray-700">Price</label>
          <input type="number" id="price" name="price" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-gray-700">Description</label>
          <textarea id="description" name="description"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div>
        <select   onChange={handleCityChange} name='category' className="select select-secondary w-full max-w-xs">
  <option disabled selected>Pick your product category</option>
  {[...new Set(categories?.filter(city => city.category).map(city => city.category))]
    .sort((a, b) => a.localeCompare(b))
    .map(city => (
      <option key={city} value={city}>{city}</option>
    ))
  }
</select>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="category" className="block mb-2 text-gray-700">Category</label>
          <input type="text" id="category" name="category"  onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div> */}
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
