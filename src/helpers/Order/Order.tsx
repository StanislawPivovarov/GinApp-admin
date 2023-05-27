import { InfoCircleOutlined } from "@ant-design/icons";
import { Divider, Modal, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import axios from "axios";

const title = () => {
    const time = new Date()
    var day = time.getDay()
    const month = time.getMonth()
    const year = time.getFullYear()
    return (
        <>
            <h4>Заказ №122934</h4>
            <Tag icon={<InfoCircleOutlined />} color="green">от {day+"."+month+"."+year}</Tag>
        </>


    )
}

interface props {
    coordinates: any
}
const Shipping = (props: props) => {

    return (
        <YMaps
            query={{
                ns: "use-load-option",
                apikey: "9440f975-6e8c-4e36-9e6f-2dcdfb5b50bf",
                load: ""
            }}
        >
            <Map
            width={"100%"}
            height={"300px"}
            defaultState={{ center: props.coordinates, zoom: 17 }} 
            >
                <Placemark geometry={props.coordinates}/>
            </Map>
        </YMaps>

    )
}

const Order = () => {

    const tel = "+79555067059";
    const adressb4 = "Казань, Карла Маркса, 5, офис 114"
    const adress = adressb4.replaceAll(" ", "+")
    console.log(adress)
    const geocode = `https://geocode-maps.yandex.ru/1.x/?apikey=9440f975-6e8c-4e36-9e6f-2dcdfb5b50bf&format=json&geocode=${adress}`
    console.log(geocode);

        //пока загрузку оставить, по сути должен быть доступ через мобильное приложение!
        // useEffect(() => {
        //     async function getGeo() {
        //         await axios.get(geocode).then((response: any) => {
        //             setMap(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
        //         })
        //     }
        //     getGeo();
        // }, [])
    return (
        <Modal
            open={true}
            title={title()}
        >
            <Divider />
            <h4>Клиент</h4>
            <p>Имя: Евгений</p>
            <p>Номер телефона: <a href={"tel:" + tel}>{tel}</a></p>
            <p style={{marginBottom: 20}}>Адрес доставки: {adressb4}
            </p>
            <Shipping coordinates={[55.797655, 49.111382]}/>
        </Modal>
    )
}

export default Order;