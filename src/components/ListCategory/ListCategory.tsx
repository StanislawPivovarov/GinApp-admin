import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import styles from "./ListCategory.module.scss";
interface categoryProps {
  name: String;
  description: String;
  image: String;
  onClick: MouseEventHandler;
  edit: MouseEventHandler;
}

const onDelete = (values: any) => {
  console.log(values.id);
};

const ListCategory = (props: categoryProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.cover}
        src={`${props.image}`}
        alt="cover"
        width={100}
        height={100}
      />
      <div className={styles.content}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div>
        <Button onClick={props.edit} type="link">
          <EditOutlined /> Изменить
        </Button>
        <Button onClick={props.onClick} type="link">
          <DeleteOutlined /> Удалить
        </Button>
      </div>
    </div>
  );
};

export default ListCategory;
