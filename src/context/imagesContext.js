import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ImagesContext = createContext()

const ImagesProvider = (props) => {
  const [data, setData] = useState({})
  console.log(data)

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc')
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
  }, [])

  return (
    <ImagesContext.Provider value={{ data }}>
      {props.children}
    </ImagesContext.Provider>

  )
}
ImagesProvider.propTypes = {
  children: PropTypes.any
}

export default ImagesProvider
