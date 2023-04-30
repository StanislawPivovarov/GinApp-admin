import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, Avatar, List, Form, Input, Select, Spin } from "antd";
import { success, fail } from "@/helpers/notifications";
import { BUNDLES, CATEGORIES, COFFEE } from "@/graphql/queries";
import ListItem from "@/components/ListItem";
import { useMutation, useQuery } from "@apollo/client";
import { INSERT_BUNDLE, INSERT_COFFEE } from "@/graphql/mutations";
import ModalInstructuion from "@/components/ModalInstruction";
import { Hosting } from "../deserts/styles";
import Image from "next/image";
import logoanim from '../../assets/logo-animated.svg'
import { Loader } from "@/styles/login/styles";

const Coffee: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const [form] = Form.useForm();
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
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data, loading } = useQuery(COFFEE);
  console.log(data);
  console.log(loading);
  const { data: category } = useQuery(CATEGORIES);
  const [addCoffee, { data: mut, loading: loadmut, error: errmut }] =
    useMutation(INSERT_COFFEE, {
      refetchQueries: [{ query: COFFEE }, "GET_COFFEE"],
    });
if(loading) {
  return (
    <Loader style={{margin: "0 auto", display: 'flex'}} src={logoanim} alt=""/>
  )
}
  const onSave = (values: any) => {
    console.log(values);

    addCoffee({
      variables: {
        coffee: {
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
            form.submit(),
            handleOk(),
            success()
          }}
          okText={"Сохранить"}
          cancelText={"Отменить"}
          onCancel={() => {
            handleCancel(), fail();
          }}
          
        >
          <Hosting type="link">Хостинг для загрузки</Hosting>
          <Hosting type="link" onClick={showInstruction}>Инстркуция</Hosting>

          <Form form={form} onFinish={(formdata) => onSave(formdata)}>
            <Form.Item name="image">
              {/* <ImageUpload /> */}
              <Input  placeholder="URL изображения" required />
            </Form.Item>
            
            <Form.Item name="name" required style={{ marginRight: "20px" }}>
              <Input placeholder="Название" required />
            </Form.Item>
            <Form.Item name="description" required style={{ marginRight: "20px" }}>
              <Input placeholder="Описание" required />
            </Form.Item>
            <Form.Item name="category" required style={{ width: "300px", marginRight: "20px" }}>
              <Select>
                {category?.category.map((category: any) => (
                  <Select.Option value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="price"  required style={{ marginRight: "20px" }}>
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
          <ModalInstructuion/>
        </Modal>
        </div>
        {data?.coffee.map((coffee: any) => (
          <div key={coffee.id}>
            <ListItem
              name={coffee.name}
              description={coffee.description}
              image={coffee.image}
              price={coffee.price}
              category={coffee.category}
            />
          </div>
        ))}
      </Col>
    </Row>
  );
};

Coffee.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Coffee;
