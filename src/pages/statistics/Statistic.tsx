import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Statistic: NextPageWithLayout = () => {
    return(
        <h2>Статистика</h2>
    )
}

Statistic.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Statistic;