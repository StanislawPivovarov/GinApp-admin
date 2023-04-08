import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const Notifications: NextPageWithLayout = () => {
    return (
        <Row justify={"center"}>
          <Col span={23}>
            <div>
              <h2 className="header-inner">Рассылки</h2>
              <AddButton>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlusCircleOutlined style={{ marginRight: 10, fontSize: 15 }} />
                  <ButtonText>Новая рассылка</ButtonText>
                </div>
              </AddButton>
            </div>
          </Col>
        </Row>
      );
}

Notifications.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Notifications;