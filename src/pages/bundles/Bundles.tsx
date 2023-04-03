import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Bundles: NextPageWithLayout = () => {
    return(
        <h2 className="header-inner">Наборы</h2>
    )
}

Bundles.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Bundles;