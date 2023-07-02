import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../Shared/Shared';
import CatagoriesProducts from './CatagoriesProducts/CatagoriesProducts';
const ShowProduct = ({p}) => {
    
  
    //1.4 = 1 star rating
    //1.6 = 2 star rating
    
   

    const [comments, setComments] = useState([]);

    const filteredComments = comments.filter(comment => comment.productID === p._id);
    
    const [averageStars, setAverageStars] = useState(5);

useEffect(() => {
  const calculateAverageStars = () => {
    const filterStars = comments.filter(comment => comment.productID === p._id);

    if (filterStars.length > 0) {
      const sumOfStars = filterStars.reduce((accumulator, comment) => {
        if (comment?.stars) {
          return accumulator + comment.stars;
        }
        return accumulator;
      }, 0);

      const averageStars = sumOfStars / filterStars.length;
      setAverageStars(averageStars.toFixed(1));
    } else {
      setAverageStars(0);
    }
  };

  calculateAverageStars();
}, [filteredComments]);
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await axios.get(`${url}/get/comment`);
          setComments(response.data);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      };
   
      fetchComments();
    }, []);


    const roundedRating = Math.round(averageStars);
    const stars = '★'.repeat(roundedRating);
    return (
        <div>
         
          {/*  */}
       <Link   to={`/estoreid/${p._id}`} className="  bg-gray-100 ">
  
  <figure> 
    
    {
        p.image[0].url?
        <>
        <img className='h-64 w-96' src={p.image[0].url} alt="picture" />
        </>
        :
        <><img className='h-64 w-96' src="https://usa-oss.edifier.com/Uploads/images/2021/07/19/2021071910430016266625805340.jpg" alt="" /></>
    } </figure>
  <div className="card-body">
  <div className="card-title flex justify-between">
  
  <div className="hover:underline hover:text-green-400">{p.name} </div>
 
  <div className="text-right">Rs {p.price}</div>
  </div>
<p>{p.category}</p>



   
    
   
    <div className="card-actions justify-end">
     <div className=""> {filteredComments.length} Reviews</div> 
      <div className=" text-xl rating">
      {stars}
    </div>
    </div>
  </div>
  
  
       </Link>    
      
        </div>
    );
};

export default ShowProduct;