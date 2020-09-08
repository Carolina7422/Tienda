import React from 'react'
import { Container, Button, Image, Price } from './styles'
import { colors } from '../../helpers'
import PropTypes from 'prop-types'

// cambiar agregarProducto por handleClick
const ProductCard = ({ product, handleClick }) => {
  const renderOfertPrice = () => {
    return (
      <>
        <Price color="grey" decoration="line-through">{product.price}</Price>
        <Price color="red">{product.newPrice}</Price>
      </>
    )
  }

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
      {
        !product.ofert ? <Price color="black">{product.price}</Price> : renderOfertPrice()
      }

      <Button onClick={handleClick}>Agregar al carrito</Button>

    </Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
    ofert: PropTypes.bool,
    price: PropTypes.string,
    newPrice: PropTypes.string

  }).isRequired,
  handleClick: PropTypes.func
}

export default ProductCard
