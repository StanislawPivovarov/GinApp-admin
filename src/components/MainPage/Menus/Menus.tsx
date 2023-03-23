import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { MenuWrapper } from "./styles";

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
  getItem("Кофе", "sub1", <div></div>, [
    getItem("Товары", "1"),
    getItem("Категории", "2"),
  ]),

  getItem("Чай", "sub2", <div></div>, [
    getItem("Товары", "3"),
    getItem("Категории", "4"),
  ]),

  getItem("Приложение", "sub3", <div></div>, [
    getItem("Статистика приложения", "5"),
    getItem("Обновление контента", "6"),
    getItem("Рассылки", "7"),
  ]),

  getItem("Админ-панель", "grp", null, [getItem("Выход", "8")]),
];
const Menus = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <MenuWrapper>
      <Menu
        onClick={onClick}
        style={{ width: '100%', background: 'none' , border: 'none'}}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </MenuWrapper>
  );
};

export default Menus;
