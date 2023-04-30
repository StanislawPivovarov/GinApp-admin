import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, Avatar, List, Form, Input, Select, Button } from "antd";
import { success, fail } from "@/helpers/notifications";
import { BEANS, CATEGORIES, DESERTS } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import ListItem from "@/components/ListItem";
import ModalContent from "@/components/ModalContent";
import form from "antd/es/form";
import { INSERT_DESERT } from "@/graphql/mutations";
import { Hosting } from "./styles";
import ModalInstructuion from "@/components/ModalInstruction";
import logoanim from '../../assets/logo-animated.svg'
import { Loader } from "@/styles/login/styles";

const Deserts: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const showInstruction = () => {
    setInstructionOpen(true);
  }

  const closeManual = () => {
    setInstructionOpen(false);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSave = (values: any) => {
    console.log(values);
 
    addDesert(
     { variables: {
        deserts: {
          price: values.price,
          name: values.name,
          id: values.id,
          description: values.description,
          category: values.category,
          image: values.image
        }
      },}


    );
  };


  const { data, loading } = useQuery(DESERTS);
  const {data: category} = useQuery(CATEGORIES);
  const [addDesert, { data:mut, loading:loadmut, error:errmut }] = useMutation(INSERT_DESERT, {
    refetchQueries: [
      {query: DESERTS},
      'GET_DESERTS'
    ]
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
          <h2 className="header-inner">Десерты</h2>
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
              <ButtonText onClick={showModal}>Добавить десерт</ButtonText>
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
        {data?.deserts.map((deserts: any) => (
          <div key={deserts.id}>
            <ListItem
              name={deserts.name}
              description={deserts.description}
              image={deserts.image}
              price={deserts.price}
              category={deserts.category}
            />
          </div>
        ))}
      </Col>
    </Row>
  );
};

Deserts.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Deserts;
