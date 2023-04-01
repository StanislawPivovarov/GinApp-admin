import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Beans: NextPageWithLayout = () => {
    return(
        <h2>Кофейные зерна</h2>
    )
}

Beans.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Beans;