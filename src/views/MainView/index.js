import React, { useState, useEffect } from 'react';
import Card from '../../Components/UI/Cards/index'
import { CardContent } from './styles'
import { Layout } from 'antd'
import products from '../../db.json'


const MainView = () => {




    return (
        <Layout>
            <CardContent>
                {
                    products.map(product => {
                        return (
                          <Card product={product}/>
                        )
                    })
                }
            </CardContent>
        </Layout>

    );
}

export default MainView;