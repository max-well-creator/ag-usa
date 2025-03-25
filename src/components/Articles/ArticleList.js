import Link from "next/link";
import React from "react";

export default function ArticleList({ articleType, array }) {
	return (
		<section>
			<h3>{articleType}</h3>
			<ul>
				{array.map((article, index) => (
					<li key={index}>
						<Link href={article.href}>{article.label}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
