import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Article.module.scss";

export default function Article({ title, image, href = "/" }) {
	return (
		<Link href={href} className={styles.articleLink}>
			<div className={styles.article}>
				<p className={styles.title}>{title}</p>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.img}
						src={image}
						height={200}
						width={200}
						alt={title}
					/>
				</div>
			</div>
		</Link>
	);
}
