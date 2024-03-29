import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { Col, Row } from 'antd';
import React from 'react'

const Admin = () => {
    return(
        <>
        <Row>
            <Col md={5} lg={3}>
                <SideMenu/>
            </Col>
            <Col span={18} lg={21}>
                <Header/>
            </Col>
        </Row>
        </>
    )
}

export default Admin;