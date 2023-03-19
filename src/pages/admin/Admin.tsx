import React, { useEffect, useState } from "react";
import { useToggle } from "ahooks";
import {
  Avatar,
  Button,
  Drawer,
  List,
  Modal,
  Popconfirm,
  Skeleton,
  message,
  Row,
  Col,
} from "antd";
import UploadImg from "@/components/UploadImg";
import logo from "@/assets/logo.svg";
import { BarsOutlined } from "@ant-design/icons";
import { CompanyName, HeadText, MenuItem, MenuItems } from "./styles";
import Content from "@/components/MainPage/Content";
import Image from "next/image";

const Admin = () => {
  const [open, { toggle: setIsOpen }] = useToggle();
  const [isShown, { toggle: setIsShown }] = useToggle();
  return (
    <div>
      <Row justify={"center"}>
        <Col xs={22}>
          <Row>
            <Col xs={5}>
              <Button style={{ zIndex: 10, marginTop: 20 }} onClick={setIsOpen}>
                <BarsOutlined />
              </Button>
            </Col>
            <Col xs={19}>
              <CompanyName>Ginitatov C.T.</CompanyName>
            </Col>
          </Row>
        </Col>
      </Row>

      <Drawer
        title="Basic Drawer"
        placement="top"
        onClose={setIsOpen}
        open={open}
        height={"100vh"}
        closable={false}
        zIndex={9}
        headerStyle={{ display: "none" }}
      >
        <div>
          <Row justify={"center"}>
            <Col xs={24}>
              <MenuItems>
                <MenuItem>Категории</MenuItem>
                <MenuItem>Кофе</MenuItem>
                <MenuItem>Чай</MenuItem>
                <MenuItem>Аксессуары</MenuItem>
                <MenuItem>Рассылка</MenuItem>
                <MenuItem>Настройки</MenuItem>
              </MenuItems>
            </Col>
          </Row>
        </div>
      </Drawer>

      <Row justify={"center"}>
        <Col xs={22}>
          <HeadText>Ваши товары</HeadText>

          <Content />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
