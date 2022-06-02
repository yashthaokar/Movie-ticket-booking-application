// import { Box, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { moviethunk } from './Thunk/moviethunk';
// import { styled } from '@mui/material';
// import {Tooltip,Fab, Modal,TextField} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import { ChairTwoTone, ScreenshotMonitor } from '@mui/icons-material';
// // import {v4 as uuidv4} from 'uuid'
// import {First,Second,Third} from './Data'
// import { addItem,handlebook,handleconfirm } from './Slices/movieSlice';
// import Timer from './Timer';

// console.log(First)

//  const ModalStyle = styled(Modal)({
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center'
//  })

// const BoxCard=styled('Box')({
//        display:"grid",
//        gridTemplateColumns:"340px 340px 340px",
//        marginTop:"20px",
//        padding:'20px'
       
// })

// const BoxChair=styled('div')({
//      display:"grid",
//      gridTemplateColumns:'auto auto auto auto auto auto'
// })

// const Feed = () => {
//   const [open,setOpen] = useState(false)
//   const dispatch = useDispatch()
//   useEffect(()=>{
//    dispatch(moviethunk())
//   },[])

//   const {list,selected,show,total,confirm} = useSelector((state)=>state.movie)
  
//   console.log(selected)

//   const handleItem=(ele)=>{
//      dispatch(addItem(ele))
//   }

//   const handleBook=()=>{
//      dispatch(handlebook())

//   }

//   const handleConfirm=()=>{
//     dispatch(handleconfirm())
//   }

//   return (
//     <Box sx={{textAlign:'center', }} flex={3}>    
     
//       { (
//          ()=>{
//            if (show){
//         return <>
        
                   
//                    </>
//           }
            
//          }

//       )() }
     
//     </Card>
//             </>
//           })
//         }
//        </BoxCard>
//     </Box>
//   )
// }

// export default Feed
