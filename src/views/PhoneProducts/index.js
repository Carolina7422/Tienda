import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { MainContext } from '../../context'
import { Content } from './styles'
import { Layout } from 'antd'

const Phone = () => {
  const { products, itemsCart, setItemsCart } = useContext(MainContext)

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
                  itemsCart={itemsCart}
                  products={products}
                  key={phone.id}
                  setItemsCart={setItemsCart}
                />
              )
            })
        }
      </Content>
    </Layout>
  )
}

export default Phone
