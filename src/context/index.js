import React, { createContext, useState } from 'react'
import data from '../db.json'
import PropTypes from 'prop-types'

export const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [products, setProduct] = useState(data)
  // shopping cart state
  const [cart, setCart] = useState([])

  return (

    <MainContext.Provider
      value={{
        products,
        cart,
        setCart,
        setProduct
      }}
    >
      {children}

    </MainContext.Provider>
  )
}

MainProvider.propTypes = {
  children: PropTypes.any
}

export default MainProvider
