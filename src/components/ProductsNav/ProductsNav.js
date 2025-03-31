import Link from "next/link";
import React from "react";
import classes from "./ProductsNav.module.scss";
import { ProductLinks } from "../../data/ProductLinks";
import ArticleImage from "../Article/ArticleImage";

export default function ProductsNav() {
	return (
		<div className={classes.container}>
			{ProductLinks.map((product, index) => (
				<section
					className={classes.box}
					key={index}
					style={{ backgroundImage: `url(${product.image})` }}>
					<Link href={product.href}>
						<p>{product.label}</p>
					</Link>
				</section>
			))}
		</div>
	);
}
