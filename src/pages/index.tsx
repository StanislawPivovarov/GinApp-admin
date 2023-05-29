import { Comfortaa, Ubuntu_Condensed } from "next/font/google";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { auth } from "../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import styles from "../styles/login/Login.module.scss";


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
    <div className={styles.main}>
      <div className={styles.left}>
        <Logotype />
      </div>
      <Line type="vertical" />
      <div className={styles.right}>
        <h2 className={styles.headerText}>Вход в админ-панель</h2>
        <Form className={styles.form} form={form} onFinish={(formdata) => onSave(formdata)}>
          <Form.Item name="email">
            <Input
              className={styles.inputField}
              prefix={<Person />}
              placeholder="Ваш логин"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              className={styles.inputField}
              prefix={<Key />}
              placeholder="Ваш пароль"
              type="password"
            />
          </Form.Item>
          <Form.Item className={styles.formItem}>
            <Button onClick={form.submit} className={styles.loginButton}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
