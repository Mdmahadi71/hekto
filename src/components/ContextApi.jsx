// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { createContext } from 'react'

// let DataApi = createContext()


// const ContextApi = ({children}) => {
//     let [itemss, setitem] = useState([])
    

//     let getdata =(()=>{
//         axios.get(('https://dummyjson.com/products')).then((response)=>{
//             setitem(response.data);
//             console.log(response);
//         })
//     })
//     useEffect(() => {
//         getdata()
//     }, [])

//   return (
//     <DataApi.Provider value={itemss}>
//         {children}
//     </DataApi.Provider>
//   )
// }

// export  {ContextApi, DataApi}