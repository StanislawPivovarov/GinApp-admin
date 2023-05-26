import ListItem from "@/components/ListItem";
import ModalInstructuion from "@/components/ModalInstruction";
import {
  INSERT_BLOG,
  INSERT_PRODUCT,
  REMOVE_BLOG,
  REMOVE_PRODUCT,
  UPDATE_BLOG,
} from "@/graphql/mutations";
import { PRODUCTS, CATEGORIES, BLOGS } from "@/graphql/queries";
import { success } from "@/helpers/notifications";
import { AddButton, ButtonText } from "@/styles/global";
import { Loader } from "@/styles/login/styles";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useQuery, useMutation } from "@apollo/client";
import { Row, Col, Modal, Button, Form, Input, Select } from "antd";
import form from "antd/es/form";
import { fail } from "@/helpers/notifications";
import React, { ReactElement, useEffect, useState } from "react";
import logoanim from "../../assets/logo-animated.svg";
import AdminPage from "@/layouts/AdminPage";
import { NextPageWithLayout } from "../_app";
import BlogList from "@/components/BlogList";
import { CgDisplaySpacing, CgLayoutGrid } from "react-icons/cg";
import PrivateRoute from "@/auth/PrivateRouter";

const Blogs: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [form] = Form.useForm();
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const { TextArea } = Input;
  const [datas, setDatas] = useState({id: '', name: "", filling: '', image: ''});
  useEffect(() => {
    form.setFieldsValue(datas)
   }, [form, datas])
   
  
console.log('QWE', datas)
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

  const showUpdate = () => {
    setIsUpdateOpen(true);
    console.log(data);
  };

  const closeUpdate = () => {
    setIsUpdateOpen(false);
  };

  const { data, loading } = useQuery(BLOGS);

  const [addBlog, { data: mut, loading: loadmut, error: errmut }] = useMutation(
    INSERT_BLOG,
    {
      refetchQueries: [{ query: BLOGS }, "GET_PRODUCTS"],
    }
  );

  const [removeBlog, { data: rm, loading: rmload }] = useMutation(REMOVE_BLOG, {
    refetchQueries: [{ query: BLOGS }, "RM_BLOG"],
  });

  const [updateBlog, { data: updBlog, loading: loadBlog }] = useMutation(
    UPDATE_BLOG,
    {
      refetchQueries: [{ query: BLOGS }, "UPD_BLOG"],
    }
  );

  const onDelete = (values: any) => {
    console.log(values);
    removeBlog({
      variables: {
        blog: values,
      },
    });
  };

  const UpdateModal = (values: any) => {
    setDatas(values);
    console.log(datas)
    setIsUpdateOpen(true);
    
  };

  const onUpdate = (values: any) => {
    console.log(values);
    updateBlog({
      variables: {
        id: values.id,
        blog: values,
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
    addBlog({
      variables: {
        blog: {
          name: values.name,
          id: values.id,
          filling: values.filling,
          image: values.image,
        },
      },
    });
  };

console.log(data)
  return (
    <PrivateRoute>
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Блоги</h2>
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
              <ButtonText onClick={showModal}>Добавить новую статю</ButtonText>
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
              <Input placeholder="URL изображения" required />
            </Form.Item>

            <Form.Item name="name" required style={{ marginRight: "20px" }}>
              <Input placeholder="Название" required />
            </Form.Item>
            <Form.Item name="filling" required style={{ marginRight: "20px" }}>
              <TextArea rows={4} placeholder="Статья" required />
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
        title={"Обновить " + datas.name}
        open={isUpdateOpen}
        onOk={() => {
          form.submit(), handleOk(), success();
        }}
        okText={"Сохранить"}
        cancelText={"Отменить"}
        onCancel={() => {
          setDatas({id: '', name: '', filling: '', image: ''})
          closeUpdate(),
          fail()
        }}
      >
        <Form
          form={form}
          initialValues={datas}
          onFinish={(formdata) => onUpdate(formdata)}
        >
          <Form.Item name="id">
            <Input placeholder="id" disabled />
          </Form.Item>
          <Form.Item name="image">
            <Input placeholder="URL изображения" required />
          </Form.Item>

          <Form.Item
            requiredMark
            name="name"
            required
            // initialValue={data.name}
            style={{ marginRight: "20px" }}
          >
            <Input placeholder="Название" required />
          </Form.Item>
          <Form.Item
            name="filling"
            required
            style={{ marginRight: "20px" }}
           //  initialValue={data.filling}
          >
            <TextArea rows={4} placeholder="Статья" required />
          </Form.Item>
        </Form>
      </Modal>
        {data?.blog.map((blog: any) => (
          <div key={blog.id}>
            <BlogList
              onClick={() => onDelete(blog.id)}
              image={blog.image}
              filling={blog.filling}
              name={blog.name}
              onEdit={() => UpdateModal(blog)}
            />
          </div>
        ))}
        
      </Col>
    </Row>
    </PrivateRoute>
  );
};
Blogs.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Blogs;
