import React, { useContext } from 'react'
import { Navbar, PrincipalNavigation, Logo } from './styles'
import { ShoppingOutlined } from '@ant-design/icons'
import Items from './items/index'
import { Badge, Popover, Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import ItemCart from '../../Components/ItemCart'
import { MainContext } from '../../context'

const HeaderNav = () => {
  const { itemsCart, setItemsCart } = useContext(MainContext)

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
          <Badge count={itemsCart.length}>
            <Popover
              placement="bottomLeft"
              content={
                <ItemCart
                  itemsCart={itemsCart}
                  setItemsCart={setItemsCart}/>}
              trigger="click">
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
