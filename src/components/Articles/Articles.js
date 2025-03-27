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
			<ArticleList
				articleType="Importartant Articles"
				array={importantArticles}
			/>
			<ArticleList articleType="Recent Articles" array={recentArticles} />
			<ArticleList articleType="GroPal Articles" array={groPalArticles} />
			<ArticleList articleType="Orphaned Articles" array={orphanedPages} />
		</div>
	);
};

export default AGUSAMagazineLinks;
