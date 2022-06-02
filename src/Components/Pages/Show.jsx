import React, { useEffect } from 'react'
import Cart from '../Cart'
import { fetchUserById} from '../Thunks/ApiCallthunk'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import "../Pages/Show.css"


const Show = () => {
  const list= useSelector(state=>state.movie.value)
  //  console.log(list);
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchUserById());
  },[])
  

 
  return (<div className='container'>
  <div className='carts'>
  {
    list.map((ele)=>{
      return   <Cart {...ele} />
    })
  }
  
  </div>
   </div>
  )
}

export default Show