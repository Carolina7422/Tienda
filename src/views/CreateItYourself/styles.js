import styled from 'styled-components'
import { Spin } from 'antd';

export const Container = styled.div`
    max-width:90%;
    padding:10px;
    height:400px;

`

export const Spinner = styled(Spin)`
    text-align: center;
    border-radius: 4px;
    margin: auto;
    padding: 100px 100px;
    margin: 20px 0;
`