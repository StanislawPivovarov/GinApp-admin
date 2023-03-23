import { Select } from "antd";
import React from "react";
import ModalsContent from "../ModalsContent";

const ModalAdd = () => {
  return (
    <>
      <ModalsContent />
      <Select
        placeholder="Категория"
        options={[
          { value: "jack", label: "Чай" },
          { value: "lucy", label: "Кофе" },
          { value: "Yiminghe", label: "Акскссуары" }
        ]}
      />
    </>
  );
};

export default ModalAdd;
