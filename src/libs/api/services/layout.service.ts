import { graphqlFetch } from "@/libs/api/client";
import {
  GET_NAV_MENU,
  GET_PRICE_HTML,
  GET_PAGE_HTML,
  GET_SIDEBARS,
  GET_FOOTER,
} from "@/libs/api/queries/layouts";
import { MenuItemResponse } from "@/libs/api/types/MenuItemResponse";
import { Page } from "@/libs/api/types/Page";

// get navigation menu for header
export async function getMenuItems(): Promise<MenuItemResponse[]> {
  const data = await graphqlFetch<any>(GET_NAV_MENU);

  return data.menuItems.nodes ?? null;
}

// get price-html for page 'bang-gia'
export async function getPriceHtml(): Promise<string> {
  const data = await graphqlFetch<any>(GET_PRICE_HTML);
  return data.page.pricingHtml ?? null;
}

//get page by slug
export async function getPageHtml(slug: string): Promise<Page> {
  const data = await graphqlFetch<any>(
    GET_PAGE_HTML,
    { slug },
    { cache: "force-cache" },
  );
  return data.page ?? null;
}

//get section
export async function getAddonWidget(
  widgets: string[],
): Promise<Record<string, string>> {
  const data = await graphqlFetch<any>(GET_SIDEBARS, {
    widgets,
  });

  const result: Record<string, string> = {};

  (data.sidebars ?? []).forEach((item: any) => {
    result[item.array_widget_classname] = item.html;
  });

  return result;
}

export async function getFooter(params?: string): Promise<string> {
  const data = await graphqlFetch<any>(GET_FOOTER);
  return data.footerHtml ?? "";
}
