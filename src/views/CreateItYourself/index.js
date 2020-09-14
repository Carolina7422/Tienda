import React, { useContext } from 'react'
import { Row, Col, Typography } from 'antd'
import { Container, Spinner } from './styles'
// import OptionComponent from '../../Components/OptionComponent'
import EditImage from '../../Components/EditImage'
import { ImagesContext } from '../../context/imagesContext'
import Images from '../../Components/draggableImage'
import im from '../../assets/img/playera-canvas.png'

const CreateYourSelft = () => {
  const { data, isLoading } = useContext(ImagesContext)
  

  return (
  
    <Row>
      <Col xs={24} md={12}>
        <EditImage id="canvas" />

    </Col>
        <Col xs={24} md={12}>
          <Container >
            <Typography.Title level={3} type="secondary">Elige una imagen</Typography.Title>
            {isLoading && <Spinner/>}
              {
              
                data.map(e => {
                  return (
                    <Images
                      id={e.id}
                      draggable={true}
                      src={e.url}
                      key={e.id} />
                )
                })
              
              }
            </Container>
          </Col>
        </Row>
  )
}

export default CreateYourSelft
