import React, { createContext, useState } from 'react';
import data from '../db.json'

export const MainContext = createContext()

const MainProvider = ({children}) => {

  const [products, setProduct] = useState(data)
// shopping cart state
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState("8")

  return(

  <MainContext.Provider 
    value={{
      products,
      cart,
      setCart,
      count,
      setCount
    }}
  >
      {children}

  </MainContext.Provider>
  )
} 
export default MainProvider
