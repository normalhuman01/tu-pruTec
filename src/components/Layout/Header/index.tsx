import { Logo } from "@/components/Logo";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Account } from "./Account";
import classes from "./style.module.css";

export type THeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export const Header = ({ className }: THeaderProps) => {
  return (
    <header className={`${classes.header} ${className || ""}`}>
      <Logo />
      <Account />
    </header>
  );
};
