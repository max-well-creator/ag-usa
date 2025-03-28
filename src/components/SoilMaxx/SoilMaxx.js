import React from "react";
import styles from "./SoilMaxx.module.scss";

const SoilMaxx = () => {
	return (
		<div className={styles.container}>
			<h1>SoilMaxx</h1>
			<p className={styles.intro}>
				<strong>
					Soil Amendment, Auxiliary Soil and Plant Substance (ASPS)
				</strong>
			</p>
			<p>
				Our family has always pursued soil excellence. After many breakthroughs
				at Tech Ag, Paul Jr. developed SoilMaxx—a product that makes essential
				nutrients available to plants and livestock. With MycorrPlus (formerly
				GroPal Balance), growers boost production, save on fertilizer, and
				balance soil pH by nurturing healthy microbes.
			</p>

			<section className={styles.section}>
				<h2>Our Office/Warehouse</h2>
				<p>Located at 119 Palmetto Rd., Tyrone, GA.</p>
				<div className={styles.warehouseImages}>
					<img src="/images/warehouse1.jpg" alt="AG-USA warehouse" />
					<img src="/images/warehouse2.jpg" alt="AG-USA warehouse" />
					<img src="/images/warehouse3.jpg" alt="AG-USA warehouse" />
					<img src="/images/warehouse4.jpg" alt="AG-USA warehouse" />
					<img src="/images/warehouse5.jpg" alt="Lots of product in stock" />
					<img src="/images/warehouse6.jpg" alt="AG-USA warehouse" />
					<img src="/images/warehouse7.jpg" alt="AG-USA warehouse" />
					<img src="/images/warehouse8.jpg" alt="AG-USA warehouse" />
				</div>
			</section>
		</div>
	);
};

export default SoilMaxx;
