"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toImageProxy } from "@/libs/helper/urlProxy";

interface MenuItem {
  id: string;
  parentId: string | null;
  label: string;
  uri: string;
  children: MenuItem[];
}

interface Props {
  menus: MenuItem[];
  logoUrl?: string;
}

export default function HeaderView({ menus, logoUrl }: Props) {
  const pathname = usePathname();
  if (pathname === "/ve-web366") return null;

  const isHome = pathname === "/";
  const navbarAreaClass = isHome
    ? "navbar-area"
    : "navbar-area navbar-color-white";
  const containerClass = isHome ? "container-fluid" : "container";

  return (
    <header>
      <div className={navbarAreaClass}>
        {/* Mobile */}
        <div className="dibiz-responsive-nav">
          <div className={containerClass}>
            <div className="dibiz-responsive-menu">
              <div className="logo">
                <Link href="/">
                  <img src={toImageProxy(logoUrl)} alt="tbay" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="dibiz-nav">
          <div className={containerClass}>
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src={toImageProxy(logoUrl)} alt="tbay" />
              </Link>

              <div
                className="collapse navbar-collapse mean-menu"
                style={{ display: "block" }}
              >
                <ul id="menu-menu-chinh" className="navbar-nav">
                  {menus.map((item) => {
                    const hasChildren = item.children.length > 0;
                    const cleanPathname = pathname.replace(/\/+$/, "") || "/";
                    const cleanUri = item.uri.replace(/\/+$/, "") || "/";
                    const isChildMatch = item.children.some(
                      (c) =>
                        cleanPathname ===
                        (c.uri.replace(/\/+$/, "") || "/")
                    );
                    const isActive =
                      cleanPathname === cleanUri ||
                      (cleanUri !== "/" &&
                        cleanPathname.startsWith(cleanUri)) ||
                      isChildMatch;

                    return (
                      <li
                        key={item.id}
                        id={`menu-item-${item.id}`}
                        className={`menu-item menu-item-type-post_type menu-item-object-page nav-item${
                          hasChildren ? " menu-item-has-children" : ""
                        }${isActive ? " active current-menu-item" : ""}`}
                      >
                        <a href={item.uri} className={isActive ? "active" : ""}>
                          {item.label}
                        </a>

                        {hasChildren && (
                          <ul className="sub-menu dropdown-menu">
                            {item.children.map((child) => {
                              const isChildActive =
                                cleanPathname ===
                                (child.uri.replace(/\/+$/, "") || "/");
                              return (
                                <li
                                  key={child.id}
                                  id={`menu-item-${child.id}`}
                                  className={`menu-item menu-item-type-post_type menu-item-object-page nav-item${
                                    isChildActive ? " active" : ""
                                  }`}
                                >
                                  <a
                                    href={child.uri}
                                    target={
                                      child.uri.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                    }
                                    rel={
                                      child.uri.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className={isChildActive ? "active" : ""}
                                  >
                                    {child.label}
                                  </a>
                                </li>
                              );
                            })}
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
