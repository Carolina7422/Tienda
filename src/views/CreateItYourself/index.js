import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { Container } from './styles'
// import OptionComponent from '../../Components/OptionComponent'
import EditImage from '../../Components/OptionComponent/EditImage'
import { ImagesContext } from '../../context/imagesContext'
import Images from '../../Components/OptionComponent/images'

const CreateYourSelft = () => {

  
  const { data } = useContext(ImagesContext) 
  
  return (

      <Row>
        <Col xs={24} md={12}>
          <EditImage/>
        </Col>
        <Col xs={24} md={12}>
          <Row justify="center" align="bottom" >
            <Col>
            <h2>Elige una imagen</h2>
        <Container >
            
          {
            data.map(e => {
              return(
              <p key={e.id}>{e.id}</p>
              )
            } )
          }
        </Container>
  
        <div id="vison"></div>
          </Col>
          </Row>
        </Col>
      </Row>

  
  )
}

export default CreateYourSelft
