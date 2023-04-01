import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Coffee: NextPageWithLayout = () => {
    return(
        <h2>Готовый кофе</h2>
    )
}

Coffee.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Coffee;