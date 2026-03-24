import React, { FC } from "react";

import { IconProps } from "phosphor-react";
import { IconSeparator } from "@tabler/icons-react";

interface BreadcrumbsProps {
  title?: string;
  mainTitle: string;
  path: string[];
  Icon?: FC<IconProps>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  title,
  mainTitle,
  path,
  Icon,
}) => {
  return (
    <div className="row m-0 p-0 mb-2">
      <div className="col-12 m-0 p-0">
        <h6 className="main-title m-0 p-0">{mainTitle}</h6>
    <div className="w-full  bg-gray-900 shadow-sm shadow-gray-800 mx-0 my-2" style={{height:"4px"}}></div>
        {/* <ul className="app-line-breadcrumbs mb-3">
          <li>
            <a href="#" className="f-s-14 f-w-500">
              <span>
                {Icon && (
                  <Icon
                    width={16}
                    weight="duotone"
                    height={16}
                    className="f-s-16 "
                  />
                )}
                {title}
              </span>
            </a>
          </li>
          {path.map((item, index) => (
            <li
              key={index}
              className={index === path.length - 1 ? "active" : ""}
            >
              {index === path.length - 1 ? (
                <a href="#" className="f-s-14 f-w-500">
                  {item}
                </a>
              ) : (
                <span className="f-s-14 f-w-500">{item}</span>
              )}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Breadcrumbs;
