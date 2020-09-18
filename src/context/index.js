import React, { createContext, useState } from 'react'
import data from '../db.json'

export const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [products, setProduct] = useState(data)
  const [itemsCart, setItemsCart] = useState([])
  const [images, setImages] = useState([])

  return (
    <MainContext.Provider
      value={{
        products,
        itemsCart,
        setItemsCart,
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
