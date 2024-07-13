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
import SingleBlog from './Pages/SingleBlog'
import ContactUs from './Pages/ContactUs'
import Not404 from './Pages/Not404'
import FAQ from './Pages/FAQ'




function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<Layout/>}>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/ShopGrid" element={<ShopGrid/>}> </Route>
       <Route path="/ShopList" element={<ShopList/>}> </Route>
       <Route path="/Shopsidebar" element={<Shopsidebar/>}> </Route>
       <Route path="/Shopsidebar/:Id" element={<ProductDetails/>}> </Route>
       <Route path="/Shopping" element={<Shopping/>}> </Route>
       <Route path="/OrderCompleted" element={<OrderCompleted/>}> </Route>
       <Route path="/DemoPage" element={<HektoDemopage/>}> </Route>
       <Route path="/LoginPage" element={<LoginPage/>}> </Route>
       <Route path="/BlogPage" element={<BlogPage/>}> </Route>
       <Route path="/About" element={<About/>}> </Route>
       <Route path="/SingleBlog" element={<SingleBlog/>}> </Route>
       <Route path="/ContactUs" element={<ContactUs/>}> </Route>
       <Route path="/Faq" element={<FAQ/>}> </Route>
    </Route>
    <Route path="/not404" element={<Not404/>}> </Route>
    </>
  ))

  return (
    <>
     
     <RouterProvider router={router}>

     </RouterProvider>
    </>
  )
}

export default App
