import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { Content } from './styles'
import { Layout } from 'antd'
import { MainContext } from '../../context'

const TshirtView = () => {
  const { products, itemsCart, setItemsCart } = useContext(MainContext)

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
                  itemsCart={itemsCart}
                  products={products}
                  key={tshirt.id}
                  setItemsCart={setItemsCart}
                />
              )
            })
        }
      </Content>
    </Layout>
  )
}

export default TshirtView
