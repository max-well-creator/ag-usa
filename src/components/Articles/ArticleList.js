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
							<ArticleImage image={article.image} title={article.title} />
							{article.label}
						</Link>
					</section>
				))}
			</ul>
		</section>
	);
}
