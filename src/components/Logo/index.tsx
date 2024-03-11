import classes from "./style.module.css";
import { useRouter } from "next/router";

export const Logo = () => {
  const router = useRouter();
  return (
    <svg
      onClick={() => router.push("/")}
      xmlns="http://www.w3.org/2000/svg"
      width="159"
      height="34"
      viewBox="0 0 159 34"
    >
      <defs></defs>
      <text className={classes.text} transform="translate(0 29)">
        <tspan x="0" y="0">
          Tu PruTec
        </tspan>
      </text>
    </svg>
  );
};
