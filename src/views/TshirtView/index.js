import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { Content } from './styles'
import { Layout } from 'antd'
import { MainContext } from '../../context'

const TshirtView = () => {
  const { products, cart, setCart } = useContext(MainContext)

  return (
    <Layout>
      <Content>
        {
          products
            .filter(prod => prod.type === 'tshirt')
            .map(tshirt => {
              return (
                <ProductCard
                  product={tshirt}
                  cart={cart}
                  products={products}
                  key={tshirt.id}
                  setCart={setCart}
                />
              )
            })
        }
      </Content>
    </Layout>
  )
}

export default TshirtView
