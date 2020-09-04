import React from 'react'
import { Container, Button, Image } from './styles'
import PropTypes from 'prop-types'

const Card = (props) => {
  const {
    title = 'Sin Información',
    subtitle = '-'
  } = props

  return (
    <Container>
      <Image></Image>
      row
        column
          Info
        column
          Info
        column
          Info
      <Button> { title } </Button>
      { subtitle}
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Card
