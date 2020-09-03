import React from 'react';
import products from '../../../db.json'
import Card from '../../../Components/UI/Cards'
import { CardContent } from './styles'
import { Layout } from 'antd'

const PhoneView = () => {
    return (
        <Layout>
            <CardContent>
                {
                    products
                        .filter(prod => prod.type === "phone")
                        .map(product => {

                            return (
                                <Card product={product} key={product.id} />
                            )
                        })
                }
            </CardContent>
        </Layout>
    );
}

export default PhoneView;