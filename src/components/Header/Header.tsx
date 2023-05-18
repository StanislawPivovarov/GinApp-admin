import React from "react";
import { HeaderWrapper } from "./style";
import { Button } from "antd";
import { signOut } from "firebase/auth"
import { auth } from "@/auth/firebase";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const logout = () => {
        signOut(auth)
        .then(() => router.push("/"))
    }
    return(
        <HeaderWrapper>
            <Button onClick={logout}>Выйти</Button>
        </HeaderWrapper>
    )
}

export default Header;