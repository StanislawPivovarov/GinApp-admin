import { Row, Col } from "antd";
import React from "react";
import { AdminLogo, Main } from "./style";
import Image from "next/image";

import logo from '@/assets/logo-admin.svg'

const Header = () => {

    return(
        <Main>
            <Row justify={'center'}>
                <Col span={23}>
                    <div>
                        <AdminLogo src={logo} alt={'logo'}/>
                    </div>
                </Col>
            </Row>

        </Main>
    )


}

export default Header;