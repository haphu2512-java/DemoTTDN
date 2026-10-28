export const GET_NAV_MENU = `
query GetNavMenu {
  menuItems(first: 30) {
    nodes {
      id
      parentId
      label
      uri
    }
  }
}
`;

export const GET_PRICE_HTML = `query GetPriceHTML {
  page(id: "bang-gia", idType: URI) {
    title
    pricingHtml
  }
}`;

export const GET_PAGE_HTML = `
  query GetPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      fullHtml
      customHtml
      content
      slug
    }
  }
`;

export const GET_SIDEBARS = `
query GetSidebars($widgets: [String]) {
  sidebars(array_widget_classname: $widgets) {
    array_widget_classname
    html
  }
}
`;

export const GET_FOOTER = `
query GetFooter {
  footerHtml
}
`;
