import React from "react";

import HeaderApps from "@/components/layouts/header/HeaderApps.tsx";
import HeaderCart from "@/components/layouts/header/HeaderCart.tsx";
import HeaderDark from "@/components/layouts/header/HeaderDark.tsx";
import HeaderNotification from "@/components/layouts/header/HeaderNotification.tsx";
import LanguageSelector from "@/components/layouts/header/LanguageSelector.tsx";

const headerItems = [
  { key: "header-language", component: <LanguageSelector /> },
  { key: "header-apps", component: <HeaderApps /> },
  { key: "header-cart", component: <HeaderCart /> },
  { key: "header-dark", component: <HeaderDark /> },
  { key: "header-notification", component: <HeaderNotification /> },
];

const HeaderRightSide: React.FC = () => {
  return (
    <ul className="d-flex align-items-center">
      {headerItems.map((item) => (
        <li key={item.key} className={item.key}>
          {item.component}
        </li>
      ))}
    </ul>
  );
};

export default HeaderRightSide;
