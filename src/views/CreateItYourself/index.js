import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
// import { Container } from './styles'
// import OptionComponent from '../../Components/OptionComponent'
import EditImage from '../../Components/OptionComponent/EditImage'
import ImagesContext from '../../context/imagesContext'
import Images from '../../Components/OptionComponent/images'
import ImagesProvider from '../../context/imagesContext'

const CreateYourSelft = () => {

  const[ data, setData ] = useState([]) 
console.log(data)
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc')
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
  }, [])


  return (
  <ImagesProvider>
      <Row>
        <Col xs={24} md={12}>
          <EditImage />
        </Col>
        <Col xs={24} md={12}>
          {
            data.map(e => {
              return(
                <Images key={e.id} img={e}/>
              )
            } )
          }
        </Col>
      </Row>
      </ImagesProvider>
  
  )
}

export default CreateYourSelft
