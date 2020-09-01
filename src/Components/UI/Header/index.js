import React from 'react'
import { Navbar, PrincipalNavigation } from '../../../assets/styles'
import {ShoppingCartOutlined } from '@ant-design/icons'



const HeaderNav = () => {



  return (
    <>
<Navbar>
      <div>
        <h1>logo</h1>
      </div>

     <PrincipalNavigation  >
      
        <h3>Fundas para Celular</h3>
        <h3>Tazas</h3>
        <h3>Playeras</h3>
        <ShoppingCartOutlined 
        style={{fontSize:30}}
        />
      </PrincipalNavigation >

    </Navbar>
    </>
  );
  }

  export default HeaderNav;