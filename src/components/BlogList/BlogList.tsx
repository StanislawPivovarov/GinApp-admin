import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from './BlogList.module.scss'

interface BlogProps {
    image: string;
    name: string;
    filling: string;
    onClick: MouseEventHandler;
    onEdit: MouseEventHandler;
}

const BlogList = (props: BlogProps) => {

  return (
    <div className={styles.wrapper}>
      <Image className={styles.cover} width={100} height={100} src={`${props.image}`} alt="image" />
      <div className={styles.content}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.filling}</p>
      </div>
      <div>
        <Button type="link" onClick={props.onEdit}><EditOutlined /> Изменить</Button>
        <Button type="link" onClick={props.onClick}><DeleteOutlined /> Удалить</Button>
      </div>
    </div>
  );
};

export default BlogList;
