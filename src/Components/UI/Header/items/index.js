import React from 'react';

import {MenuTag} from './styles'

const Items = ({ children }) =>  <MenuTag  mode="horizontal" defaultSelectedKeys={['2']}>{children}</MenuTag>


export default Items;
