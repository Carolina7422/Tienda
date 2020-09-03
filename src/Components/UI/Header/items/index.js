import React from 'react';
import PropTypes from 'prop-types';

import {MenuTag} from './styles'

const Items = ({ children }) =>  <MenuTag  mode="horizontal" defaultSelectedKeys={['2']}>{children}</MenuTag>

Items.prototype = {
    children: PropTypes.string
}
export default Items;
