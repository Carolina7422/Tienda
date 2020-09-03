import React from 'react';
import { ProductCard, Button, Image } from './styles'
import { colors } from '../../../helpers';
import PropTypes from 'prop-types';

const ProductsCard = ({ product, agregarProducto }) => {


    return (
        <ProductCard
            background={colors(product.type)}
            cover={
                <Image
                    alt="example"
                    src={product.url}
                />
            }
        >
            <Button onClick={agregarProducto}>Agregar</Button>

        </ProductCard>
    );
}

ProductCard.propTypes = {
    product: PropTypes.string,
    agregarProducto: PropTypes.func
}

export default ProductsCard;
