import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { url } from '../../Shared/Shared';
const Shopkeepers = () => {
  const [shopName, setShopName] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 

  //find user by email
  const { user } = useContext(AuthContext);
  const [people, setPeople] = useState([]);
  console.log('people',people)
  

  useEffect(() => {
    fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  const handleShopNameChange = (event) => {
    setShopName(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleUserUpdate = (u) => {
    // Prepare the data to be sent to the server
    const data = {
      shopName,
      name,
      photo,
      description,
      location,
      phoneNumber,
    };

    // Send the data to the server using fetch or axios
    fetch(`${url}/updateUser/accountInfo/${u._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the server response if needed
        console.log(result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopkeepers</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="shopName" className="text-lg font-medium">
            Shop Name:
          </label>
          <input
            type="text"
            id="shopName"
            value={shopName}
            onChange={handleShopNameChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter your shop name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter your name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="photo" className="text-lg font-medium">
          Shop Photo:
        </label>
        <input
          type="text"
          id="photo"
          value={photo}
          onChange={handlePhotoChange}
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter shop photo URL"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="text-lg font-medium">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="border border-gray-300 p-2 rounded-md w-full resize-none"
          placeholder="Enter description"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="location" className="text-lg font-medium">
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter location"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="text-lg font-medium">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter phone number"
          />
        </div>
      </div>
      {
        people.map(u=> 
            <button
            onClick={() => handleUserUpdate(u)}
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         >
           Submit
         </button>   
            )
      }
      
    </div>
  );
};

export default Shopkeepers;
