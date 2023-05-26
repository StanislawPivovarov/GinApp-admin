import React from "react";
import { Button } from "antd";
import { signOut } from "firebase/auth"
import { auth } from "@/auth/firebase";
import { useRouter } from "next/router";
import style from './Header.module.scss'
import { PoweroffOutlined } from "@ant-design/icons";

const Header = () => {
    const router = useRouter();
    const logout = () => {
        signOut(auth)
        .then(() => router.push("/"))
    }
    
    return(
        <div className={style.wrapper}>
            <p className={style.helloMessege}>Здравствуйте, <b>{auth.currentUser?.email}</b></p>
            <Button className={style.logout} onClick={logout}><PoweroffOutlined /> Выйти</Button>
        </div>
    )
}

export default Header;