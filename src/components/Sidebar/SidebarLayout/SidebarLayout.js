import React from "react";
import stlyes from "./SidebarLayout.module.scss";

export default function SidebarLayout({ children }) {
	return <div className={stlyes.sidebarLayout}>{children}</div>;
}
