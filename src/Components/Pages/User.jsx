import { Box, Typography } from '@mui/material'
import React, {  useState } from 'react'

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material';
import { Modal} from '@mui/material';

import { ChairTwoTone, ScreenshotMonitor } from '@mui/icons-material';

import {First,Second,Third} from './Data'
import { addItem, handlebook  } from '../Slice/ApicallSlice';

  const ModalStyle = styled(Modal)({
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
     })
    
    const BoxCard=styled('Box')({
           display:"grid",
           gridTemplateColumns:"340px 340px 340px",
           marginTop:"20px",
           padding:'20px'
           
    })
    
    const BoxChair=styled('div')({
         display:"grid",
         gridTemplateColumns:'auto auto auto auto auto auto'
    })
   const  handlersubmitBooking=()=>{
     alert("your booking is confirm")
   }
    

const User = () => {

  const [open, setOpen]= useState(false)
   const dispatch= useDispatch();
  const handleSeat=(ele)=>{
    dispatch(addItem(ele))
  }
  const handlerBook=()=>{
    dispatch(handlebook())
  }
  
  const { Id, value,selected,total, show } = useSelector((state) => state.movie)
  console.log(Id);

   
  const newList = value.find((ele)=> ele.imdbID === Id)
      

  console.log(Id);
  console.log(newList);


  return (
          <>
        
            {newList&& <div>
     
    
            <div class="card" style={{ width: '18rem' }}>
              <img src={newList.Poster} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{newList.Title}</h5>
                <a href="#" class="btn btn-primary" onClick={()=>setOpen(true)}>book Me!</a>
              </div>
            </div>     
     
    </div>}

    {/* //-------------------------------------------------------------- */}
      
      {(
        ()=>{
 if(show){
   return  <ModalStyle
             open={open}
             onClose={()=>setOpen(false)}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
           >
             <Box sx={{backgroundColor:'white',width:"400px",height:'450px', borderRadius:'8px',padding:'10px'}}>
             <Typography variant='h6' fontWeight={200} textAlign='center' > III Tier </Typography>
             <BoxChair>
                 {
                 First.map((ele)=>{
                   const color = selected.find((item)=>item.id==ele.id)?"red":'green'
                   return <Box key={ele.id}>
                          {/* <Button   > <ChairTwoTone/> </Button> */}
                           <Button  onClick={()=>handleSeat(ele)}  style={{color}} > <ChairTwoTone/> </Button>
                           </Box>
                               
                 })
                 }
               </BoxChair> 
               <Typography variant='h6' fontWeight={200} textAlign='center' > II Tier </Typography>
               <BoxChair>
                 {
                 Second.map((ele)=>{
                   const color = selected.find((item)=>item.id==ele.id)?"red":'green'

                  return <Box key={ele.id}>
                          <Button onClick={()=>handleSeat(ele)}  style={{color}}  > <ChairTwoTone/> </Button>
                          </Box>
                               
                 })
                 }
               </BoxChair>
               <Typography variant='h6' fontWeight={200} textAlign='center' > I Tier </Typography>
               <BoxChair>
                 {
                 Third.map((ele)=>{
                   const color = selected.find((item)=>item.id==ele.id)?"red":'green'

                   return <Box key={ele.id}>
                           <Button onClick={()=>handleSeat(ele)}  style={{color}}   > <ChairTwoTone/> </Button>
                           </Box>
                               
                 })
                 }
               </BoxChair>
                 <Typography variant='h6' fontWeight={300} textAlign='center' marginTop='20px' > <ScreenshotMonitor/> </Typography>
                 <Button onChange={()=>setOpen(true)} variant='contained' sx={{marginLeft:"150px"}} onClick={handlerBook} >Book Ticket</Button>
             </Box>
           </ModalStyle> 
        }
      if(!show&&selected.length>0){
        return  <ModalStyle
             open={open}
             onClose={()=>setOpen(false)}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
           >
             <Box sx={{backgroundColor:'white',width:"400px",height:'400px', borderRadius:'8px',padding:'10px'}}>
                 {selected.map((ele)=>{
                      return <>
                               <Box sx={{textAlign:"center"}}>
                               <span  >{ele.type} : </span>
                          
                                <span style={{marginLeft:"30px"}}>{ele.price}</span><hr/>
                               </Box>
                           </>
                    })}
                   <Typography sx={{marginLeft:"120px"}}>Total Bill : {total}/- Rupees </Typography>
                 <Button variant='contained' sx={{marginLeft:"130px",marginTop:"20px"}} onClick={handlersubmitBooking} >Confirm Booking</Button>
                 <Box sx={{marginLeft:"130px",marginTop:"20px"}}>
                  {/* <Timer/> */}
                 </Box>
             </Box>
           </ModalStyle>
      }
        }       
      )()}
         


           {/* ------------------------ */}
     
           





          </>
  )
}

export default User;