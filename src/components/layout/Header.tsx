import Link from "next/link";
import { cacheLife } from "next/cache";
import { getMenuItems } from "@/libs/api/services/layout.service";
import { getSetting } from "@/libs/api/services/setting.service";
import { toImageProxy } from "@/libs/helper/urlProxy";

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

  return (
    <header>
      <div className="navbar-area">
        {/* Mobile */}
        <div className="dibiz-responsive-nav">
          <div className="container-fluid">
            <div className="dibiz-responsive-menu">
              <div className="logo">
                <Link href="/">
                  <img src={toImageProxy(setting.logoUrl)} alt="tbay" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="dibiz-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src={toImageProxy(setting.logoUrl)} alt="tbay" />
              </Link>

              <div
                className="collapse navbar-collapse mean-menu"
                style={{ display: "block" }}
              >
                <ul id="menu-menu-chinh" className="navbar-nav">
                  {menus.map((item) => {
                    const hasChildren = item.children.length > 0;
                    return (
                      <li
                        key={item.id}
                        id={`menu-item-${item.id}`}
                        className={`menu-item menu-item-type-post_type menu-item-object-page nav-item${hasChildren ? " menu-item-has-children" : ""}`}
                      >
                        <a href={item.uri}>{item.label}</a>

                        {hasChildren && (
                          <ul className="sub-menu dropdown-menu">
                            {item.children.map((child) => (
                              <li
                                key={child.id}
                                id={`menu-item-${child.id}`}
                                className="menu-item menu-item-type-post_type menu-item-object-page nav-item"
                              >
                                <a
                                  href={child.uri}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <div className="search-box">
                      <i className="flaticon-search"></i>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="side-menu-btn">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        id="login"
                        href="https://dv.tbay.vn/account/signin"
                      >
                        Đăng nhập
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
