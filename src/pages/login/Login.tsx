import React, { ReactElement } from "react";
import {
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
} from "../../styles/login/styles";
import { Comfortaa } from "next/font/google";
import StartPage from "@/layouts/StartPage";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import { Form } from "antd";

const comfortaa = Comfortaa({
  weight: "400",
  subsets: ["latin"],
});

const Login: NextPageWithLayout = () => {
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
        <Form>
          <Form.Item name="email">
            <InputField prefix={<Person />} placeholder="Ваш логин" />
          </Form.Item>
          <Form.Item name="password">
            <InputField
              prefix={<Key />}
              placeholder="Ваш пароль"
              type="password"
            />
          </Form.Item>
          <Form.Item>
          <LoginButton className={comfortaa.className}>Войти</LoginButton>
          </Form.Item>
        </Form>

       
      </Right>
    </Main>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <StartPage>{page}</StartPage>;
};

export default Login;
