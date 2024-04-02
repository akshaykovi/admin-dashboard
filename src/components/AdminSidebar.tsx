import React, { useEffect, useState } from "react";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/constants/Navigation";
import classNames from "classnames";

import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";

export default function AdminSidebar() {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside  style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }>
        <h2>Logo-X</h2>
        {/* middle content dashboard box div */}
        <div className="menu-items">
          <div className="menu-items-top">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
          {/* bottom profile */}
          <div className="menu-items-bottom">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
          {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
        </div>
      </aside>
    </>
  );
}
function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname == item.path ? "menu-selected" : "",
        "sidebar-menu-link"
      )}
    >
      <span className="sidebar-menu-icon">{item.icon}</span>
      <span className="sidebar-menu-name">
        {item.label}
        {/* <span className="">{item.role}</span> */}
      </span>
    </Link>
  );
}
