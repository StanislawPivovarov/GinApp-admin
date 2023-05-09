import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { Button } from "antd";
import { Category, Content, Cover, Description, Info, Name, Price, Wrapper } from "./style";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface ListProps {
  image: any;
  name: any;
  price: any;
  description: any;
  category: String;
  onClick: MouseEventHandler;
//   change: MouseEventHandler;
//   delete: MouseEventHandler;
}

const ListItem = (props: ListProps) => {
  return (
    <Wrapper>
      <Cover width={100} height={100} src={`${props.image}`} alt="logo" />
      <Content>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Content>
      <Info>
        <Category>{props.category}</Category>
        <Price>{props.price}₽</Price>
      </Info>
      <div>
        <Button type="link"><EditOutlined /> Изменить</Button>
        <Button type="link" onClick={props.onClick}><DeleteOutlined /> Удалить</Button>
      </div>
    </Wrapper>
  );
};

export default ListItem;
