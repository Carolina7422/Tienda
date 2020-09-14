import React, { createContext, useState } from 'react'
import data from '../db.json'
import PropTypes from 'prop-types'

export const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [products, setProduct] = useState(data)
  // shopping cart state
  const [cart, setCart] = useState([])
  const [newProduct, setNewProduct] = useState({
    img: "",
    price: 0
  }) 


  return (

    <MainContext.Provider
      value={{
        products,
        cart,
        setCart,
        setProduct,
        newProduct,
        setNewProduct
      
      }}
    >
      {children}

    </MainContext.Provider>
  )
}



export default MainProvider
