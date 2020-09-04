import React from 'react'
import ProductCard from '../../Components/UI/ProductCard'
import { CardContent } from './styles'
import { Layout } from 'antd'
import products from '../../db.json'

const MainView = () => {
  return (
    <Layout>
      <CardContent>
        {
          products.map((product, index) => {
            return (
              <ProductCard key={index} product={product}/>
            )
          })
        }
      </CardContent>
    </Layout>

  )
}

export default MainView
