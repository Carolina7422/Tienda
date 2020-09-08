import React from 'react'
import { Row, Col } from 'antd'
// import { Container } from './styles'
// import OptionComponent from '../../Components/OptionComponent'
import EditImage from '../../Components/OptionComponent/EditImage'
// import ImagesContext from '../../context/imagesContext'
import Images from '../../Components/OptionComponent/images'

const CreateYourSelft = () => {
  return (
    <>
      <Row>
        <Col xs={24} md={12}>
          <EditImage />
        </Col>
        <Col xs={24} md={12}>
          <Images/>
        </Col>
      </Row>

    </>
  )
}

export default CreateYourSelft
