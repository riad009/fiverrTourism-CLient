
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';

 import {url} from '../Shared/Shared.js'
 import { BiBlock } from 'react-icons/bi';
 import { FcApproval } from 'react-icons/fc';
 import { FiUsers } from 'react-icons/fi';
 import { FiSend } from 'react-icons/fi';
 import { AiFillShopping } from 'react-icons/ai';
 import { AiOutlineShoppingCart } from 'react-icons/ai';
 import { TbBrandBooking } from 'react-icons/tb';
 import { BiStore } from 'react-icons/bi';
 import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../Auth/AuthProvider.js';
const LayoutDashboard = () => {

  const { user } = useContext(AuthContext);
  const [people, setPeople] = useState([]);
  
  
//find user
  useEffect(() => {
    fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, [people]);


  //find name
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch(`${url}/get/findUser/byEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setName(data));
  }, [name]);

  //logout
  const navigate=useNavigate()
  const {logout}=useContext(AuthContext)
  const handleLogout=(auth)=>{

    var answer = window.confirm("Log out?");
if (answer) {
  logout(auth)
  navigate("/login")

}
else {
    //some code
}
   

  }
    return (
        <div>
             
             <div className=''>
            
            <label  htmlFor="dashboard-drawar" className="text-2xl  lg:hidden"><MdSpaceDashboard/></label>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  
  <Outlet></Outlet>
  
 
  
  </div> 
  <div className="drawer-side lg:shadow-xl ">
    <label htmlFor="dashboard-drawar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100   text-xl font-semibold lg:border-2 ">


         {/* previous login data show  */}
    {people.map(p => (
  <div key={p.id}>
    {p.accountType === "admin" ? (
      <p>
        <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Admin </a></li>
  
   
    <Link to={'/dashboard/edituserprofile'}><li><a>  
    {
      people.map(name=> <h1 className=' gap-2 flex items-center'>
       
       {
        name.profileUrl ?
        <>
          <img className='w-6 h-6 rounded' src= {name.profileUrl} alt="" />
        </>
        :
        <><CgProfile/></>
       } 
     
        {name.name}
      </h1>)
    }
    
    <p className='text-xs text-gray-400 hover:text-blue-400 hover:underline'>edit</p></a></li></Link>
    <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link>
    <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
    <Link to={'/dashboard/postplantour'}><li><a><p className='text-indigo-400'><FiSend/></p> Post PlanTour</a></li></Link>
    <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Shopkeepers</a></li></Link>
    <Link to={'/dashboard/postdata'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Places</a></li></Link>
    <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
    <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
    <Link to={'/dashboard/allorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>AllOrder</a></li></Link>
    <Link to={'/dashboard/orderhistory'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> Order History</a></li></Link>
    <Link to={'/dashboard/allproducts'}><li><a> <p className='text-orange-400'><BiStore/></p> All E-store product</a></li></Link>
    <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My E-store product</a></li></Link>
    <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>
    <Link to={'/dashboard/listbooking'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> All Booking list</a></li></Link>
    <Link to={'/dashboard/alltourlist'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> AllTour list</a></li></Link>

   
 

      </p>
    ) : p.accountType === "tgmanager" ? (
      <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Tour Guid Manager</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link>
  <Link to={'/dashboard/postplantour'}><li><a><p className='text-indigo-400'><FiSend/></p> Post PlanTour</a></li></Link>
  <Link to={'/dashboard/postdata'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Places</a></li></Link>
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>
  <Link to={'/dashboard/listbooking'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> All Booking list</a></li></Link>
  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
 


    </p>

      // 
    ) : p.accountType === "smanager" ? (
      <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Shop Manager</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link>
  <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
  <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Update Profile</a></li></Link>
  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
  <Link to={'/dashboard/allorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>All Order</a></li></Link>
  <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My Estore product</a></li></Link>
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>

    </p>
      


      //
    ) : p.accountType === "shopkeeper" ? (
      <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Shopkeeper</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link>
  <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
  <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Shopkeepers</a></li></Link>

  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
  <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My Estore product</a></li></Link>
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>

 


    </p>

    ) : p.accountType === "tplanner" ? (
      <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Tourist Planner</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  {/* <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link>
  <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
  <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Shopkeepers</a></li></Link> */}
  {/* <Link to={'/dashboard/postdata'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Places</a></li></Link> */}
  <Link to={'/dashboard/postplantour'}><li><a><p className='text-indigo-400'><FiSend/></p> Post PlanTour</a></li></Link>
  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
  {/* <Link to={'/dashboard/allorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>AllOrder</a></li></Link> */}
  {/* <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My Estore product</a></li></Link> */}
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>
  <Link to={'/dashboard/listbooking'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> All Booking list</a></li></Link>
 


    </p>



     //
    ) : p.accountType === "user" ? (
      <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Tourist</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  {/* <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link> */}
  {/* <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
  <Link to={'/dashboard/postplantour'}><li><a><p className='text-indigo-400'><FiSend/></p> Post PlanTour</a></li></Link>
  <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Shopkeepers</a></li></Link>
  <Link to={'/dashboard/postdata'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Places</a></li></Link> */}
  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
  {/* <Link to={'/dashboard/allorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>AllOrder</a></li></Link> */}
  {/* <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My Estore product</a></li></Link> */}
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>
  {/* <Link to={'/dashboard/listbooking'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> All Booking list</a></li></Link> */}
 


    </p>



      // 
    ) : p.accountType === "block" ? (
      <p className="flex items-center text-red-400 text-3xl">
      <br />
      You were blocked! <br /> Please contact the system admin.
    </p>

      // 
    ) :
    <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Tourist</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  {/* <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link> */}
  {/* <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
  <Link to={'/dashboard/postplantour'}><li><a><p className='text-indigo-400'><FiSend/></p> Post PlanTour</a></li></Link>
  <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Shopkeepers</a></li></Link>
  <Link to={'/dashboard/postdata'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Places</a></li></Link> */}
  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
  {/* <Link to={'/dashboard/allorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>AllOrder</a></li></Link> */}
  {/* <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My Estore product</a></li></Link> */}
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>
  {/* <Link to={'/dashboard/listbooking'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> All Booking list</a></li></Link> */}
 


    </p> }
  <li className='my-8'>   {

user?.email ?
<> 
    

 <button onClick={handleLogout} className='btn btn-outline btn-warning'>logout </button></>
:
<>

<Link to={'/login'} className='btn btn-outline btn-success'>Login </Link>
</>

     }</li>
     
  </div>
    ))}


     <div>
      {people.length === 0 ? <p>

        <p>
      <li><a className='text-xl shadow-xl my-2 font-bold text-black'> <FcApproval/> Tourist</a></li>
  {/* <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link> */}
  {/* <Link to={'/dashboard/userlist'}><li><a>  <p className='text-sky-400'><FiUsers/></p>User List</a></li></Link> */}
  {/* <Link to={'/dashboard/postestore'}><li><a> <p className='text-indigo-400'><FiSend/></p> Post Estore</a></li></Link>
  <Link to={'/dashboard/postplantour'}><li><a><p className='text-indigo-400'><FiSend/></p> Post PlanTour</a></li></Link>
  <Link to={'/dashboard/shopkeepers'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Shopkeepers</a></li></Link>
  <Link to={'/dashboard/postdata'}><li><a> <p className='text-indigo-400'><FiSend/></p>Post Places</a></li></Link> */}
  <Link to={'/dashboard/cart'}><li><a> <p className='text-orange-400'><AiOutlineShoppingCart/></p> Cart</a></li></Link>
  <Link to={'/dashboard/Myorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>My Order</a></li></Link>
  <Link to={'/dashboard/orderhistory'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>Order History</a></li></Link>
  {/* <Link to={'/dashboard/allorder'}><li><a> <p className='text-orange-400'><AiFillShopping/></p>AllOrder</a></li></Link> */}
  {/* <Link to={'/dashboard/myproduct'}><li><a> <p className='text-orange-400'><BiStore/></p> My Estore product</a></li></Link> */}
  <Link to={'/dashboard/mybooking'}><li><a> <p className='text-blue-400'><TbBrandBooking/></p> My Booking</a></li></Link>
  {/* <Link to={'/dashboard/listbooking'}><li><a> <p className='text-blue-400'><AiFillShopping/></p> All Booking list</a></li></Link> */}
 
  <li className='my-8'>   {

user?.email ?
<> 
    

 <button onClick={handleLogout} className='btn btn-outline btn-warning'>logout </button></>
:
<>

<Link to={'/login'} className='btn btn-outline btn-success'>Login </Link>
</>

     }</li>

    </p>
      </p> : (
        <div>
          
        </div>
      )}
    </div>
 
    </ul>
  
  </div>
</div>


        </div>
        
        </div>
    );
};

export default LayoutDashboard;