import React from "react";
import SidebarLayout from "../Sidebar/SidebarLayout/SidebarLayout";
import Link from "next/link";
import Image from "next/image";
import home_header from "../../../public/images/home-header.webp";
import Article from "./Article/Article";

export default function ArticlesSidebar() {
	return (
		<SidebarLayout>
			<h3>Articles</h3>
			<Article
				title="Outlast dry spells"
				image={home_header}
				href="/Articles/Dryland"
			/>
			<Article
				title="End compaction now"
				image={home_header}
				href="/Articles/Hardpan"
			/>
			<Article title="33 Benefits" image={home_header} />
			<Article
				title="Save tons on lime"
				image={home_header}
				href="/Articles/SoilPh"
			/>
			<Article
				title="More available plat food"
				image={home_header}
				href="/Articles/AvailablePlantFood"
			/>
		</SidebarLayout>
	);
}
