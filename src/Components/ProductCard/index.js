import React from 'react'
import { Container, Button, Image } from './styles'
import { colors } from '../../helpers'
import PropTypes from 'prop-types'

// cambiar agregarProducto por handleClick
const ProductCard = ({ product, agregarProducto }) => {
  return (
    <Container
      background={colors(product.type)}
      cover={
        <Image
          alt="example"
          src={product.url}
        />
      }
    >
      <Button onClick={agregarProducto}>Agregar</Button>

    </Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  agregarProducto: PropTypes.func
}

export default ProductCard
