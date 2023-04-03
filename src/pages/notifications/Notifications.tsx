import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Notifications: NextPageWithLayout = () => {
    return(
        <h2 className="header-inner">Рассылки</h2>
    )
}

Notifications.getLayout = function getLayout(page: ReactElement) {
    return(
        <AdminPage>
            {page}
        </AdminPage>
    )
}

export default Notifications;