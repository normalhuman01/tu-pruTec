import { SubMenu } from "./SubMenu";
import { default as NextLink } from "next/link";
import { TLinkMenu } from "@/types";
import classes from "./style.module.css";

export const NavLink = ({ label, children, href }: TLinkMenu) => {
  return (
    <li className={classes.li}>
      <NextLink className={classes.link} href={href}>
        {label}
      </NextLink>
      <SubMenu links={children} />
    </li>
  );
};
