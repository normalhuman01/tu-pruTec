import { convertToSeparatedCapitalize } from "@/utils";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  const parts = router.asPath.slice(1).split("/");
  return (
    <div>
      <h1>{convertToSeparatedCapitalize(parts[parts.length - 1])}</h1>
      <div>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {!!index && <span>{` > `}</span>}
            <strong>{convertToSeparatedCapitalize(part)}</strong>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page;
