import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Content, Cover, Description, Name, Wrapper } from "./style";

interface categoryProps {
  name: String;
  description: String;
  image: String;
//   edit: MouseEventHandler;
//   delete: MouseEventHandler;
}

const ListCategory = (props: categoryProps) => {
  return (
    <Wrapper>
      <Cover src={`${props.image}`} alt="cover" width={100} height={100} />
      <Content>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Content>
      <div>
        <Button type="link">
          <EditOutlined /> Изменить
        </Button>
        <Button type="link">
          <DeleteOutlined /> Удалить
        </Button>
      </div>
    </Wrapper>
  );
};

export default ListCategory;