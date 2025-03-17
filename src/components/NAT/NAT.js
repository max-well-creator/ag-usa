import Link from "next/link";
import React from "react";
import styles from "./NAT.module.scss";

const NATStructuredWater = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Structured Water is Amazing</h1>
			<p className={styles.intro}>
				Discover the powerful benefits of highly structured water produced by
				Natural Action Technology's water structuring machines.
			</p>
			<p className={styles.linkText}>
				<Link href="/NAT" className={styles.link}>
					Click here to view the full line of NAT products available to you
				</Link>
			</p>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>
					Biophoton Structured Water: Rich in Benefits
				</h2>
				<ul className={styles.list}>
					<li>Improved taste and smoother flavor</li>
					<li>Eliminates sediment in laundry water</li>
					<li>Enhances seed germination and plant growth</li>
					<li>Increases brix and nutrient density</li>
					<li>Boosts life force energy (biophotons) in the body</li>
					<li>Transfers energy to nearby liquids via entrainment</li>
					<li>Improves hydration with lower surface tension</li>
					<li>Reduces chlorine needs and prevents scale buildup in pools</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>How It Works</h2>
				<p className={styles.paragraph}>
					Structured water is water in its natural, organized state. As water
					flows down a mountain stream, it becomes structured—free of memory and
					balanced in pH. Enhancing its structure increases its biophoton
					content dramatically, as confirmed by microscopic studies. Adding
					Ionic Sea Minerals helps maintain this structure for months.
				</p>
				<p className={styles.paragraph}>
					Once ingested, the structured water’s energy transfers to surrounding
					water, instantly structuring it throughout your body. This effect
					leads to improved taste, hydration, and even clearer, scale-free pool
					water.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Scientific Proof</h2>
				<p className={styles.paragraph}>
					Independent tests from the AGALIS Lab show that highly structured
					water produces crystal patterns that indicate increased biophoton
					energy and mineral solubility. These star-shaped hexagonal structures
					resemble high-quality spring water, delivering greater vitality and
					enhanced bioavailability of trace elements.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Dynamically Enhanced Units!</h2>
				<p className={styles.paragraph}>
					Our new Dynamically Enhanced Units use proprietary materials to boost
					the energy of structured water—even before it flows through the unit.
					They help neutralize inorganic compounds, pesticides, and heavy
					metals; counteract electromagnetic fields; enhance immunity and
					rejuvenate skin; and purify water.
				</p>
				<p className={styles.linkText}>
					<Link href="/nat-products" className={styles.link}>
						Click here to see the full line of NAT products
					</Link>
				</p>
			</section>

			<section className={styles.sectionCenter}>
				<h2 className={styles.sectionTitle}>Structured Water Machines</h2>
				<p className={styles.paragraph}>
					Thank you for your interest in our water structuring units, developed
					by Natural Action Technologies and inventor Clayton M. Nolte.
				</p>
				<p className={styles.linkText}>
					<Link href="/structured-water-benefits" className={styles.link}>
						Read about the benefits of structured water
					</Link>
				</p>
				<p className={styles.linkText}>
					<Link href="/store" className={styles.link}>
						Visit our store for NAT products
					</Link>
				</p>
			</section>
		</div>
	);
};

export default NATStructuredWater;
