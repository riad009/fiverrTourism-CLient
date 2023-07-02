import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const IdDetail = () => {

    const p = useLoaderData()
    console.log('ppp',p)
    return (
        <div className='lg:grid lg:grid-cols-3 sm:grid-cols-1'>
            {

                p.map(p=> <div className=''>

<div className="card  bg-base-100 shadow-xl m-8  ">
  <figure><img  src={p.image[0].url}alt="product" /></figure>
  <div className="card-body text-left">
   <div className='flex justify-between'>
   <h2 className="card-title">{p.name}</h2>
   <h2 className="card-title">{p.price}</h2>
   </div>
    <p>  {p.category}</p>
    <div className="card-actions justify-end">
      <Link to={`/estoreid/${p._id}`} className="btn btn-primary">see more</Link>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
    );
};

export default IdDetail;