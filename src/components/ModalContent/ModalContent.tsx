import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { ReactNode, useEffect, useState } from "react";
import ImageUpload from "../ImageUpload";
import { CATEGORIES } from "@/graphql/queries";
import { DocumentNode, useQuery } from "@apollo/client";

const ModalContent = () => {
  const { data, loading } = useQuery(CATEGORIES);
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [, forceUpdate] = useState({});
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <Form form={form}>
      <Form.Item>
        {/* <ImageUpload /> */}
        <Input placeholder="URL изображения" required />
      </Form.Item>
      <Form.Item required style={{ marginRight: "20px" }}>
        <Input placeholder="Название" required />
      </Form.Item>
      <Form.Item required style={{ marginRight: "20px" }}>
        <Input placeholder="Описание" required />
      </Form.Item>
      <Form.Item required style={{ width: "300px", marginRight: "20px" }}>
        <Select>
          {data?.category.map((category: any) => (
            <Select.Option value={category.id}>{category.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item required style={{ marginRight: "20px" }}>
        <Input placeholder="Цена" suffix="₽" />
      </Form.Item>
    </Form>
  );
};

export default ModalContent;
