import Link from "next/link";
import React from "react";
import styles from "./Article.module.scss";
import ArticleImage from "./ArticleImage";

export default function Article({ title, image, href = "/" }) {
	return (
		<Link href={href} className={styles.articleLink}>
			<div className={styles.article}>
				<p className={styles.title}>{title}</p>
				<ArticleImage image={image} title={title} />
			</div>
		</Link>
	);
}
