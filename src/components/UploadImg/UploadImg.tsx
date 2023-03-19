import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const UploadImg: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile>();


  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    // const image = new Image();
    // image.src = src;
    // const imgWindow = window.open(src);
    // imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop>
      <Upload
        name="avatar"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        onPreview={onPreview}
        maxCount={1}
      >
        {"Загрузить изображение"}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImg;
