import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, QRCode } from "antd";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "@/graphql/queries";

const Statistic: NextPageWithLayout = () => {
    return (
        <Row justify={"center"}>
          <Col span={23}>

          </Col>
        </Row>
      );
}

Statistic.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Statistic;