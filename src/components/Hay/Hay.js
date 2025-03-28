import Link from "next/link";
import React from "react";
import styles from "./Hay.module.scss";
import Image from "next/image";
import HayMaxx_logo from "../../../public/images/HayMax/HayMax_logo.webp";
import HayMaxx1 from "../../../public/images/HayMax/HayMax1.webp";
import HayMaxx_tractor from "../../../public/images/HayMax/HayMaxx_tractor.webp";
import HayMaxx_cattle from "../../../public/images/HayMax/HayMax_cattle.webp";
import HayMaxx_hay from "../../../public/images/HayMax/HayMax_hay.webp";

const NATHayMaxPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>NATHayMax – Premium Hay Conditioner</h1>
			<Image src={HayMaxx_logo} width={200} height={200} alt="HayMaxx Logo" />
			<h2 className={styles.subtitle}>The Best Hay Preserver on the Market!</h2>

			<section className={styles.section}>
				<h3 className={styles.sectionHeading}>
					Bale Hay How You Want, When You Want!
				</h3>
				<p>
					Farm life is busy enough. With NATHayMax, you no longer have to wait
					for hay to dry or bale at odd hours. Bale during the day—even at up to
					25% moisture!
				</p>
				<Image src={HayMaxx1} width={200} height={200} alt="HayMaxx 1" />
				<Image
					src={HayMaxx_tractor}
					width={200}
					height={200}
					alt="HayMax Tractor"
				/>
				<Image
					src={HayMaxx_cattle}
					width={200}
					height={200}
					alt="HayMax Cattle"
				/>
				<Image src={HayMaxx_hay} width={200} height={200} alt="HayMax Hay" />
			</section>

			<section className={styles.section}>
				<h3 className={styles.sectionHeading}>Directions for Use</h3>
				<ul className={styles.list}>
					<li>Spray on windrowed hay or at the mouth of the baler.</li>
					<li>Apply at 5 pints per ton of hay (works up to 25% moisture).</li>
					<li>
						For better coverage, mix HayMax 1:1 with water (10 pints per ton).
					</li>
					<li>Use at least two nozzles for even application.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3 className={styles.sectionHeading}>Key Benefits</h3>
				<ul className={styles.list}>
					<li>Keeps hay leaves intact, preserving nutrients.</li>
					<li>Enables baling at higher moisture, reducing wait time.</li>
					<li>Minimizes rot, mold, and moisture loss.</li>
					<li>Improves forage quality for better animal nutrition.</li>
					<li>Reduces field losses and increases profitability.</li>
					<li>
						Does not contain corrosive propionic acid—protecting your equipment.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h3 className={styles.sectionHeading}>Quick Reference Guide</h3>
				<p>
					<strong>What is it?</strong> A premium hay conditioner derived from
					water, zinc sulfate, lactic acid, copper sulfate, and molasses.
				</p>
				<p>
					<strong>Why use it?</strong> Eliminate drying wait times, bale hay at
					up to 25% moisture, preserve nutrition, and boost profits.
				</p>
				<p>
					<strong>Application:</strong> 5 pints per ton (or 10 pints per ton
					when diluted 1:1 with water).
				</p>
				<p>
					<strong>Cost:</strong> $90 per 5‑gallon bucket ($18/gal) or $15 per
					gallon by tote.
				</p>
			</section>
		</div>
	);
};

export default NATHayMaxPage;
