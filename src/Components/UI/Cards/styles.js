import { Card } from 'antd'
import styled from 'styled-components'


export const ProductCard =  styled(Card)`
    margin:30px 20px;
`

export const Button = styled.button`
    background:#1da57a;
    width:80%;
    height:40px;
    color:white;
    border: white;
    outline:none;
    font-size: 17px;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

`
