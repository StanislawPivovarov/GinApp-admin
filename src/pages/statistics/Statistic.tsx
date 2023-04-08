import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, QRCode } from "antd";

const Statistic: NextPageWithLayout = () => {
    return (
        <Row justify={"center"}>
          <Col span={23}>
            <div>
              <h2 className="header-inner">Статистика</h2>
              <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </div>
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