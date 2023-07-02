import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../Shared/Shared';
import { AuthContext } from '../../Auth/AuthProvider';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';
const EditUserProfile = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileUrl, setProfileUrl] = useState('');

  const { user } = useContext(AuthContext);
  const [people, setPeople] = useState([]);
  console.log('people',people)
  

  useEffect(() => {
    fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, [people]);


  //edit user
  const handleUserUpdate = async (u) => {
    

    const userDetails = {
      name,
      location,
      phoneNumber,
      profileUrl,
    };
  console.log('userDetails',userDetails)
    try {
        const response = await axios.put(`${url}/update/user/profile/${u._id}`, userDetails);
        console.log(response.data);
        // Handle successful update
      } catch (error) {
        console.error(error);
        // Handle error
      }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleProfileUrlChange = (event) => {
    setProfileUrl(event.target.value);
  };

  return (
    <div className="container mx-auto py-8 ">

      <div className='m-8 text-xl '>
       {
        people.map(name => <div className='bg-gray-100 text-left border border-dotted border-green-500 border-2 p-6 '>
         <p className='flex items-center gap-2'> <AiOutlineUser/> Name: {name.name}</p>
         <img className='my-3 h-60 w-60' src={name.profileUrl} alt="" />
         <p className='flex items-center gap-2'>  <CiLocationOn/> Address: {name.location}</p>
         <p className='flex items-center gap-2'> <AiOutlineMail/> Email: {name.email}</p>
         <p className='flex items-center gap-2'> <BsTelephone/> Phone number: {name.phoneNumber}</p>
         <p className='flex items-center gap-2'><GrUserAdmin/>  Account Type:  {name.accountType}</p>
        </div>)
       }

      </div>
      <h2 className="text-2xl font-bold mb-4 ">Edit User Profile</h2>
      <div className="p-4 max-w-md mx-auto">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="location"
      >
        Location
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="location"
        type="text"
        value={location}
        onChange={handleLocationChange}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="phoneNumber"
      >
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phoneNumber"
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="profileUrl"
      >
        Profile URL
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="profileUrl"
        type="text"
        value={profileUrl}
        onChange={handleProfileUrlChange}
      />
    </div>
    {people.map((u) => (
      <button
        onClick={() => handleUserUpdate(u)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        key={u.id}
      >
        Submit
      </button>
    ))}
  </form>
</div>

    </div>
  );
};

export default EditUserProfile;
