import React, { useContext, Fragment } from 'react'
import { Navbar, PrincipalNavigation, Logo, Container } from './styles'
import { ShoppingOutlined, DeleteOutlined } from '@ant-design/icons'
import Items from './items/index'
import { Badge, Popover, Menu, Layout } from 'antd'

import { Link } from 'react-router-dom'
import { MainContext } from '../../context'
import { total } from '../../helpers/'

const HeaderNav = () => {
  const { cart, setCart} = useContext(MainContext)

  const cartContent = () => {
    return (
      <div>
        {cart.length !== 0
          ? cart.map(e => (
            <Fragment key={e.id}>
              <Container>
                <img width="70px" src={e.url} alt="producto añadido"/>
                <h4>${!e.ofert ? e.price : e.newPrice}.00</h4>
                <DeleteOutlined onClick={() => deleteElement(e.id)} style={{ fontSize: 20 }}/>
              </Container>

          </Fragment>
          ))
          : <p>Tu carrito esta vacío</p>
        }
        <h3>Total: ${cart.length && total(cart)}.00</h3>
      </div>

    )
  }

  const deleteElement = id => {
    const newProduct = cart.filter(product => product.id !== id)
    setCart(newProduct)
  }


  return (
    <Layout>
      <Navbar>
        <Logo>
          <Link to="/">
            <h1>S</h1>
          </Link>
        </Logo>
        <PrincipalNavigation>
          <Items>
            <Menu.Item><Link to="/fundas">Fundas para celular </Link></Menu.Item>
            <Menu.Item><Link to="/tazas">Tazas</Link></Menu.Item>
            <Menu.Item><Link to="/playeras">Playeras</Link></Menu.Item>
            <Menu.Item><Link to="/crealo-tu-mismo">Crealo tu mismo</Link></Menu.Item>
          </Items>
          <Badge count={cart.length}>
            <Popover placement="bottomLeft" content={() => cartContent()} trigger="click">
              <ShoppingOutlined
                style={{ fontSize: 30 }} />
            </Popover>

          </Badge>
        </PrincipalNavigation >

      </Navbar>
    </Layout>

  )
}

export default HeaderNav
