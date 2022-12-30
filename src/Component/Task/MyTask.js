import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react"
import task from '../../task.json'
import Showtask from './Showtask';
const MyTask = () => {
    const [show,setShow]=useState([])
    useEffect(()=>{

        fetch(`http://localhost:5000/mytask`)
        .then(res=>res.json())
        .then(data=> setShow(data))
    
    },[])

    return (
        <div>


<div>
<div className='w-96'><Lottie animationData={task}/></div>

{
  show.map(s=> <Showtask
  
  s={s}
  ></Showtask> )


}

</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,256L60,229.3C120,203,240,149,360,160C480,171,600,245,720,245.3C840,245,960,171,1080,144C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>       </div>
    );
};

export default MyTask;