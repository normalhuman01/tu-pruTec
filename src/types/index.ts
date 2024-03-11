export type TServicesMenu = {
  [key: string]: TServicesMenu;
}[];

export type TLinkMenu = {
  href: string;
  label: string;
  children: TMenu;
};

export type TMenu = TLinkMenu[];
