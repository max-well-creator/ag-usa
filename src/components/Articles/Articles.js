import Link from "next/link";
import React from "react";
import styles from "./Articles.module.scss";
import {
	externalLinks,
	groPalArticles,
	importantArticles,
	orphanedPages,
	recentArticles,
} from "../../data/Articles/Links/Links";
import ArticleList from "./ArticleList";

const AGUSAMagazineLinks = () => {
	return (
		<div className={styles.container}>
			<h1>AG-USA Magazine Articles</h1>
			<ArticleList
				articleType="Importartant Articles"
				array={importantArticles}
			/>
			<ArticleList articleType="Recent Articles" array={recentArticles} />
			<ArticleList articleType="GroPal Articles" array={groPalArticles} />
			<ArticleList articleType="Orphaned Articles" array={orphanedPages} />
			<ArticleList articleType="Other AG-USA Websites" array={externalLinks} />
		</div>
	);
};

export default AGUSAMagazineLinks;
