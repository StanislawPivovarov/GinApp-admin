import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import style from './CarouselImages.module.scss'

interface CarouselProps {
    image: string
    delete: MouseEventHandler;
    edit: MouseEventHandler;
}

const CarouselImages = (props: CarouselProps) => {
    return(
        <div className={style.wrapper} >
            <Image className={style.cover} width={250} height={125} src={`${props.image}`} alt="image"/>
            <div className={style.buttonsWrapper}>
            <Button className={style.button} onClick={props.delete} type="default">Удалить <DeleteOutlined/></Button>
            <Button className={style.button} onClick={props.edit} type="default">Изменить <EditOutlined/></Button>
            </div>
            
        </div>
    )
}

export default CarouselImages;