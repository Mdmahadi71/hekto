import React from 'react'
import Banner from '../components/Banner'
import Cate from '../components/Cate'
import Discount from '../components/Discount'
import Featured from '../components/Featured'
import Lblog from '../components/Lblog'
import Leatest from '../components/Leatest'
import Newslater from '../components/Newslater'
import Trending from '../components/Trending'
import Unique from '../components/Unique'
import Whatss from '../components/Whatss'
const Home = () => {
  return (
    <div>

     <Banner/>
     <Featured/>
     <Leatest/>
     <Whatss/>
     <Unique/>
     <Trending/>
     <Discount/>
     <Cate/>
     <Newslater/>
     <Lblog/>

    </div>
  )
}

export default Home
