import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Tea: NextPageWithLayout = () => {
    return(
        <h2 className="header-inner">Готовый чай</h2>
    )
}

Tea.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Tea;