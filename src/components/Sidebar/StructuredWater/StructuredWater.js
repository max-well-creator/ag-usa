import Link from "next/link";
import React from "react";
import styles from "./StructuredWater.module.scss";
import SidebarLayout from "../SidebarLayout/SidebarLayout";

export default function StructuredWater() {
	return (
		<SidebarLayout>
			<h3>Structured Water</h3>
			<ul>
				<li>
					<Link href="/NAT">Structure Water Benefits</Link>
				</li>
				<li>
					<Link href="/Animals">Healtheir Livestock</Link>
				</li>
			</ul>
		</SidebarLayout>
	);
}
