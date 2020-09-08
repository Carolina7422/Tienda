import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

export const Navbar = styled(Header)`
  background: transparent;
  display:flex;
  justify-content:space-between;
  height:100px;
  align-items:center;
  max-width:100%;

`

export const PrincipalNavigation = styled.nav`
  display:flex;
  justify-content:space-between;
  width:50%;
  height:100%;
  align-items:center;

`

export const Logo = styled.div`
  position:relative;
  h1{
      color:#1da57a;
      font-size: 40px;
      font-weight:700;
  };
    & ::after{
      content:"C";
      color: #7A1DA5;
      font-size:35px;
      font-weight:700;
      position:absolute;
      top:10px;
      left:17px;
    }

`
