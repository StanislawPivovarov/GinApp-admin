import Head from "next/head";
import Image from "next/image";
import { Comfortaa, Ubuntu_Condensed } from "next/font/google";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Admin from "./admin";
import Statistic from "./statistics";
import AdminPage from "@/layouts/AdminPage";
import StartPage from "@/layouts/StartPage";
import { auth } from "../auth/firebase";
import { AuthProvider, signInWithEmailAndPassword } from "firebase/auth";
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
} from "../styles/login/styles";
import { Form } from "antd";
import { error } from "console";
import { useRouter } from "next/router";

const comfortaa = Comfortaa({
  weight: "400",
  subsets: ["latin"],
});

const client = new ApolloClient({
  uri: `${process.env.ENTRY_POINT}`,
  cache: new InMemoryCache(),
});

export default function Home() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onSave = (values: any) => {
    console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => router.push("/statistics"))
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password" || "auth/user-not-found":
            alert("Проверьте правильность данных");
        }
      });
  };
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
        <Form form={form} onFinish={(formdata) => onSave(formdata)}>
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
            <LoginButton
              onClick={form.submit}
              className={comfortaa.className}
            >
              Войти
            </LoginButton>
          </Form.Item>
        </Form>
      </Right>
    </Main>
  );
}
