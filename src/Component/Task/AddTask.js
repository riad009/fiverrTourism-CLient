import { Toast } from 'flowbite-react';
import React from 'react';

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
      
        
        fetch('http://localhost:5000/addtask',{
          
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