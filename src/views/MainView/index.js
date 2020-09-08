import React from 'react'
import { Layout, Carousel } from 'antd'
import { Content } from './styles'

const MainView = () => {
  return (
    <Layout>
      <Carousel autoplay>
        <Content>
          <img src={require('../../assets/img/special-offer.png')} alt="imagen"/>
        </Content>
        <Content>
          <img src={require('../../assets/img/t-shirt.jpg')} alt="imagen"/>
        </Content>
      </Carousel>
    </Layout>

  )
}

export default MainView
