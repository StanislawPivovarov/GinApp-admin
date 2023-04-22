import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, Avatar, List } from "antd";
import { success, fail } from "@/helpers/notifications";
import type { GetServerSideProps } from "next";
import request, { GraphQLClient, gql } from "graphql-request";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { CATEGORIES } from "@/graphql/queries";
import { client } from "@/graphql/client";
import ListItem from "@/components/ListItem";

const LeafTea: NextPageWithLayout = () => {
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

  const { data, loading } = useQuery(CATEGORIES);

  console.log({ data });

  return (
    <ApolloProvider {...{ client }}>
      <Row justify={"center"}>
        <Col span={23}>
          <div>
            <h2 className="header-inner">Листовой чай</h2>
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
          </div>
          <Modal
            title="Добавить чай"
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
          {data?.category.map((category: any) => (
            <div key={category.id}>
              <ListItem
               name={category.name}
               description={category.description}
               image={category.image}
               price={200}
               category={"ghbfffffffffkffkfkfkffkfkkfkfkfdtn"}
               />
            </div>
          ))}

          
        </Col>
      </Row>
    </ApolloProvider>
  );
};

LeafTea.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default LeafTea;
