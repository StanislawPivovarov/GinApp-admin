import SideMenu from '@/components/SideMenu';
import { Row, Col, Button } from 'antd';
import React from 'react';
import Header from '@/components/Header';
import PrivateRoute from '@/auth/PrivateRouter';
import Order from '@/helpers/Order';
import { newOrder } from '@/helpers/notifications';

const AdminPage = ({children}: any) => {
    return(
        <PrivateRoute>
        <Row>
            <Col md={5} lg={4}>
                <SideMenu/>
            </Col>
            <Col span={18} lg={20}>
                <Header/>
                {/* <Order/> */}
                {children}
            </Col>
        </Row>
        </PrivateRoute>
    )
}

export default AdminPage;