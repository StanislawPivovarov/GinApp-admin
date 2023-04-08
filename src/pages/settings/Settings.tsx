import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const Settings: NextPageWithLayout = () => {
    return (
        <Row justify={"center"}>
          <Col span={23}>
            <div>
              <h2 className="header-inner">Настройки приложения</h2>
            </div>
          </Col>
        </Row>
      );
}

Settings.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Settings;