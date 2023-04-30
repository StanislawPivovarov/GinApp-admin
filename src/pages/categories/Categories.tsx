import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Col, Form, Input, Modal, Row } from "antd";
import { CATEGORIES } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import ListCategory from "@/components/ListCategory";
import { INSERT_CATEGORY } from "@/graphql/mutations";
import ModalInstructuion from "@/components/ModalInstruction";
import { success } from "@/helpers/notifications";
import { fail } from "assert";
import { Hosting } from "../deserts/styles";
import { Loader } from "@/styles/login/styles";
import logoanim from '../../assets/logo-animated.svg'

const Categories: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const [form] = Form.useForm();

  const onSave = (values: any) => {
    console.log(values);

    addCategory({
      variables: {
        cat: {
          name: values.name,
          id: values.id,
          description: values.description,
          image: values.image,
        },
      },
    });
  };

  

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

  const { data, loading } = useQuery(CATEGORIES);
  console.log(data);
  console.log(loading);
  const [addCategory, { data: mut, loading: loadmut, error: errmut }] =
    useMutation(INSERT_CATEGORY, {
      refetchQueries: [{ query: CATEGORIES }, "GET_DESERTS"],
    });
    if(loading) {
      return (
        <Loader style={{margin: "0 auto", display: 'flex'}} src={logoanim} alt=""/>
      )
    }
  return (
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Категории</h2>
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
              <ButtonText onClick={showModal}>Добавить категорию</ButtonText>
            </div>
          </AddButton>
        </div>
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
          <Hosting type="link" href="http://postimages.org" target="blank">Хостинг для загрузки</Hosting>
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
        {data?.category.map((category: any) => (
          <div key={category.id}>
            <ListCategory
              name={category.name}
              description={category.description}
              image={category.image}
            />
          </div>
        ))}
      </Col>
    </Row>
  );
};

Categories.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Categories;
