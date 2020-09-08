import React, { createContext, useState} from 'react'
import PropTypes from 'prop-types'

export const ImagesContext = createContext()

const ImagesProvider = (props) => {
  const [data, setData] = useState([])

  
  return (
    <ImagesContext.Provider value={{
      data,
      setData
    }}>
    
      {props.children}
    </ImagesContext.Provider>

  )
}
ImagesProvider.propTypes = {
  children: PropTypes.any
}

export default ImagesProvider
