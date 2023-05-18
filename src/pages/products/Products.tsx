import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Modal,
  Avatar,
  List,
  Form,
  Input,
  Select,
  Button,
} from "antd";
import { success, fail } from "@/helpers/notifications";
import type { GetServerSideProps } from "next";
import request, { GraphQLClient, gql } from "graphql-request";
import { useMutation, useQuery } from "@apollo/client";
import { CATEGORIES, COFFEE, LEAF_TEA, PRODUCTS } from "@/graphql/queries";
import ListItem from "@/components/ListItem";
import { INSERT_PRODUCT, REMOVE_PRODUCT } from "@/graphql/mutations";
import ModalInstructuion from "@/components/ModalInstruction";
import logoanim from "../../assets/logo-animated.svg";
import { Loader } from "@/styles/login/styles";

const Products: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [form] = Form.useForm();
  const [isInstructionOpen, setInstructionOpen] = useState(false);

  const showInstruction = () => {
    setInstructionOpen(true);
  };

  const closeManual = () => {
    setInstructionOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const showUpdate = (values: any) => {
    setIsUpdateOpen(true);
    console.log(values);
  };

  const closeUpdate = () => {
    setIsUpdateOpen(false);
  };

  const { data, loading } = useQuery(PRODUCTS);
  const { data: category }: any = useQuery(CATEGORIES);
  console.log({ data });

  const [addProduct, { data: mut, loading: loadmut, error: errmut }] =
    useMutation(INSERT_PRODUCT, {
      refetchQueries: [{ query: PRODUCTS }, "GET_PRODUCTS"],
    });

  const [removeProduct, { data: rm, loading: rmload }] = useMutation(
    REMOVE_PRODUCT,
    {
      refetchQueries: [{ query: PRODUCTS }, "GET_PRODUCTS"],
    }
  );

  const onDelete = (values: any) => {
    console.log(values);
    removeProduct({
      variables: {
        product: values,
      },
    });
  };

  if (loading || loadmut || rmload) {
    return (
      <Loader
        style={{ margin: "0 auto", display: "flex" }}
        src={logoanim}
        alt=""
      />
    );
  }
  const onSave = (values: any) => {
    console.log(values);
    addProduct({
      variables: {
        product: {
          price: values.price,
          name: values.name,
          id: values.id,
          description: values.description,
          category: values.category,
          image: values.image,
        },
      },
    });
  };

  return (
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Товары</h2>
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
              <ButtonText onClick={showModal}>Добавить новый товар</ButtonText>
            </div>
          </AddButton>
        </div>
        <Modal
          title="Добавить набор"
          open={isModalOpen}
          onOk={() => {
            form.submit(), handleOk(), success();
          }}
          okText={"Сохранить"}
          cancelText={"Отменить"}
          onCancel={() => {
            handleCancel(), fail();
          }}
        >
          <Button type="link" href="http://postimages.org" target="blank">
            Хостинг для загрузки
          </Button>
          <Button type="link" onClick={showInstruction}>
            Инстркуция
          </Button>

          <Form form={form} onFinish={(formdata) => onSave(formdata)}>
            <Form.Item name="image">
              {/* <ImageUpload /> */}
              <Input placeholder="URL изображения" required />
            </Form.Item>

            <Form.Item name="name" required style={{ marginRight: "20px" }}>
              <Input placeholder="Название" required />
            </Form.Item>
            <Form.Item
              name="description"
              required
              style={{ marginRight: "20px" }}
            >
              <Input placeholder="Описание" required />
            </Form.Item>
            <Form.Item
              name="category"
              required
              style={{ width: "300px", marginRight: "20px" }}
            >
              <Select>
                {category?.category.map((category: any) => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="price" required style={{ marginRight: "20px" }}>
              <Input placeholder="Цена" suffix="₽" />
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          footer={null}
          closable
          onCancel={closeManual}
          open={isInstructionOpen}
          width={1000}
        >
          <ModalInstructuion />
        </Modal>
        <Modal
          title="Обновить продкут"
          open={isUpdateOpen}
          onOk={() => {
            form.submit(), handleOk(), success();
          }}
          okText={"Сохранить"}
          cancelText={"Отменить"}
          onCancel={() => {
            handleCancel(), fail();
          }}
        >
          <Form form={form} onFinish={(formdata) => onSave(formdata)}>
            <Form.Item name="image">
              {/* <ImageUpload /> */}
              <Input placeholder="URL изображения" required />
            </Form.Item>

            <Form.Item
              requiredMark
              name="name"
              required
              style={{ marginRight: "20px" }}
            >
              <Input placeholder="Название" required />
            </Form.Item>
            <Form.Item
              name="description"
              required
              style={{ marginRight: "20px" }}
            >
              <Input placeholder="Описание" required />
            </Form.Item>
            <Form.Item
              name="category"
              required
              style={{ width: "300px", marginRight: "20px" }}
            >
              <Select>
                {category?.category.map((category: any) => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="price" required style={{ marginRight: "20px" }}>
              <Input placeholder="Цена" suffix="₽" />
            </Form.Item>
          </Form>
        </Modal>
        {data?.product.map((product: any) => (
          <div key={product.id}>
            <ListItem
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.product_category.name}
              onClick={() => onDelete(product.id)}
            />
          </div>
        ))}
      </Col>
    </Row>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Products;
