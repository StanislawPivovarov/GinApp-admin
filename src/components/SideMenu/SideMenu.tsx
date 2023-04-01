import { Menu, MenuProps } from "antd";
import React from "react";
import { CgCoffee } from "react-icons/cg";
import { MdAppShortcut } from "react-icons/md";
import Image from "next/image";

import logo from "../../assets/logo.svg";
import { LogoSide, MenuWrapper } from "./style";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "@/pages/admin";
import LeafTea from "@/pages/leaf-tea";
import Tea from "@/pages/tea";
import Beans from "@/pages/beans";
import Coffee from "@/pages/coffee";
import Accessories from "@/pages/accessories";
import Deserts from "@/pages/deserts";
import Bundles from "@/pages/bundles";
import Notifications from "@/pages/notifications";
import Settings from "@/pages/settings";
import { useRouter } from "next/router";

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
  getItem("Статистика", "/statistics"),
  getItem("Товары", "sub1", <CgCoffee />, [
    getItem("Чай", "g1", null, [
      getItem("Листовой чай", "/leaf-tea"),
      getItem("Готовый чай", "/tea"),
    ]),
    getItem("Кофе", "g2", null, [
      getItem("Зерна", "/beans"),
      getItem("Готовый кофе", "/coffee"),
    ]),
    getItem("Десерты", "/deserts"),
    getItem("Аксессуары", "/accessories"),
    getItem("Наборы", "/bundles"),
  ]),
  getItem("Приложение", "sub2", <MdAppShortcut />, [
    getItem("Рассылки", "/notifications"),
    getItem("Настройки", "/settings"),
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
