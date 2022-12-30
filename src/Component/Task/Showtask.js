import React from 'react';
import { Link } from 'react-router-dom';

const Showtask = ({s}) => {
    console.log(s)
    return (
        <div>
        
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                  Task Time
                </th>
                <th scope="col" class="py-3 px-6">
                    Task details
                </th>
              
               
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {s.time}
                </th>
                <td class="py-4 px-6">
                     {s.task}  <Link to={'/addtask'}> <button className='ml-6 btn btn-primary'> Details</button></Link>
                </td>
               

            </tr>
           
        </tbody>
    </table>
</div>

        </div>
    );
};

export default Showtask;