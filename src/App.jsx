import './App.css'
import Container from './Container'
import Flex from './Flex'
import What from './What'
import Banner from './components/Banner'
import Featured from './components/Featured'
import Leatest from './components/Leatest'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <Menu/>
     <Navbar/>
     <Banner/>
     <Featured/>
     <Leatest/>
     <What/>
    </>
  )
}

export default App
