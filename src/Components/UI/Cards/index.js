import React from 'react';
import {ProductCard, Button} from './styles'

const ProductsCard= () => {
    return (
        <ProductCard
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <Button>Agregar</Button>
              ]}
            
            >

        </ProductCard>
    );
}

export default ProductsCard;