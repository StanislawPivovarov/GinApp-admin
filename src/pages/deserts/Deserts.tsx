import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Deserts: NextPageWithLayout = () => {
    return(
        <h2 className="header-inner">Десерты</h2>
    )
}

Deserts.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Deserts;