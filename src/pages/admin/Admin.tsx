import React from "react";
import { useToggle } from "ahooks";
import { Button, Row, Col } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { CompanyName } from "./styles";
import Content from "@/components/MainPage/Content";
import Header from "@/components/MainPage/Header";
import Menus from "@/components/MainPage/Menus";

const Admin = () => {
  const [open, { toggle: setIsOpen }] = useToggle();
  return (
    <div>
      <Header />
      <Row justify={"start"}>
        <Col lg={4}>
          <Menus />
        </Col>
        <Col xs={19}>
          <Content />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
