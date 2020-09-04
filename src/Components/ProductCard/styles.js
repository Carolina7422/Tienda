import { Card } from 'antd'
import styled from 'styled-components'

export const Container = styled(Card)`
    margin:30px 20px;
    padding-top:20px;
    width:400px;
    height:450px;
    background: ${props => props.background};

`

export const Button = styled.button`
    background:#1da57a;
    width:100%;
    height:50px;
    color:white;
    border: white;
    outline:none;
    font-size: 17px;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

`

export const Image = styled.img`
width: 300px;
height:300px;
margin: auto;

`
