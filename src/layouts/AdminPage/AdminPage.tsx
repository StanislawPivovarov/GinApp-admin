import SideMenu from '@/components/SideMenu';
import { Row, Col } from 'antd';
import React from 'react';
import Header from '@/components/Header';
import PrivateRoute from '@/auth/PrivateRouter';

const AdminPage = ({children}: any) => {
    return(
        <PrivateRoute>
        <Row>
            <Col md={5} lg={4}>
                <SideMenu/>
            </Col>
            <Col span={18} lg={20}>
                <Header/>
                {children}
            </Col>
        </Row>
        </PrivateRoute>
    )
}

export default AdminPage;