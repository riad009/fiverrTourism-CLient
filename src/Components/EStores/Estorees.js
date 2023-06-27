import React, { useEffect, useState } from 'react';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsListUl } from 'react-icons/bs';
import RightSection from './RightSection';
import { url } from '../Shared/Shared';
import './EStore.css'
import { Link } from 'react-router-dom';
const Estorees = () => {
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
          <input
            type="text"
            placeholder="SEARCH"
            onChange={handlesearch}
            className="lg:pr-48  my-2 input input-bordered input-success "
            style={{ width: isLeftSideOpen ? '100%' : '0' }}
          />
          <h1 className='text-xl font-semibold my-4'>Category</h1>

          <ul className='space-y-2'>
           
            <section className=''>
              <ul className='space-y-3'>
                <li>
                <label className=' btn btn-outline btn-xs bg-green-600  text-white'>
                <input
                  type="radio"
                  value="all"
                  checked={selectedCategory === 'all'}

                  onClick={(e) => setSelectedCategory(e.target.value)}
                />
                 {' '}
                All
              </label>
                </li>
               {/*  */}
                <li>
                <label className=' btn btn-outline btn-xs bg-green-600  text-white'>
                <input
                  type="radio"
                  value="bag"
                  checked={selectedCategory === 'bag'}

                  onClick={(e) => setSelectedCategory(e.target.value)}
                />
                 {' '}
                Bag
              </label>
                </li>
               {/*  */}
                <li>
                <label className=' btn btn-outline btn-xs bg-green-600  text-white'>
                <input
                  type="radio"
                  value="clothes"
                  checked={selectedCategory === 'clothes'}

                  onClick={(e) => setSelectedCategory(e.target.value)}
                />
                 {' '}
                 Clothes
              </label>
                </li>
               {/*  */}
                <li>
                <label className=' btn btn-outline btn-xs bg-green-600  text-white'>
                <input
                  type="radio"
                  value="decoration"
                  checked={selectedCategory === 'decoration'}

                  onClick={(e) => setSelectedCategory(e.target.value)}
                />
                 {' '}
                 Decoration
              </label>
                </li>
               {/*  */}
                <li>
                <label className=' btn btn-outline btn-xs bg-green-600  text-white'>
                <input
                  type="radio"
                  value="accessories"
                  checked={selectedCategory === 'accessories'}

                  onClick={(e) => setSelectedCategory(e.target.value)}
                />
                 {' '}
                 Accessories
              </label>
                </li>
               {/*  */}
              </ul>
            
              {/*  */}
             
              {/*  */}
            </section>
          </ul>

          <h1 className='my-4 text-xl font-semibold'>Shops</h1>
          <select
            className={`mb-4 mt-2 select select-success w-full max-w-xs ${isLeftSideOpen ? '' : 'opacity-0 pointer-events-none'
              }`}

          >
            <option disabled selected>All</option>
            <option>One Piece</option>
            <option>Naruto</option>
            <option>Death Note</option>
            <option>Attack on Titan</option>
            <option>Bleach</option>
            <option>Fullmetal Alchemist</option>
            <option>Jojo's Bizarre Adventure</option>
          </select>

          <h1 className='text-xl font-semibold my-4'>Price</h1>
          <p className='my-2'>Rs: <span>{rangeValue}</span></p>
          <input
            type="range"
            min={0}
            max="16000"
            value={rangeValue}
            onChange={handleRangeChange}
            className="range range-success range-xs"
          />
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
        <RightSection selectedCategory={selectedCategory} search={search} getsearch={getsearch} rangeValue={rangeValue}></RightSection>
      </div>
    </div>
  );
};

export default Estorees;
