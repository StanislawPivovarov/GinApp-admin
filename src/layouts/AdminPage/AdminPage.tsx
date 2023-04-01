import SideMenu from '@/components/SideMenu';
import { Row, Col } from 'antd';
import React from 'react';
import Header from '@/components/Header';

const AdminPage = ({children}: any) => {
    return(
        <>
        <Row>
            <Col md={5} lg={3}>
                <SideMenu/>
            </Col>
            <Col span={18} lg={21}>
                <Header/>
                {children}
            </Col>
        </Row>
        </>
    )
}

export default AdminPage;