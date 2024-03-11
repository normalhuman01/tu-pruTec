import Image from "next/image";
import classes from "./style.module.css";

export const Account = () => {
  return (
    <div className={classes.container}>
      <span>Nombre Usuario</span>
      <Image src="/img/Arrow Down.svg" width={16} height={8} alt="Show account options" />
    </div>
  );
};
