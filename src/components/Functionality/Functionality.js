import React from "react";
import Link from "next/link";
import styles from "./Functionality.module.scss";

const Functionality = () => {
	return (
		<div className={styles.container}>
			<h1>A Better Way</h1>
			<p>
				Dr. Christine Jones’ groundbreaking March 2015 article in AcresUSA shows
				a fresh, economic approach to transforming soils.
			</p>
			<p>
				Below is a summary of how MycorrPlus™ (A &amp; O) supports her
				regenerative principles.
			</p>

			<h2>Interview: SOS – Save our Soils</h2>
			<p className={styles.quote}>
				"Dr. Christine Jones Explains the Life-Giving Link Between Carbon and
				Healthy Topsoil."
			</p>
			<p>
				For decades, Dr. Jones has helped farmers adopt systems that boost
				biodiversity, carbon sequestration, and nutrient cycling.
			</p>
			<p className={styles.source}>
				(Reprinted from AcresUSA Magazine, Mar 2015 – Interview by Tracy Frisch)
			</p>

			<section className={styles.section}>
				<h3>Key Interview Excerpts</h3>
				<p>
					<strong>ACRES U.S.A.:</strong> Soil formation is vital for long-term
					wealth, yet many believe it’s slow.
				</p>
				<p>
					<strong>Dr. Jones:</strong> Topsoil forms rapidly from atmospheric
					elements—carbon, hydrogen, oxygen, and nitrogen—via plant roots.
				</p>
			</section>

			<section className={styles.section}>
				<h3>How MycorrPlus Supports Soil Transformation</h3>
				<p>
					MycorrPlus supplies essential nutrients and stimulates beneficial
					microbes, triggering plants to secrete sugars that bind soil particles
					into rich, stable topsoil.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Benefits of Carbon Sequestration</h3>
				<p>
					Carbon improves soil structure and water retention by forming natural
					glues that support nitrogen-fixing bacteria and boost plant growth.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Reduce Chemical Inputs</h3>
				<p>
					Relying on a thriving plant-microbial bridge (supported by MycorrPlus)
					reduces the need for synthetic fertilizers and preserves soil health.
				</p>
			</section>

			<section className={styles.section}>
				<h3>Preserve Soil Structure</h3>
				<p>
					Keeping soil covered and minimizing tillage protects the microbial
					community that builds stable, moisture-retentive soil.
				</p>
			</section>

			<section className={styles.cta}>
				<Link href="/purchase-mycorrplus">
					<span className={styles.link}>Purchase MycorrPlus™</span>
				</Link>
				<Link href="/dr-christine-jones-interview">
					<span className={styles.link}>Read Dr. Jones' Interview</span>
				</Link>
			</section>
		</div>
	);
};

export default Functionality;
