import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { MainContext } from '../../context'
import { Content } from './styles'
import { Layout } from 'antd'

const CupView = () => {
  const { products, cart, setCart, } = useContext(MainContext)

  return (
    
    <Layout>
      <Content>
        {
          products
            .filter(prod => prod.type === 'cup')
            .map(product => {
              return (
                <ProductCard
                  product={product}
                  cart={cart}
                  products={products}
                  key={product.id}
                  setCart={setCart}
                />
              )
            })
        }

      </Content>

    </Layout>
 
  )
}

export default CupView
