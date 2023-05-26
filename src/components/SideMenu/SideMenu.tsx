import { Menu, MenuProps } from "antd";
import React from "react";
import { CgCoffee } from "react-icons/cg";
import { MdAppShortcut } from "react-icons/md";

import logo from "../../assets/logo.svg";
import { LogoSide, MenuWrapper } from "./style";
import { useRouter } from "next/router";
import {
  BellOutlined,
  CloudOutlined,
  MenuOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Главная", "/statistics", <CloudOutlined />),
  getItem("Товары", "/products", <CgCoffee />),
  getItem("Категории", "/categories", <MenuOutlined />),
  getItem("Блоги / статьи", "/blogs", <NotificationOutlined />),
  getItem("Приложение", "sub2", <MdAppShortcut />, [
    getItem("Рассылки", "/notifications", <BellOutlined />),
    getItem("Настройки", "/settings", <SettingOutlined />),
  ]),
];

const SideMenu = () => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <MenuWrapper>
      <LogoSide src={logo} alt={"logo"} />
      <Menu
        onClick={onClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={["0"]}
        mode="inline"
        items={items}
      />
    </MenuWrapper>
  );
};

export default SideMenu;
