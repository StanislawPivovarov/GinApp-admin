import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, Avatar, List, Table, Typography } from "antd";
import { success, fail } from "@/helpers/notifications";
import { useQuery } from "@apollo/client";
import { GET_TEA } from "@/queries/queries";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";

const Tea: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // type TeaResponseData = {
  //   tea: Teas[];
  // };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const {loading, error, data} = useQuery<TeaResponseData>(GET_TEA);

  // if(loading) return "Loading"
  // if(error) return `ERROR  ${error.message}`

  const data = [
    {
      title: 'Чай 1',
    },
    {
      title: 'Чай 2',
    },
    {
      title: 'Чай 3',
    },
    {
      title: 'Чай 4',
    },
  ];

  return (
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Готовый чай</h2>
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
              <ButtonText onClick={showModal}>Добавить чай</ButtonText>
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
      <List.Item
      actions={[<a key="list-loadmore-edit">Изменить</a>]}
      >
        <List.Item.Meta
          avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
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

Tea.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Tea;
