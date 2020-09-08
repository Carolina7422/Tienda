import React from 'react'
import products from '../../db.json'
import ProductCard from '../../Components/ProductCard'
import { Content } from './styles'
import { Layout } from 'antd'

const CupView = () => {
  return (

    <Layout>
      <Content>
        {
          products
            .filter(prod => prod.type === 'cup')
            .map(product => {
              return (
                <ProductCard product={product} key={product.id} />
              )
            })
        }
      </Content>
    </Layout>
  )
}

export default CupView
