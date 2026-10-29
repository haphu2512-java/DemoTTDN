import { Suspense } from "react";
import { getMenuItems } from "@/libs/api/services/layout.service";
import { getSetting } from "@/libs/api/services/setting.service";
import HeaderView, { MenuItem } from "./HeaderView";
import { MenuItemResponse } from "@/libs/api/types/MenuItemResponse";

function buildMenuTree(items: MenuItemResponse[]): MenuItem[] {
  const parents = items.filter((x) => !x.parentId);

  return parents.map((parent) => ({
    ...parent,
    children: items
      .filter((x) => x.parentId === parent.id)
      .map((child) => ({ ...child, children: [] })),
  }));
}

export default async function Header() {
  "use cache";

  const menuItems = await getMenuItems();
  const setting = await getSetting();
  const menus = buildMenuTree(menuItems);

  return (
    <Suspense fallback={null}>
      <HeaderView menus={menus} logoUrl={setting?.logoUrl} />
    </Suspense>
  );
}
