import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../Shared/Shared';
import ShowProduct from './ShowProduct';

const RightSection = ({selectedCategory,search, rangeValue, getsearch }) => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/estore/getall`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter data based on price
  useEffect(() => {
    setLoading(true);
    //  
    let urlAddress = `${url}/estore/filterprice/${rangeValue}`;

      if (selectedCategory !== "all") {
        urlAddress = `${url}/estore/getProduct/${rangeValue}/${selectedCategory}`;
      }
   

    fetch(urlAddress)
      .then((res) => res.json())
      .then((data) => {
        setFilterProduct(data);
        setLoading(false);
      });
  }, [rangeValue,selectedCategory]);

  return (
    <section>
      <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 gap-3 md:grid md:grid-cols-3'>
       
      {
  search !== "" ? (
    <>
      {getsearch.length > 0 &&
        getsearch.map((p) => (
          <section key={p._id} className='hover:shadow-xl border-2'>
            <ShowProduct p={p} />
          </section>
        ))}
    </>
  ) : (
    <>
      {filterProduct.map((p) => (
        <section key={p._id} className='hover:shadow-xl border-2'>
          <ShowProduct p={p} />
        </section>
      ))}
    </>
  )
}

       

        
      </div>
      
    </section>
  );
};

export default RightSection;
