import React, { MouseEventHandler } from "react";
import { Content, Cover, Description, Name, Wrapper } from "./style";
import Image from "next/image";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";


interface BlogProps {
    image: string;
    name: string;
    filling: string;
    onClick: MouseEventHandler;
    onEdit: MouseEventHandler;
}

const BlogList = (props: BlogProps) => {

  return (
    <Wrapper>
      <Cover width={100} height={100} src={`${props.image}`} alt="image" />
      <Content>
        <Name>{props.name}</Name>
        <Description>{props.filling}</Description>
      </Content>
      <div>
        <Button type="link" onClick={props.onEdit}><EditOutlined /> Изменить</Button>
        <Button type="link" onClick={props.onClick}><DeleteOutlined /> Удалить</Button>
      </div>
    </Wrapper>
  );
};

export default BlogList;
