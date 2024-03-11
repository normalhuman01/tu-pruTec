import { getMenu } from "@/utils";
import classes from "./style.module.css";
import { NavLink } from "./NavLink";

const menu = getMenu();

export const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {menu.map((linkData, index) => (
          <NavLink {...linkData} key={index} />
        ))}
      </ul>
    </nav>
  );
};
