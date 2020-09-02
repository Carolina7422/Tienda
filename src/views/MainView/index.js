import React from 'react';
import Card from '../../Components/UI/Cards/index'
import { CardContent } from './styles'
import { Layout } from 'antd'

const MainView = () => {


    return (
        <Layout>
            <CardContent>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContent>
        </Layout>

    );
}

export default MainView;