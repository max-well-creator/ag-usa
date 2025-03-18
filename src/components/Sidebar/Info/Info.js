import Link from "next/link";
import React from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import styles from "./Info.module.scss";

export default function Info() {
	return (
		<SidebarLayout>
			<div className={styles.container}>
				<h3 className={styles.heading}>More Info:</h3>
				<ul className={styles.list}>
					<li>
						<Link href="/MaynardMurrayResearch">Dr. Murray's Research</Link>
					</li>
					<li>
						<Link href="/Hay">HayMax Conditioner</Link>
					</li>
					<li>
						<Link href="/Silage">Sil-Tec Silage</Link>
					</li>
				</ul>
			</div>
		</SidebarLayout>
	);
}
