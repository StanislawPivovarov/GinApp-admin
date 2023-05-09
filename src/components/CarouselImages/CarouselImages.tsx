import React, { MouseEventHandler } from "react";
import { ButtonsWrapper, Cover, Delete, Wrapper } from "./style";
import Image from "next/image";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface CarouselProps {
    image: string
    delete: MouseEventHandler;
    edit: MouseEventHandler;
}

const CarouselImages = (props: CarouselProps) => {
    return(
        <Wrapper >
            <Cover width={250} height={125} src={`${props.image}`} alt="image"/>
            <ButtonsWrapper>
            <Delete onClick={props.delete} type="default">Удалить <DeleteOutlined/></Delete>
            <Delete onClick={props.edit} type="default">Изменить <EditOutlined/></Delete>
            </ButtonsWrapper>
            
        </Wrapper>
    )
}

export default CarouselImages;