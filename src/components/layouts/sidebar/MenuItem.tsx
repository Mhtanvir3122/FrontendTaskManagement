import React, { Fragment, useMemo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import SvgIcon from "@/components/layouts/sidebar/SvgIcon.tsx";

interface MenuItemProps {
  title?: string;
  iconClass: string;
  type: string | undefined;
  path?: string | undefined;
  badgeCount?: string | number | undefined;
  links?: LinkInterface[];
  name: string;
  collapseId?: string;
  activeDropdown?: string | null;
  onDropdownToggle?: (collapseId?: string) => void;
}

interface LinkInterface {
  path: string;
  name: string;
  collapseId?: string;
  children?: LinkInterface[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  iconClass,
  type,
  path,
  badgeCount,
  links,
  name,
  collapseId,
  activeDropdown,
  onDropdownToggle,
}) => {
  const pathname = window.location.pathname;

  const isActive = useMemo(() => {
    return (linkPath: string) => linkPath === pathname;
  }, [pathname]);

  const checkUnder = useCallback(
    (links: LinkInterface[] | undefined) =>
      (links || []).some(
        (link) =>
          isActive(link.path) ||
          (link.children &&
            link.children.some((child) => isActive(child.path)))
      ),
    [isActive]
  );

  const [openChildDropdown, setOpenChildDropdown] = useState<string | null>(null);

  const handleToggle = (id?: string) => {
    if (onDropdownToggle) {
      onDropdownToggle(id);
    }
  };

  const handleChildToggle = (id?: string) => {
    setOpenChildDropdown((prev) => (prev === id ? null : id || null));
  };
  const isDropdownOpen = activeDropdown === collapseId;

  return (
    <Fragment>
      {type === "dropdown" ? (
        <Fragment>
          {title && (
            <li className="menu-title">
              <span>{title}</span>
            </li>
          )}
          <li>
            <a
              href={collapseId ? `#${collapseId}` : "#"}
              data-bs-toggle="collapse"
              data-bs-target={collapseId ? `#${collapseId}` : undefined}
              aria-expanded={
                isDropdownOpen ||
                (links || []).some((link) => isActive(link.path)) ||
                checkUnder(links)
              }
              aria-controls={collapseId}
              role="button"
              onClick={(e) => {
                e.preventDefault();
                handleToggle(collapseId);
              }}
            >
              <SvgIcon iconId={iconClass} />
              {name}
              {badgeCount && (
                <span
                  className={`badge ${collapseId === "advance-ui"
                      ? "rounded-pill bg-warning"
                      : badgeCount === "new"
                        ? "bg-danger badge-dashboard"
                        : "text-primary-dark bg-primary"
                    } badge-notification ms-2`}
                >
                  {badgeCount}
                </span>
              )}
            </a>
            {links && (
              <ul className={`collapse ${
                  isDropdownOpen ||
                  (links || []).some((link) => isActive(link.path)) ||
                  checkUnder(links)
                    ? "show"
                    : ""
                }`}
                id={collapseId}
              >
                {(links || []).map((link, index) => (
                    <Fragment key={index}>
                      {link.children ? (
                        <li key={index} className="another-level">
                          <a
                            href={`#${link.collapseId}`} 
                          data-bs-toggle="collapse"
                          data-bs-target={`#${link.collapseId}`}
                          aria-expanded={
                            openChildDropdown === link.collapseId ||
                            link.children.some((child) =>
                              isActive(child.path)
                            )
                          }
                          aria-controls={link.collapseId}
                          role="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleChildToggle(link.collapseId);
                          }}
                        >
                          {link.name}
                        </a>
                        <ul
                          className={`collapse ${
                            openChildDropdown === link.collapseId ||
                            link.children.some((child) =>
                              isActive(child.path)
                            )
                              ? "show"
                              : ""
                          }`}
                          id={link.collapseId}
                        >
                          {link.children.map((underLink, childIndex) => (
                            <li key={childIndex}>
                                <Link to={underLink.path}>
                                  {underLink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li
                          className={isActive(link.path) ? "active" : ""}
                        >
                          <Link to={link.path}>{link.name}</Link>
                        </li>
                      )}
                    </Fragment>
                  ))}
              </ul>
            )}
          </li>
        </Fragment>
      ) : (
        <li className={`no-sub ${isActive(path || "") ? "active" : ""}`}>
          <Link to={path || ""}>
            <SvgIcon iconId={iconClass} />
            {name}
          </Link>
        </li>
      )}
    </Fragment>
  );
};

export default MenuItem;