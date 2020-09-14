import React from 'react'
import PropTypes from 'prop-types'

import { MenuTag } from './styles'

const Items = ({ children }) => <MenuTag mode="horizontal" defaultSelectedKeys={['2']}>{children}</MenuTag>

Items.propTypes = {
  children: PropTypes.array
}
export default Items
