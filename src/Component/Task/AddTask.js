import { Toast } from 'flowbite-react';
import React from 'react';
import Lottie from "lottie-react"
import addtask from '../../addtask.json'
import addtask2 from '../../addtask2.json'
const AddTask = () => {

    const handleAdd=(event)=>{
        event.preventDefault()
    

        const time =event.target.time.value
        const task =event.target.task.value
       
      
       console.log(time)

          const submit={  
         

          //new     
          time: time ,
          task: task,
        
            
              
          }
      
        
        fetch('https://server-riad009.vercel.app/addtask',{
          
          method: "POST",
          headers:{
           "content-type" : "application/json"
          },
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
        console.log(data)
        if(data.acknowledged){
          event.target.reset();
        
          alert('Add task done')
         }
         
      
        })
          console.log(submit)
        
          
      //submit
      
          
           
          }
    return (
        <div>
                       

<div className='flex'>


            <div className='w-96'><Lottie animationData={addtask}/></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,192L96,160L144,224L192,320L240,192L288,160L336,96L384,64L432,96L480,64L528,32L576,32L624,160L672,96L720,96L768,96L816,192L864,320L912,96L960,256L1008,32L1056,192L1104,256L1152,160L1200,224L1248,128L1296,128L1344,192L1392,128L1440,320L1440,0L1392,0L1344,0L1296,0L1248,0L1200,0L1152,0L1104,0L1056,0L1008,0L960,0L912,0L864,0L816,0L768,0L720,0L672,0L624,0L576,0L528,0L480,0L432,0L384,0L336,0L288,0L240,0L192,0L144,0L96,0L48,0L0,0Z"></path></svg>
</div>


 <form onSubmit={handleAdd} >
           
        

           {/* form */}
          <div className='className=m-4  grid grid-cols-1 lg:grid-cols-3 mt-10'>
  
           
            
          <label className="label "> <br />
             </label>
         
          
         
           <label className="label bg-gray-200 d-flex"> <br />
           <span className="font-bold label-text">time: </span> <br />
             <input type="text"  placeholder="time"  name='time'  className="input w-full max-w-xs" /> 
         
             <span className="font-bold label-text">Task: </span> <br />
             <input type="text"  placeholder="task details" name='task' className="input w-full max-w-xs" /> 
           </label>
         

             </div>
         
         <input type="submit" className='btn btn-primary w-ful px-12 mt-5' value="submit" />
         </form>


        </div>
    );
};

export default AddTask;