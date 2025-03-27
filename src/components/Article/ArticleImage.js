import React from "react";
import styles from "./ArticleImage.module.scss";
import Image from "next/image";

export default function ArticleImage({ image, title }) {
	return (
		<div className={styles.imageWrapper}>
			{image && title ? (
				<Image
					className={styles.img}
					src={image}
					height={200}
					width={200}
					alt={title}
				/>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
}
