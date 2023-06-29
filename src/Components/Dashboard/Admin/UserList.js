import React, { useEffect, useState } from 'react';
import { url } from '../../Shared/Shared';
import { FaUserCircle } from 'react-icons/fa';

const UserList = () => {

    const [users, setuser] = useState(); //get user list
    
    useEffect(() => {
        let urlAdress = `${url}/get/user`;
    
        fetch(urlAdress)
    
          .then(res => res.json())
          .then(data => {
            setuser(data)
          })
    
      }, [users])
    //
         //make admin
         const handleMakeAdmin = (u) => {
          
         
          const submit = {
            accountType: "admin"
          };
        
          fetch(`${url}/updateUser/${u._id}`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(submit)
          })
          .then(res => res.json())
          .then(data => {
          
          });
        };
        
  
          //    moderator  
      const handleMakeModerator=(u)=>{
            const submit={  
  
            accountType: "moderator"
          
            }
        
          
          fetch(`${url}/updateUser/${u._id}`,{
            
            method: 'PUT',
            
            headers:{
             "content-type" : "application/json"
            },
            
            
            body: JSON.stringify(submit)
         
             })
             .then(res=>res.json())
          .then(data=>{
          
        
          })  
             
            }
       
             // make    user
      const handleMakeUser=(u)=>{
            const submit={  
  
            accountType: "user"
          
            }
        
          
          fetch(`${url}/updateUser/${u._id}`,{
            
            method: 'PUT',
            
            headers:{
             "content-type" : "application/json"
            },
            
            
            body: JSON.stringify(submit)
         
             })
             .then(res=>res.json())
          .then(data=>{
           
        
          })  
             
            }
  
          
//get by search
const [searchText, setSearchText] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async () => {
  try {
    const response = await fetch(`${url}/user/search/${searchText}`);
    const data = await response.json();
    setSearchResults(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  handleSearch();
}, [searchResults]);

useEffect(() => {
  if (searchText !== '') {
    handleSearch();
  }
}, [searchText]);

const handleChange = (e) => {
  setSearchText(e.target.value);
};

// update 2
const [clearance, setClearance] = useState('');

const handleClearanceChange = (e) => {
  setClearance(e.target.value);
};
const handleUpdate = (u) => {
          
         
  const submit = {
      accountType: clearance
  };

  fetch(`${url}/updateUser/${u._id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submit)
  })
  .then(res => res.json())
  .then(data => {
  
  });
};
    return (
        <div className='m-6'>


 <section className='my-12'>
      <div >
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder='Search by email'
          className='my-4 input input-bordered input-accent w-full max-w-xs'
        />
         
       

        <ul className='border-2 bg-green-400 border-dotted '>
          <h1>Search Result...</h1>
          {searchResults.map(u => (
             <div className="overflow-x-auto">
             <table className="table table-xs table-pin-rows table-pin-cols">
               {/* head */}
               <thead>
                 <tr> 
                   <th></th>
                   <th className='w-1/6'>Name</th>
                   <th className='w-1/6'>Email</th>
                   <th className='w-1/6'>User Rule</th>
                   <th className='w-3/6'>Give permission</th>
                 </tr>
               </thead>
               <tbody>
                 {/* row 1 */}
                 <tr>
                   <th><FaUserCircle/></th>
                   <td>{u.name}</td>
                   <td>{u.email}</td>
                   <td>{u.accountType}</td>
                   <td>
                   <div className=' '>
                
                   <div onClick={() => handleUpdate(u)} class="p-4 w-2/4">
  <label class="block mb-2 text-sm font-medium text-gray-700">
  Permission: {u.clearance}
    <select value={u.clearance} onChange={handleClearanceChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
    <option value="">Select user role</option>
      <option value="admin">Admin</option>
      <option value="tgmanager">Tour Guide Manager</option>
      <option value="smanager">Shop Manager</option>
      <option value="shopkeeper">Shopkeeper</option>
      <option value="tplanner">Tour Planner</option>
      <option value="user">User</option>
      <option value="block">Block account</option>
      <option value="user">Unblock account</option>
    </select>
  </label>
  <button type="submit" class="btn-success w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-800">Update</button>
                  </div>
      
                     </div> 
                   </td>
                 </tr>
               </tbody>
             </table>
                              </div>
          ))}
        </ul>
      </div>
      <p className=' '></p>
    </section>

           {/*  */}
           {
                users?.map(u=> <div>
                    <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='w-1/6'>Name</th>
        <th className='w-1/6'>Email</th>
        <th className='w-1/6'>User Rule</th>
        <th className='w-3/6'>Give permission</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th><FaUserCircle/></th>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.accountType}</td>
        <td>
        <div onClick={() => handleUpdate(u)} class="p-4 w-2/4">
  <label class="block mb-2 text-sm font-medium text-gray-700">
    Permission: {u.clearance}
    <select value={u.clearance} onChange={handleClearanceChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <option value="">Select user role</option>
      <option value="admin">Admin</option>
      <option value="tgmanager">Tour Guide Manager</option>
      <option value="smanager">Shop Manager</option>
      <option value="shopkeeper">Shopkeeper</option>
      <option value="tplanner">Tour Planner</option>
      <option value="user">User</option>
      <option value="block">Block account</option>
      <option value="user">Unblock account</option>
    </select>
  </label>
  <button type="submit" class="btn-success w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-800">Update</button>
</div>
        </td>
      </tr>
    </tbody>
  </table>
                   </div>
                </div>)
             }
        </div>
    );
};

export default UserList;