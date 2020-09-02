import React from 'react'
import { Navbar, PrincipalNavigation, Logo } from './styles'
import { ShoppingOutlined } from '@ant-design/icons'
import Items from './items/index'
import { Menu, Layout, Badge } from 'antd'
import { Link } from 'react-router-dom'



const HeaderNav = () => {
  return (
    <Layout>
      <Navbar>
        <Logo>
          <h1>S</h1>
        </Logo>

        <PrincipalNavigation  >
          <Items>
            <Menu.Item>Fundas para celular </Menu.Item>
            <Menu.Item>Tazas</Menu.Item>
            <Menu.Item>Playeras</Menu.Item>
          </Items>
          <Badge count={1}>
            <ShoppingOutlined
              style={{ fontSize: 30}} />

          </Badge>
        </PrincipalNavigation >

      </Navbar>
    </Layout>

  );
}

export default HeaderNav;