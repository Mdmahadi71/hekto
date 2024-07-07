import './App.css'
import {createBrowserRouter ,createRoutesFromElements , RouterProvider ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'
import ShopGrid from './Pages/ShopGrid'
import ShopList from './Pages/ShopList'
import Shopsidebar from './Pages/Shopsidebar'




function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/ShopGrid" element={<ShopGrid/>}> </Route>
       <Route path="/ShopList" element={<ShopList/>}> </Route>
       <Route path="/Shopsidebar" element={<Shopsidebar/>}> </Route>
    </Route>
  ))

  return (
    <>
     
     <RouterProvider router={router}>

     </RouterProvider>
    </>
  )
}

export default App
