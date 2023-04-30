import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Modal, notification, Avatar, List, Form, Input, Select } from "antd";
import { fail, success } from "@/helpers/notifications";
import { useMutation, useQuery } from "@apollo/client";
import { BEANS, BUNDLES, CATEGORIES } from "@/graphql/queries";
import ListItem from "@/components/ListItem";
import { INSERT_BUNDLE, INSERT_DESERT } from "@/graphql/mutations";
import ModalInstructuion from "@/components/ModalInstruction";
import form from "antd/es/form";
import { Hosting } from "../deserts/styles";
import logoanim from '../../assets/logo-animated.svg'
import { Loader } from "@/styles/login/styles";

const Bundles: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const [form] = Form.useForm();

  const showInstruction = () => {
    setInstructionOpen(true);
  }

  const closeManual = () => {
    setInstructionOpen(false);
  }
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data, loading } = useQuery(BUNDLES);
  const {data: category} = useQuery(CATEGORIES);
  const [addBundle, { data:mut, loading:loadmut, error:errmut }] = useMutation(INSERT_BUNDLE, {
    refetchQueries: [
      {query: BUNDLES},
      'GET_BUNDLES'
    ]
  });

  console.log(data)

  
  const onSave = (values: any) => {
    console.log(values);
 
    addBundle(
     { variables: {
        bundle: {
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

  if(loading) {
    return (
      <Loader style={{margin: "0 auto", display: 'flex'}} src={logoanim} alt=""/>
    )
  }

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
        {data?.bundles.map((bundles: any) => (
          <div key={bundles.id}>
            <ListItem
              name={bundles.name}
              description={bundles.description}
              image={bundles.image}
              price={bundles.price}
              category={bundles.category}
            />
          </div>
        ))}
      </Col>
    </Row>
  );
};

Bundles.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Bundles;
