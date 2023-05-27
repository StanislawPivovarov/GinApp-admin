import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import styles from "./ListItem.module.scss";

interface ListProps {
  image: any;
  name: any;
  price: any;
  description: any;
  category: String;
    edit: MouseEventHandler;
    delete: MouseEventHandler;
}

const ListItem = (props: ListProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.cover}
        width={100}
        height={100}
        src={`${props.image}`}
        alt="logo"
      />
      <div className={styles.content}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{props.category}</p>
        <p className={styles.price}>{props.price}₽</p>
      </div>
      <div>
        <Button type="link" onClick={props.edit}>
          <EditOutlined /> Изменить
        </Button>
        <Button type="link" onClick={props.delete}>
          <DeleteOutlined /> Удалить
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
