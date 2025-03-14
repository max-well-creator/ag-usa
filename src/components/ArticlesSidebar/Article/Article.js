import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Article.module.scss";

export default function Article({ title, image, href = "/" }) {
	return (
		<>
			<Link href={href}>
				<div>
					<p className={styles.title}>{title}</p>
				</div>
				<div>
					<Image
						className={styles.img}
						src={image}
						height={200}
						width={200}
						alt={image}
					/>
				</div>
			</Link>
		</>
	);
}
