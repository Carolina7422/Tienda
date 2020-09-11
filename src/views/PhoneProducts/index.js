import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { MainContext } from '../../context'
import { Content } from './styles'
import { Layout } from 'antd'

const Phone = () => {
  const { products, cart, setCart } = useContext(MainContext)

  return (
    <Layout>
      <Content>
        {
          products
            .filter(prod => prod.type === 'phone')
            .map(phone => {
              return (
                <ProductCard
                  product={phone}
                  cart={cart}
                  products={products}
                  key={phone.id}
                  setCart={setCart}
                />
              )
            })
        }
      </Content>
    </Layout>
  )
}

export default Phone
