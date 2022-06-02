
import React from 'react';
import 'antd/dist/antd.css';
import { BiCameraMovie } from "react-icons/bi";
import Carausal from '../Carausal'


const Home = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div style={{ border: '2px dotted lightBlue' }}>
      <div>
        <h2>Welcome to,</h2>
        <h1> Book My Show <BiCameraMovie /></h1>
      </div>
      <div className='container' style={{width:'100vw', height:'50vh'}}>
     <Carausal/>
        
      </div>

    </div>








  )
};
export default Home;
