import { Divider } from "antd";
import React from "react";
import Image from "next/image";
import edit from "../../assets/manual/edit.jpg";
import unedit from "../../assets/manual/noedit.png";
import enter from "../../assets/manual/enter.png";
import choose from "../../assets/manual/choose.png";
import upload from "../../assets/manual/upload.png";
import links from "../../assets/manual/links.png";
import modal from "../../assets/manual/modal.png";
const ModalInstructuion = () => {
  return (
    <>
      <h2>Загрузка изображений на хостинг postimages.org</h2>
      <Divider type="horizontal" />
      <h4>
        Прошу обратить ваше внимание, что в коде сайта предумотрена только
        загрузка на этот хостинг.
      </h4>
      <p>
        Для начала обрежьте фотографии в соотношении 1:1 или просто
        &quot;квадрат&quot;
      </p>
      <p>Делаем это для того, чтобы изображения не отображались растянутыми</p>
      <p>
        Ниже предоставлен пример, что будет если загрузить фотографии в
        оригинальном соотношении
      </p>
      <ul
        style={{
          listStyle: "none",
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Image height={250} width={250} src={edit} alt="edit" />
          <h5>Фото было ранее обрезано в соотношении 1:1</h5>
        </li>
        <li>
          <Image height={250} width={250} src={unedit} alt="unedit" />
          <h5>Фото было загружено в исходном разрешении</h5>
        </li>
      </ul>

      <p>
        После обработки переходим на сайт{" "}
        <a href="http://postimages.org" target="blank">
          PostImages{" "}
        </a>
        (ссылка откроется в новом окне)
      </p>
      <h4 style={{ marginTop: 20, marginBottom: 20 }}>
        1. Авторизируемся на сайте. Нажимаем &quot;Вход&quot;. Вводим данные
      </h4>
      <Image src={enter} width={500} alt="Вход" />
      <h4 style={{ marginTop: 20, marginBottom: 20 }}>
        2. Не изменяя настроек нажимаем &quot;Выберите изображения&quot;
      </h4>
      <Image src={choose} width={500} alt="Выбор" />
      <h4 style={{ marginTop: 20, marginBottom: 20 }}>
        3. Выбираем изображения
      </h4>
      <Image src={upload} width={500} alt="Выбор" />
      <h4 style={{ marginTop: 20, marginBottom: 20 }}>
        4. После загрузки на экране появлется большое количество ссылок.
        Копируем ту, которая подписана как &quot;Прямая ссылка&quot;
      </h4>
      <Image src={links} width={900} alt="Ссылка" />
      <h4 style={{ marginTop: 20, marginBottom: 20 }}>
        4. Вставить сссылку в поле URL
      </h4>
      <Image src={modal} width={900} alt="Ссылка" />
      <h4>
        <b>
          Эта интсрукция на первое время, в дальнейшем исправим ситуацию,
          добавив виджет загрузки изображений!
        </b>
      </h4>
    </>
  );
};

export default ModalInstructuion;
