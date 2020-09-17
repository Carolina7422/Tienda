import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { catsData } from "../cats"
export const ImagesContext = createContext()

const ImagesProvider = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading]= useState(false)
  
  useEffect(() => {
    setLoading(true)
    setData(catsData)
  },[])
  /*useEffect(() => {

  setLoading(true)

    fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc&mime_types=jpg,png')
      .then(res => {
        if(res.ok) {
          return res.json()
        } else{
          throw new Error("Algo salió mal")
        }
      })
      .then(result => {
        setData(result)
        setLoading(false)
      }).catch((error) => console.log(error))
  }, [])*/

  return (
    <ImagesContext.Provider value={{
      data,
      isLoading
    }}>
      {props.children}
    </ImagesContext.Provider>

  )
}
ImagesProvider.propTypes = {
  children: PropTypes.any
}

export default ImagesProvider
