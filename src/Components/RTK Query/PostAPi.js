import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const PostAPi = createApi ({
 reducerPath:'postApi' ,
//   reducer we give string,its a unique key who define where to save caching.
 baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),   // we fecth data from api make and fetchbaseQyery will do fecth rapper wo handler automatic handler requerst and response 

 endpoints:(builder)=>({
  getAllPost:builder.query({
    query:()=>({
        url:'posts',
        method:'GET'
    })   
  })
 })  // we definde the action we have to perform we can give any paramiter but genrally use builder.
 // query use when we get data, mutation use when upadate or edit or delet data 



})
export const {useGetAllPostQuery} = PostAPi
// we genrated hook which is autogenrated. 
// use+  getAllpost + Query = PostApi 

