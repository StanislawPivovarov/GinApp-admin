import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const LeafTea: NextPageWithLayout = () => {
  return <h2 className="header-inner">Листовой чай</h2>;
};

LeafTea.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default LeafTea;
