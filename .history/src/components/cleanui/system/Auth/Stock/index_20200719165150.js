import React from 'react'
import { Helmet } from 'react-helmet'
import { Card } from 'antd';

const { Meta } = Card;




const stockBoard = () => {
    return (
        <div style={{marginLeft: '-120%'}}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            ></Card>
                <Meta title="Europe Street beat" description="www.instagram.com" />


        </div>

    )
}

export default stockBoard