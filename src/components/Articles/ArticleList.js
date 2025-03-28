import Link from "next/link";
import React from "react";
import ArticleImage from "../Article/ArticleImage";
import styles from "./ArticleList.module.scss";

export default function ArticleList({ articleType, array }) {
	return (
		<section className={styles.ArticleList}>
			<h3>{articleType}</h3>
			<ul>
				{array.map((article, index) => (
					<section className={styles.article} key={index}>
						<Link href={article.href}>
							<h4>{article.label}</h4>
							<ArticleImage image={article.image} title={article.title} />
						</Link>
					</section>
				))}
			</ul>
		</section>
	);
}
