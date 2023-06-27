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
  
          

    return (
        <div className='m-6'>
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
        <div className='grid lg:grid-cols-3  '>
      <button onClick={() => handleMakeUser(u)} className="mr-2 mb-2 btn-sm   btn btn-outline btn-gray">Normal user</button>
       <button  onClick={() => handleMakeModerator(u)}  className="mr-2 mb-2 btn-sm btn btn-outline btn-info">Moderator</button>
       <button onClick={() => handleMakeAdmin(u)} className="mr-2 mb-2 btn-sm btn btn-outline btn-success">Admin</button>

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