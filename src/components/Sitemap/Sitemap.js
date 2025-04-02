import Link from "next/link";
import React from "react";
import styles from "./Sitemap.module.scss";
import { sitemap, sitemapArticles } from "../../data/Sitemap/Links";

const SiteMap = () => {
	return (
		<div className={styles.container}>
			<div>
				<h1 className={styles.heading}>Site Map</h1>
				<ul className={styles.list}>
					{sitemap.map((link, index) => {
						return (
							<li className={styles.listItem} key={index}>
								<Link href={link.url} className={styles.link}>
									{link.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<h1 className={styles.heading}>Articles</h1>
				<ul className={styles.list}>
					{sitemapArticles.map((link, index) => {
						return (
							<li className={styles.listItem} key={index}>
								<Link href={link.url} className={styles.link}>
									{link.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default SiteMap;
