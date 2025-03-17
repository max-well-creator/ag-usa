import Link from "next/link";
import React from "react";
import styles from "./SAS.module.scss";

const SASInfo = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				SAS – All-Natural Soap, Adjuvant, Surfactant
			</h1>
			<p className={styles.description}>
				SAS cuts through grease, wax, and oil—use it anywhere you need a deep
				clean!
			</p>

			<section className={styles.section}>
				<h2>Usage Guidelines</h2>
				<ul className={styles.list}>
					<li>
						<strong>Laundry:</strong> 2 oz per load.
					</li>
					<li>
						<strong>Hand Soap:</strong> Dilute 1:1 for effective grease removal.
					</li>
					<li>
						<strong>Dishwashing:</strong> Squeeze a squirt on your sponge.
					</li>
					<li>
						<strong>All-Purpose Cleaner:</strong> Dilute 4:1 with water
						(alternative to Formula 409).
					</li>
					<li>
						<strong>Acne Treatment:</strong> Dilute 4:1 to dry out oily skin.
					</li>
					<li>
						<strong>Insect & Bite Relief:</strong> Dilute 10:1 to break down
						venom.
					</li>
					<li>
						<strong>Livestock Wound Wash:</strong> Dilute 4:1 for cleaning
						wounds.
					</li>
					<li>
						<strong>Livestock Wash:</strong> Dilute 10:1 to deter ticks and
						fleas.
					</li>
					<li>
						<strong>Wax Stripping:</strong> Use as directed for floors.
					</li>
					<li>
						<strong>Engine Cleaner:</strong> Use in the shop to remove grease.
					</li>
					<li>
						<strong>Mold/Fungus Cleaner:</strong> For walls and surfaces.
					</li>
					<li>
						<strong>Pressure Washing:</strong> Use with a pressure washer.
					</li>
					<li>
						<strong>Septic & Drain Cleaner:</strong> Pour a few oz (or dilute
						4:1) to break down oils and clear clogs.
					</li>
					<li>
						<strong>Milk Tank Disinfectant:</strong> Dilute 4:1.
					</li>
					<li>
						<strong>Insecticide:</strong> Dilute 4:1 and spray on pests.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Foliar Applications</h2>
				<p>
					Use 1 oz per 60–100 oz of water. SAS acts like a mini shotgun to
					penetrate waxy leaves, enhancing absorption of fertilizers or
					herbicides. It also improves rainfastness, reducing overall fertilizer
					usage.
				</p>
			</section>

			<section className={styles.section}>
				<h2>SAS as an Insecticide</h2>
				<ul className={styles.list}>
					<li>
						Dries out soft-bodied insects and worms (use 2–4 oz/gal, with
						caution).
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>SAS for Oil Fields</h2>
				<p>
					Use 50 gallons in an oil well to break down paraffin (wax)
					build-up—sometimes doubling production.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Pricing & Multi-Pack Offer</h2>
				<ul className={styles.list}>
					<li>$100 per gallon concentrate (+ $15.05 shipping)</li>
					<li>$400 per bucket (+ shipping)</li>
					<li>$71/gal for a 150–275 gallon tote (+ shipping)</li>
				</ul>
				<p>
					Dealer pricing starts at 7 buckets. Request our SAS info pack for
					details.
				</p>
				<p>
					<strong>Multi-Pack Offer:</strong> $130 includes a 1-gal concentrate,
					1-qt spray cleaner (4:1 dilution), and two 8 oz foaming hand soap
					bottles (1:1 dilution). Send a check for $130 and request the SAS
					multi-pack.
				</p>
			</section>

			<section className={styles.sectionCentered}>
				<a href="mailto:info@ag-usa.net" className={styles.link}>
					Contact us for more details
				</a>
			</section>
		</div>
	);
};

export default SASInfo;
