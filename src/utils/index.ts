import { TServicesMenu, TMenu } from "@/types";
import services from "@/utils/servicio.json";

const servicesMenuData: TServicesMenu = services.lista;

export const convertToSeparatedCapitalize = (phrase: string) =>
  phrase
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const getMenu = (
  servicesMenu: TServicesMenu = servicesMenuData
): TMenu => {
  const recursive = (servicesMenu: TServicesMenu, prefix = ""): TMenu => {
    return servicesMenu
      .map((serviceMenuObj) =>
        Object.entries(serviceMenuObj).map(([key, value]) => {
          const href = prefix + "/" + key;
          const label = convertToSeparatedCapitalize(key);
          return {
            label,
            href,
            children: recursive(value, href),
          };
        })
      )
      .flat();
  };
  return recursive(servicesMenu);
};
