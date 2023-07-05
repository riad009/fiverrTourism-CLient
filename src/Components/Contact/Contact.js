import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../Shared/Shared';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/contact`, { name, email, message });
      alert('Email sent')
      console.log(response.data);
      // Display success message or perform any other necessary actions
    } catch (error) {
      console.error(error);
      // Display error message or perform any other necessary actions
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-8 mx-8">
        <img
          className="object-contain"
          src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2968.jpg?w=2000"
          alt=""
        />
        <section className="mt-12">
          <h1 className="text-xl font-semibold mb-4">Book a Meeting</h1>
          <p className="text-left">
         
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
