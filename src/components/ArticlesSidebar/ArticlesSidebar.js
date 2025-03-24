import React from "react";
import SidebarLayout from "../Sidebar/SidebarLayout/SidebarLayout";
import Article from "./Article/Article";
import styles from "./ArticlesSidebar.module.scss";
import home_header from "../../../public/images/navigation/home-header.webp";
import dryland_logo from "../../../public/images/articles/dryland_logo.webp";
import Hardpan_logo from "../../../public/images/articles/Hardpan_logo.webp";
import Benfits_logo from "../../../public/images/articles/33benefits_logo.webp";
import PlantFood_logo from "../../../public/images/articles/PlantFood_logo.webp";

export default function ArticlesSidebar() {
	return (
		<SidebarLayout>
			<div className={styles.container}>
				<h3 className={styles.header}>Articles</h3>
				<Article
					title="Outlast Dry Spells"
					image={dryland_logo}
					href="/Articles/Dryland"
				/>
				<Article
					title="End Compaction Now"
					image={Hardpan_logo}
					href="/Articles/Hardpan"
				/>
				<Article
					title="More Available Plant Food"
					image={PlantFood_logo}
					href="/Articles/AvailablePlantFood"
				/>
			</div>
		</SidebarLayout>
	);
}
