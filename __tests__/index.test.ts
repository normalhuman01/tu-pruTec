import { TServicesMenu } from "@/types";
import { getMenu } from "@/utils";
import servicesMenu from "@/utils/servicio.json";

describe("utils", () => {
  it("convert serviceObjectMenu to menu links", () => {
    const result = getMenu(servicesMenu.lista as unknown as TServicesMenu);
    const mustBe = [
      {
        label: "Card List",
        href: "/card_list",
        children: [],
      },
      {
        label: "Pays Transfer",
        href: "/pays_transfer",
        children: [
          {
            label: "Between Cards",
            href: "/pays_transfer/between_cards",
            children: [],
          },
          {
            label: "Banks",
            href: "/pays_transfer/banks",
            children: [],
          },
          {
            label: "Credit Card",
            href: "/pays_transfer/credit_card",
            children: [],
          },
        ],
      },
      {
        label: "Support",
        href: "/support",
        children: [
          {
            label: "Lock",
            href: "/support/lock",
            children: [],
          },
          {
            label: "Change Pass",
            href: "/support/change_pass",
            children: [],
          },
        ],
      },
      {
        label: "Enterprises",
        href: "/enterprises",
        children: [],
      },
    ];
    expect(result).toEqual(expect.objectContaining(mustBe));
  });
});
