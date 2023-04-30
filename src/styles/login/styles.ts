import styled from "styled-components";
import { Input, Button, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { KeyOutlined } from "@ant-design/icons";
import Logo from "@/components/Images/Logo";
import Image from "next/image";

export const Main = styled.div`
  background-color: #f4f5f0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media(min-width:992px){
    flex-direction: row;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media(min-width: 992px){
    flex-direction: row;
  }
`;

export const InputField = styled(Input)`
  border: 0.3px solid #4e4138;
  margin-top: 20px;
  width: 80%;
`;
export const Person = styled(UserOutlined)`
  color: #4e4138;
`;

export const Key = styled(KeyOutlined)`
  color: #4e4138;
`;

export const LoginButton = styled(Button)`
  background-color: #4e4138;
  color: #fff;
  width: 100px;
  margin-top: 20px;
`;

export const Logotype = styled(Logo)`
margin-bottom: 0px;
display: flex;
align-items: center;
width: 200px;
@media(min-width: 992px){
  margin-bottom: 0;
  width: 350px;
}
`;

export const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Right = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media(min-width: 992px){
  width: 500px;
}
`

export const Line = styled(Divider)`
height: 100px;
border-color: #4e4156;
@media(max-width: 991px){
  display: none;

}
`

export const HeaderText = styled.h2`
color: #4e4138;
@media(max-width: 991px){
  margin-top: 20px;
  margin-bottom: 20px;
}
`

export const Loader = styled(Image)`
animation-name: breath-animation;
animation-duration: 3s;
animation-iteration-count: infinite;
}
@keyframes breath-animation {
0% { height: 100px; width: 100px; }
30% { height: 200px; width: 200px; opacity: 0.5 }
40% { height: 205px; width: 205px; opacity: 0.3; }
100% { height: 100px; width: 100px; opacity: 0.6; }
}
`