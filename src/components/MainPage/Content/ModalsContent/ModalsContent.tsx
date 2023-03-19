import React, { useState } from "react";
import { Divider, Input, message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { Footnote } from "./styles";
import TextArea from "antd/es/input/TextArea";

const ModalsContent = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Вы можете загрузить только PNG и JPG');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Вес изображение должен быть меньше 2мб');
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <div>
      <div>
        <ImgCrop>
          <Upload
            maxCount={1}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            beforeUpload={beforeUpload}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
        <Footnote>
          * К загрузке разрешены файлы размером до 2mb бла бла бла
        </Footnote>
        <Divider />
        <Input placeholder="Название" style={{marginBottom: 20}}/>
        <TextArea placeholder="Описание" style={{marginBottom: 20}} />
        <Input prefix="₽" suffix="RUB" style={{marginBottom: 20}} />
      </div>
    </div>
  );
};

export default ModalsContent;
