import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Product from '@/components/ProductList'
import Bestdeal from '@/components/Bestdeal'
import FilterBar from '@/components/FilterBar'

const page = () => {
  return (
    <div>
      <Header/>
      <FilterBar />
      <Product/>
      <Bestdeal/>
      <Footer/>
    </div>
  )
}

export default page
