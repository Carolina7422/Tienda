import React, { createContext, useState } from 'react'
import data from '../db.json'

export const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [products, setProduct] = useState(data)
  // shopping cart state
  const [cart, setCart] = useState([])
  const [images, setImages] = useState([])



  return (

    <MainContext.Provider
      value={{
        products,
        cart,
        setCart,
        setProduct,
        images,
        setImages
      
      }}
    >
      {children}

    </MainContext.Provider>
  )
}



export default MainProvider
