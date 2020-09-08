import styled from 'styled-components'
import { Layout } from 'antd'

export const Content = styled(Layout.Content)`
    height: 70vh;
    color: #fff;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #364d79;
    margin-top: 10px;
    & img{
        width:100%;
        height:100%;
    }
    
`
