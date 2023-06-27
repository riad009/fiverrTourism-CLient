import React from 'react';

const About = () => {
    return (
      <div>
          <h1 className='text-2xl font-bold my-6'>For artists, by artits</h1>
          <p className='mb-12 w-1/3 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ducimus perspiciatis odit voluptatibus, dolore eum dicta ab quam laudantium nisi quo sequi? Ipsam obcaecati ratione unde commodi alias, tempore maxime.</p>
     
       <div className='lg:grid-cols-3 sm:grid lg:grid sm:grid-cols-1 gap-6'>
       <div className="card w-96 bg-base-100 shadow-xl m-8">
  <figure><img src="https://www.curryflow.com/wp-content/uploads/2021/08/emad-1.jpg" alt="picture" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mr Shahbaazhsaheen</h2>
    <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt? Aperiam sequi, rerum ad recusandae sit laborum hic cupiditate perferendis.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">see details</button>
    </div>
  </div>
      </div>
      {/*  */}
       <div className="card w-96 bg-base-100 shadow-xl m-8">
  <figure><img src="https://www.curryflow.com/wp-content/uploads/2021/08/emad-1.jpg" alt="picture" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mr Shahbaazhsaheen</h2>
    <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt? Aperiam sequi, rerum ad recusandae sit laborum hic cupiditate perferendis.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">see details</button>
    </div>
  </div>
      </div>
      {/*  */}
       <div className="card w-96 bg-base-100 shadow-xl m-8">
  <figure><img src="https://www.curryflow.com/wp-content/uploads/2021/08/emad-1.jpg" alt="picture" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mr Shahbaazhsaheen</h2>
    <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt? Aperiam sequi, rerum ad recusandae sit laborum hic cupiditate perferendis.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">see details</button>
    </div>
  </div>
      </div>
      {/*  */}
       </div>
      </div>
    );
};

export default About;