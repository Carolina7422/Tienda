import React, { useContext } from 'react'
import ProductCard from '../../Components/ProductCard'
import { MainContext } from '../../context'
import { Content } from './styles'
import { Layout } from 'antd'

const CupView = () => {
  const { products, itemsCart, setItemsCart } = useContext(MainContext)

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
                  itemsCart={itemsCart}
                  products={products}
                  key={product.id}
                  setItemsCart={setItemsCart}
                />
              )
            })
        }

      </Content>

    </Layout>

  )
}

export default CupView
