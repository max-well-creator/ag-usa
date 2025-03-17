import Link from "next/link";
import React from "react";
import styles from "./ConquerNature.module.scss";

const ConquerNature = () => {
	return (
		<div className={styles.container}>
			<h1>Conquer Nature by Cooperating with It</h1>

			<section className={styles.section}>
				<h2>The Problem with Chemical Fertilizers</h2>
				<p>
					Modern agriculture relies on soluble chemical fertilizers that bypass
					soil microbes. This leads to salt buildup, reduced microbial life,
					compaction, weed infestation, and poor plant health.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Work With Nature</h2>
				<p>
					Nature thrives on a symbiotic relationship between plants and soil.
					When the soil is balanced, toxins break down and beneficial fungi
					flourish. Plants then secrete sugars through their roots to feed
					microbes that:
				</p>
				<ul>
					<li>Structure the soil and eliminate compaction.</li>
					<li>Create air gaps for moisture and oxygen.</li>
					<li>Fix atmospheric nitrogen into plant food.</li>
					<li>Flush toxins and salts from the root zone.</li>
					<li>Transport nutrients from deep in the soil.</li>
				</ul>
				<p>
					In many cases, a single application of MycorrPlus restores 90% of soil
					balance within a year—without additional chemicals.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Conclusion</h2>
				<p>
					Instead of fighting nature with chemicals, work with its natural
					processes. MycorrPlus helps restore and balance your soil naturally,
					as shown by our satisfied customers.
				</p>
				<p>Contact us today to learn more.</p>
			</section>

			<section className={styles.cta}>
				<Link href="/learn-more" className={styles.link}>
					Learn More About MycorrPlus
				</Link>
				<Link href="/purchase-mycorrplus" className={styles.link}>
					Purchase MycorrPlus
				</Link>
			</section>
		</div>
	);
};

export default ConquerNature;
