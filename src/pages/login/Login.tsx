import React from "react";
import {
  Content,
  HeaderText,
  InputField,
  Key,
  Left,
  Line,
  LoginButton,
  Logotype,
  Main,
  Person,
  Right,
} from "./styles";
import { Col, Divider, Input, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Logo from "@/components/Images/Logo";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  weight: "400",
  subsets: ["latin"],
});

const Login = () => {
  return (
    <Main>
      <Left>
        <Logotype />
      </Left>
      <Line type="vertical" />
      <Right>
        <HeaderText className={comfortaa.className}>
          Вход в админ-панель
        </HeaderText>
        <InputField prefix={<Person />} placeholder="Ваш логин" />
        <InputField prefix={<Key />} placeholder="Ваш пароль" type="password" />
        <LoginButton className={comfortaa.className}>Войти</LoginButton>
      </Right>
    </Main>
  );
};

export default Login;
