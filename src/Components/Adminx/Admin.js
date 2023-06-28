import React, { useEffect, useState } from 'react';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsListUl } from 'react-icons/bs';

import { url } from '../../Shared/Shared';

import { Link, Outlet } from 'react-router-dom';
const Admin = () => {
  const [isLeftSideOpen, setIsLeftSideOpen] = useState(true);
  const [rangeValue, setRangeValue] = useState(1600); // State variable for the range input value
  const [search, setsearch] = useState(""); //take user input
  const [getsearch, setGetSearchByItem] = useState(""); //get item

 
  const toggleLeftSide = () => {
    setIsLeftSideOpen(!isLeftSideOpen);
  };

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const handlesearch = (event) => {
    setsearch(event.target.value);
  };


  //search product
  useEffect(() => {


    let urlAdress = `${url}/estore/search/${search}`;


    fetch(urlAdress)

      .then(res => res.json())
      .then(data => {
        setGetSearchByItem(data)



      })

  }, [search])


  const [selectedCategory, setSelectedCategory] = useState('all'); //user selected
  const [category, setCategory] = useState('') //get product from bd 
  console.log('category',category)

  //get catagories wise product
  useEffect(() => {
    let urlAdress = `${url}/estore/getproductCatagories/${selectedCategory}`;

    fetch(urlAdress)

      .then(res => res.json())
      .then(data => {
        setCategory(data)
      })

  }, [selectedCategory])


 
 

  return (
    <div className='lg:flex  p-2 py-4' >

      {/* left navbar large devices */}
      <section className='' >
        <div
          className={`p-2   text-left ${isLeftSideOpen ? '' : 'hidden'}  `}
          style={{
            width: isLeftSideOpen ? '' : '0',
            transition: 'width 0.3s ease',
          }}
        >
          <ul className='space-y-6 text-xl font-semibold mx-12'>
            <li><Link to={'/userlist'}>User List</Link></li>
            <li><Link to={'/userlist'}>User List</Link></li>
            <li><Link to={'/userlist'}>User List</Link></li>
            <li><Link to={'/userlist'}>User List</Link></li>
         </ul>
        </div>
      </section>


      {/* right section All devices */}
      <div
        className={`    text-left ${isLeftSideOpen ? 'pl-2' : ''}`}
        style={{
          transition: 'margin-left 0.3s ease',
        }}
      >
        <button className='my-3 text-3xl  ' onClick={toggleLeftSide}>
          {isLeftSideOpen ? <BsArrowLeftSquare /> : <BsListUl />}
        </button>
       
        {/* right section */}
        </div>
    </div>
  );
};

export default Admin;
