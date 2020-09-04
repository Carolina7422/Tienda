import React from 'react'
import products from '../../db.json'
import Card from '../../Components/ProductCard'
import { Content } from './styles'
import { Layout } from 'antd'

const Phone = () => {
  return (
    <Layout>
      <Content>
        {
          products
            .filter(prod => prod.type === 'phone')
            .map(phone => {
              return (
                <Card product={phone} key={phone.id} />
              )
            })
        }
      </Content>
    </Layout>
  )
}

export default Phone
