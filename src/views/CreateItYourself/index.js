import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import { Container } from './styles'
// import OptionComponent from '../../Components/OptionComponent'
import EditImage from '../../Components/OptionComponent/EditImage'
import { ImagesContext } from '../../context/imagesContext'
import Images from '../../Components/OptionComponent/draggableImage'

const CreateYourSelft = () => {
  const { data } = useContext(ImagesContext)

  return (

    <Row>
      <Col xs={24} md={12}>
        <EditImage id="target"

        />
      </Col>
      <Col xs={24} md={12}>
        <Row justify="center" align="bottom" >
          <Col>
            <h2>Elige una imagen</h2>
            <Container >

              {
                data.map(e => {
                  return (
                    <Images
                      id={e.id}
                      draggable="true"
                      src={e.url}
                      key={e.id}/>
                  )
                })
              }
            </Container>

          </Col>
        </Row>
      </Col>
    </Row>

  )
}

export default CreateYourSelft
