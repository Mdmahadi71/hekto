import React from 'react'
import ProductBanner from '../components/ProductBanner'
import ProductTocart from '../components/ProductTocart'
import DescriptionPD from '../components/DescriptionPD'
import Related from '../components/Related'

const ProductDetails = () => {
  return (
    <div>
        <ProductBanner/>
        <ProductTocart/>
        <DescriptionPD/>
        <Related/>
    </div>
  )
}

export default ProductDetails