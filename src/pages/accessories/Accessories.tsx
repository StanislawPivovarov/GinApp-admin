import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Accessories: NextPageWithLayout = () => {
  return (
    <>
      <h2 className="header-inner">Аксессуары</h2>
    </>
  );
};

Accessories.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Accessories;
