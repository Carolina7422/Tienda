import React from 'react'
import { Row, Col } from 'antd'
import Images from './images'
import EditImage from './EditImage'

const OptionComponent = () => {
// const { data } = useContext(ImagesContext)

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

export default OptionComponent
