import Image from "next/image";

export const Isotipo = () => {
  // return <Image src="/img/Isotipo.svg" height={20} width={140} alt="x" />;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="111"
      height="34"
      viewBox="0 0 111 34"
    >
      <text
        transform="translate(0 29)"
        fill="#fff"
        fontSize="18"
        font-family="GothamBold, Gotham"
      >
        <tspan x="0" y="0">
          Isotipo
        </tspan>
      </text>
    </svg>
  );
};
