import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='grid-cols-2 grid m-8'>
       <img className=" object-contain" src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2968.jpg?w=2000" alt="" />
       <section className='mt-12'>

           <h1 className='text-xl font-semibold mb-4'>Book a Meeting</h1>
           <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eveniet dolor harum hic distinctio!</p>
          
           <div className=''>
             <div className="my-2 form-control w-full max-w-xs">
               <label className="label">
                <span className="label-text">What is your name?</span>
   
               </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
              </div>
              {/*  */}
              
             <div className="my-2 form-control w-full max-w-xs">
               <label className="label">
                <span className="label-text">What is your name?</span>
   
               </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
              </div>
              {/*  */}
             <div className="my-2 form-control w-full max-w-xs">
               <label className="label">
                <span className="label-text">What is your name?</span>
   
               </label>
               <select className="select select-bordered  select-success w-full max-w-xs">
<option disabled selected>Normal</option>
<option>Normal Apple</option>
<option>Normal Orange</option>
<option>Normal Tomato</option>
</select>
              </div>
              {/*  */}
              



          </div>
       </section>
    </div>
        </div>
    );
};

export default Contact;