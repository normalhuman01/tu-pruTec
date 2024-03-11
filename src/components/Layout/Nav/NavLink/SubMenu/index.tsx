import { TLinkMenu } from "@/types";
import { default as NextLink } from "next/link";
import classes from "./style.module.css";

const Link = ({ label, href }: TLinkMenu) => {
  return (
    <NextLink href={href} className={classes.link}>
      {label}
    </NextLink>
  );
};

export type TSubMenuProps = {
  links: TLinkMenu[];
};

export const SubMenu = ({ links }: TSubMenuProps) => {
  return (
    <>
      <ul className={classes.ul}>
        {links.map((link, index) => (
          <Link {...link} key={index} />
        ))}
        <div className={classes.divider}></div>
      </ul>
    </>
  );
};
