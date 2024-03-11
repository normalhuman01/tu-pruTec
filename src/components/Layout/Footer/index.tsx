import { Isotipo } from "@/components/Isotipo";
import classes from "./style.module.css"

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Isotipo />
      <span>© 2023 Progrez All rights reserved</span>
      <Isotipo />
    </footer>
  );
};
