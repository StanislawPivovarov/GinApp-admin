import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import ImageUpload from "../ImageUpload";

const ModalContent = () => {
  return (
    <Form>
      <Form.Item>
        <ImageUpload />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Название" required />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Описание" required />
      </Form.Item>
      <Form.Item>
        <Input style={{width: '30%'}} placeholder="Цена" suffix="₽" />
      </Form.Item>
    </Form>
  );
};

export default ModalContent;
