import './App.css'
import {createBrowserRouter ,createRoutesFromElements , RouterProvider ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'
import ShopGrid from './Pages/ShopGrid'
import ShopList from './Pages/ShopList'
import Shopsidebar from './Pages/Shopsidebar'
import ProductDetails from './Pages/ProductDetails'
import Shopping from './Pages/Shopping'
import OrderCompleted from './Pages/OrderCompleted'
import HektoDemopage from './Pages/HektoDemopage'
import LoginPage from './Pages/LoginPage'
import BlogPage from './Pages/BlogPage'
import About from './Pages/About'




function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/ShopGrid" element={<ShopGrid/>}> </Route>
       <Route path="/ShopList" element={<ShopList/>}> </Route>
       <Route path="/Shopsidebar" element={<Shopsidebar/>}> </Route>
       <Route path="/ProductDetails" element={<ProductDetails/>}> </Route>
       <Route path="/Shopping" element={<Shopping/>}> </Route>
       <Route path="/OrderCompleted" element={<OrderCompleted/>}> </Route>
       <Route path="/DemoPage" element={<HektoDemopage/>}> </Route>
       <Route path="/LoginPage" element={<LoginPage/>}> </Route>
       <Route path="/BlogPage" element={<BlogPage/>}> </Route>
       <Route path="/About" element={<About/>}> </Route>
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
