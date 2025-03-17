import React from "react";
import SidebarLayout from "../Sidebar/SidebarLayout/SidebarLayout";
import Article from "./Article/Article";
import styles from "./ArticlesSidebar.module.scss";
import home_header from "../../../public/images/home-header.webp";

export default function ArticlesSidebar() {
	return (
		<SidebarLayout>
			<div className={styles.container}>
				<h3 className={styles.header}>Articles</h3>
				<Article
					title="Outlast Dry Spells"
					image={home_header}
					href="/Articles/Dryland"
				/>
				<Article
					title="End Compaction Now"
					image={home_header}
					href="/Articles/Hardpan"
				/>
				<Article title="33 Benefits" image={home_header} />
				<Article
					title="Save Tons on Lime"
					image={home_header}
					href="/Articles/SoilPh"
				/>
				<Article
					title="More Available Plant Food"
					image={home_header}
					href="/Articles/AvailablePlantFood"
				/>
			</div>
		</SidebarLayout>
	);
}
