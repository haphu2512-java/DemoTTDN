"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemResponse } from "@/libs/api/types/MenuItemResponse";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

type Props = {
  menuItems: MenuItemResponse[];
};

export default function HeaderNav({ menuItems }: Props) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Group menu items by parentId
  const parentMenus = menuItems.filter((item) => !item.parentId);
  const getChildMenus = (parentId: string) => {
    return menuItems.filter((item) => item.parentId === parentId);
  };

  const toggleDropdown = (menuId: string) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
  };

  return (
    <div className="d-flex align-items-center justify-content-end w-100 gap-3">
      <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
        {parentMenus.map((item) => {
          const children = getChildMenus(item.id);
          const isActive = pathname === item.uri.slice(0, -1);
          const isOpen = openDropdown === item.id;

          return (
            <li
              key={item.id}
              className={`nav-item ${children.length > 0 ? "dropdown" : ""}`}
              onMouseEnter={() =>
                children.length > 0 && setOpenDropdown(item.id)
              }
              onMouseLeave={() => children.length > 0 && setOpenDropdown(null)}
            >
              {children.length > 0 ? (
                <div>
                  <button
                    className={`nav-link px-0 bg-transparent border-0 d-flex align-items-center gap-2 ${
                      isActive ? "text-primary fw-semibold" : "text-muted"
                    }`}
                    onClick={() => toggleDropdown(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.label}
                    <i
                      className={`bi bi-chevron-down transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{
                        fontSize: "0.75rem",
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {/* Dropdown Menu */}
                  <ul
                    className={`dropdown-menu border-0 shadow-sm ${
                      isOpen ? "show" : ""
                    }`}
                    style={{
                      display: isOpen ? "block" : "none",
                      position: "absolute",
                      minWidth: "200px",
                    }}
                  >
                    {children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.uri}
                          className="dropdown-item text-muted"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={item.uri}
                  className={`nav-link px-0 ${
                    isActive ? "text-primary fw-semibold" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <Button variant="secondary" className="ms-3">
        Đăng nhập
      </Button>
    </div>
  );
}
