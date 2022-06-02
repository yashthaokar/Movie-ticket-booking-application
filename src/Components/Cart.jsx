import React from 'react'
import { idsetter} from './Slice/ApicallSlice'
import '../Components/Cart.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


const Cart = ({ Title, Poster, imdbID}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const idHandler=(id)=>{
     dispatch(idsetter(id))
      navigate('/user')
  }


  return (
     <div class="card" style={{width: '18rem'}} > 
     
    <img src={Poster} class="card-img-top" alt={Title}/>
    <div class="card-body">
      <h5 class="card-title">{Title}</h5>
  
      <button type="button" class="btn btn-warning" onClick={()=>(idHandler(imdbID))}>Book Show</button> 
    </div>
  </div>
  );
}

export default Cart