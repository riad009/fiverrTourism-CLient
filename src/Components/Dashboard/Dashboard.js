import React from 'react';
import Lottie from "lottie-react"
import find from '../../assets/lottie/dashboard2.json'
const Dashboard = () => {
    return (
        <div>
         <div className=' w-2/3'><Lottie animationData={find}/></div>

        </div>
    );
};

export default Dashboard;