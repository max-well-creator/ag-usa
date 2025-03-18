import Link from "next/link";
import React from "react";
import styles from "./StructuredWater.module.scss";
import SidebarLayout from "../SidebarLayout/SidebarLayout";

export default function StructuredWater() {
	return (
		<SidebarLayout>
			<div className={styles.container}>
				<h3 className={styles.heading}>Structured Water</h3>
				<ul className={styles.list}>
					<li>
						<Link href="/NAT">Structure Water Benefits</Link>
					</li>
				</ul>
			</div>
		</SidebarLayout>
	);
}
