import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, Avatar, List } from "antd";
import { success, fail } from "@/helpers/notifications";

const Coffee: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const data = [
    {
      title: "Кофе 1",
    },
    {
      title: "Кофе 2",
    },
    {
      title: "Кофе 3",
    },
    {
      title: "Кофе 4",
    },
  ];

  return (
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Готовый кофе</h2>
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
              <ButtonText onClick={showModal}>Добавить кофе</ButtonText>
            </div>
          </AddButton>
          <Modal
            title="Добавить набор"
            open={isModalOpen}
            onOk={() => {
              handleOk(), success();
            }}
            okText={"Сохранить"}
            cancelText={"Отменить"}
            onCancel={() => {
              handleCancel(), fail();
            }}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item actions={[<a key="list-loadmore-edit">Изменить</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://joesch.moe/api/v1/random?key=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

Coffee.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Coffee;
