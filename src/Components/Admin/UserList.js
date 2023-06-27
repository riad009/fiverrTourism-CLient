import React, { useEffect, useState } from 'react';
import { url } from '../../Shared/Shared';
import { FaUserCircle } from 'react-icons/fa';
const UserList = () => {

    const [users, setuser] = useState(); //get user list
    console.log('users',users)
    useEffect(() => {
        let urlAdress = `${url}/get/user`;
    
        fetch(urlAdress)
    
          .then(res => res.json())
          .then(data => {
            setuser(data)
          })
    
      }, [])
    
    return (
        <div className='m-6'>
             {
                users?.map(u=> <div>
                    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>User Rule</th>
        <th>Give permission</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th><FaUserCircle/></th>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.accountType}</td>
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