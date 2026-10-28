import { getMenuItems } from "@/libs/api/services/layout.service";
import { getSetting } from "@/libs/api/services/setting.service";
import HeaderView from "./HeaderView";

interface MenuItem {
  id: string;
  parentId: string | null;
  label: string;
  uri: string;
}

function buildMenuTree(items: MenuItem[]) {
  const parents = items.filter((x) => !x.parentId);

  return parents.map((parent) => ({
    ...parent,
    children: items.filter((x) => x.parentId === parent.id),
  }));
}

export default async function Header() {
  "use cache";

  const menuItems = await getMenuItems();
  const setting = await getSetting();
  const menus = buildMenuTree(menuItems);

  return <HeaderView menus={menus} logoUrl={setting?.logoUrl} />;
}

