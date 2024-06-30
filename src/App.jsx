import './App.css'
import Banner from './components/Banner'
import Cate from './components/Cate'
import Discount from './components/Discount'
import Featured from './components/Featured'
import Leatest from './components/Leatest'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Trending from './components/Trending'
import Unique from './components/Unique'
import Whatss from './components/Whatss'

function App() {

  return (
    <>
     <Menu/>
     <Navbar/>
     <Banner/>
     <Featured/>
     <Leatest/>
     <Whatss/>
     <Unique/>
     <Trending/>
     <Discount/>
     <Cate/>
    </>
  )
}

export default App
