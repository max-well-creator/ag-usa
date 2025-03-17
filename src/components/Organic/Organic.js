import Link from "next/link";
import React from "react";
import styles from "./Organic.module.scss";

const MycorrPlusOrganic = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>MycorrPlus for Organic Use</h1>
			<p className={styles.paragraph}>
				MycorrPlus-O and MycorrPlus-O-F are WSDA-registered for organic use and
				accepted by all major US certifiers. They have the same cost and
				application rates as MycorrPlus-A but are approved for organic
				applications.
			</p>
			<p className={styles.paragraph}>
				Simply provide your certifier with our label and organic certificate.
				We’re happy to work with your certifier for a smooth approval process.
			</p>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Certificates and Labels</h2>
				<p className={styles.linkParagraph}>
					<Link href="#" className={styles.link}>
						WSDA certificate for MycorrPlus-O and O-F (print certificate)
					</Link>
				</p>
				<p className={styles.linkParagraph}>
					<Link href="#" className={styles.link}>
						MycorrPlus-O Label (print label)
					</Link>
				</p>
				<p className={styles.linkParagraph}>
					<Link href="#" className={styles.link}>
						MycorrPlus-O-F Label (print label)
					</Link>
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Want to Learn More?</h2>
				<ul className={styles.list}>
					<li>
						<Link href="#" className={styles.link}>
							Photo gallery: Treated vs. Untreated Fields
						</Link>
					</li>
					<li>
						<Link href="#" className={styles.link}>
							In-depth article on soil transformation with MycorrPlus
						</Link>
					</li>
					<li>
						<Link href="#" className={styles.link}>
							Customer testimonials
						</Link>
					</li>
					<li>
						<Link href="#" className={styles.link}>
							How to eliminate hardpan quickly
						</Link>
					</li>
					<li>
						<Link href="#" className={styles.link}>
							MycorrPlus for Organic Use details
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default MycorrPlusOrganic;
