import React, { useContext } from 'react'
import { Row, Col, Typography } from 'antd'
import { Container } from './styles'
// import OptionComponent from '../../Components/OptionComponent'
import EditImage from '../../Components/EditImage'
import { ImagesContext } from '../../context/imagesContext'
import Image from '../../Components/draggableImage'

const CreateYourSelft = () => {
  const { data } = useContext(ImagesContext)

  return (

    <Row>
      <Col xs={24} md={12}>
        <EditImage />

      </Col>
      <Col xs={24} md={12}>
        <Container >
          <Typography.Title level={3} type="secondary">Elige una imagen</Typography.Title>
          {
            data.map(e => {
              return (
                <Image
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
