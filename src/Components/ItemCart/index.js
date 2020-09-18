import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Container } from './styles'
import { total } from '../../helpers/'
import PropTypes from 'prop-types'

const ItemCart = ({ itemsCart, setItemsCart }) => {
  const deleteElement = id => {
    const newProduct = itemsCart.filter(product => product.id !== id)
    setItemsCart(newProduct)
  }

  return (
    <div>
      {itemsCart.length !== 0
        ? itemsCart.map(e => (
          <Container key={e.id}>
            <img width="70px" src={e.url} alt="producto añadido"/>
            <h4>${!e.ofert ? e.price : e.newPrice}.00</h4>
            <DeleteOutlined onClick={() => deleteElement(e.id)} style={{ fontSize: 20 }}/>
          </Container>
        ))
        : <h3>Tu carrito esta vacío</h3>
      }
      <h3>Total: ${itemsCart.length && total(itemsCart)}.00</h3>
    </div>

  )
}
ItemCart.propTypes = {
  itemsCart: PropTypes.array.isRequired,
  setItemsCart: PropTypes.func.isRequired
}
export default ItemCart
