import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, notification, Avatar, List } from "antd";
import { fail, success } from "@/helpers/notifications";

const Bundles: NextPageWithLayout = () => {
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
      title: 'Набор 1',
    },
    {
      title: 'Набор 2',
    },
    {
      title: 'Набор 3',
    },
    {
      title: 'Набор 4',
    },
  ];

  
  return (
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Наборы</h2>
          <AddButton type="primary">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlusCircleOutlined style={{ marginRight: 10, fontSize: 15 }} />
              <ButtonText onClick={showModal}>Добавить набор</ButtonText>
            </div>
          </AddButton>
        </div>
        <Modal
          title="Добавить набор"
          open={isModalOpen}
          onOk={() => {handleOk(), success() }}
          okText={"Сохранить"}
          cancelText={"Отменить"}
          onCancel={() => {handleCancel(), fail()}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

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

Bundles.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Bundles;
