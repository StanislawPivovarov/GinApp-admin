import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Settings: NextPageWithLayout = () => {
    return(
        <h2 className="header-inner">Настройки</h2>
    )
}

Settings.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Settings;