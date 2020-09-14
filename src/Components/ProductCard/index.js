import React from 'react'
import { Container, Button, Image, Price } from './styles'
import { colors } from '../../helpers'
import PropTypes from 'prop-types'

// cambiar agregarProducto por handleClick
const ProductCard = ({ product, cart, setCart, products }) => {
  const { type, url, price, newPrice, ofert, id } = product

  const handleClick = id => {
    const product = products.filter(prod => prod.id === id)[0]
    setCart([
      ...cart,
      product
    ])
  }

  const renderOfertPrice = () => {
    return (
      <>
        <Price color="grey" decoration="line-through">${price}.00</Price>
        <Price color="red">${newPrice}.00</Price>
      </>
    )
  }

  return (
    <Container
      background={colors(type)}
      cover={
        <Image
          alt="example"
          src={url}
        />
      }
    >
      {
        !ofert ? <Price color="black">${price}.00</Price> : renderOfertPrice()
      }

      <Button onClick={() => handleClick(id)}>Agregar al carrito</Button>

    </Container>
  )
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
    ofert: PropTypes.bool,
    price: PropTypes.number,
    newPrice: PropTypes.number,
    id: PropTypes.number

  }).isRequired,
  filter: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  products: PropTypes.array
}

export default ProductCard
