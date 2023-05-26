import React from "react";
import Image from "next/image";

import logoanim from "../../assets/logo-animated.svg";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <Image className={styles.Loader} src={logoanim} alt="loader is here!" />
  );
};

export default Loader;