
export const colors = (type) => {
  let bg
  switch (type) {
    case 'phone':
      bg = '#bcb7c1'
      break
    case 'cup':
      bg = '#ffb0bd'
      break
    case 'tshirt':
      bg = '#ca93c5'
      break

    default:
      bg = 'white'
  }
  return (bg)
}

export const total = (obj) => {
  const getArrayPrice = obj.map(price => price.ofert ? price.newPrice : price.price)
  return getArrayPrice.reduce((total, amount) => total + amount)
}
