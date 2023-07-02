import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../Shared/Shared';
import ShowProduct from './ShowProduct';
import CatagoriesProducts from './CatagoriesProducts/CatagoriesProducts';

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
  // Fetch all data


  //featured product
  const [featured, setfeatured] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/estore/get/featureItem`);
        const data = await response.json();
        setfeatured(data);
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
  
<div className=''>
{
      loading ?
      <> <div className='fixed inset-0 flex items-center justify-center'>
      <div className='custom-spinner'></div>
    </div>
    </>
      :
      <></>
    }
</div>

{
  search === "" ? (
    <div>
      <CatagoriesProducts></CatagoriesProducts>
    <section className='bg-[#E1E2DB] p-8'>
    <h1 className='flex items-center font-semibold my-4  text-xl justify-center'>Featured Products</h1>
    <div className='grid grid-cols-5 gap-2'>
      {featured.slice(0, 5).map((p) => (
        <Link  to={`/estoreid/${p._id}`}
          className='hover:shadow-xl overflow-x-auto mb-4 rounded-md '
          key={p.id} // assuming there is an 'id' property for each product
          // call handleChange with the selected option
        >
         <div className=" bg-base-100 shadow-xl p-4">
         <img className='h-24' src={p.image[0].url} alt="Shoes" />
  <div className="text-xs text-gray-400">
    <h2 className="">{p.name}</h2>
    <h2 className="">{p.price}</h2>
   
   
  </div>
</div>   </Link>
      ))}
    </div>
  </section>
    </div>
  ) :
  <>  </>
}


      {/*  */}
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
