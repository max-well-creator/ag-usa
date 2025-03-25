import Link from "next/link";
import React from "react";
import styles from "./Articles.module.scss";

const AGUSAMagazineLinks = () => {
	return (
		<div className={styles.container}>
			<h1>AG-USA Magazine Articles</h1>
			<div className={styles.completed}>
				<h2>
					Recent Articles (in progress) - The links in this section are working
				</h2>
				<li>
					<Link href="/Articles/33Benefits" className={styles.link}>
						33 Benefits of Carbon Sequestration
					</Link>
				</li>
				<li>
					<Link
						href="/Articles/NaturesFertilitySolutions"
						className={styles.link}>
						Tapping into Nature's Fertility Solutions
					</Link>
				</li>
				<li>
					<Link href="/Articles/IncreasingRootMass" className={styles.link}>
						Increasing Root Mass for Better Nutrient Uptake
					</Link>
				</li>
				<li>
					<Link
						href="/Articles/TurnAnySoilIntoGreatSoil"
						className={styles.link}>
						Turn Any Soil Into Great Soil
					</Link>
				</li>
				<li>
					<Link
						href="/Articles/CreatingSustainingAerobicSoil"
						className={styles.link}>
						Creating and Sustaining Aerobic Soil
					</Link>
				</li>
				<li>
					<Link href="/Articles/FlavorNutrientDensity" className={styles.link}>
						In Pursuit of Flavor AND Nutrient Density
					</Link>
				</li>
				<li>
					<Link href="/Articles/MycorrhizalFungi" className={styles.link}>
						Why Pastures and Hay Need Mycorrhizal Fungi
					</Link>
				</li>
				<li>
					<Link
						href="/Articles/LearnSecretToTransformSoil"
						className={styles.link}>
						Learn the Secret of Transforming Your Soil
					</Link>
				</li>
				<li>
					<Link href="/Articles/EnrichYourSoil" className={styles.link}>
						A More Affordable Way to Enrich the Soil
					</Link>
				</li>
				<li>
					<Link
						href="/Articles/ImprovedSoilBetterWeightGains"
						className={styles.link}>
						Improved Soil, for Better Weight Gains and Fertility
					</Link>
				</li>
				<li>
					<Link href="/Articles/LargerRootMass" className={styles.link}>
						Larger Root Mass - A Great Place to Begin!
					</Link>
				</li>
				<li>
					<Link href="/Articles/LargerRoots" className={styles.link}>
						Larger Roots and Better Moisture Retention
					</Link>
				</li>
				<li>
					<Link href="/Articles/RetainMoisture" className={styles.link}>
						Retain Moisture AND Get Rid of Compaction
					</Link>
				</li>
				<li>
					<Link href="/Articles/Biostimulant" className={styles.link}>
						What a Bio-stimulant Can Do for You
					</Link>
				</li>
				<li>
					<Link href="/Articles/Interview" className={styles.link}>
						Walter Jehne Interview, Acres U.S.A. April 2019
					</Link>
				</li>
				<li>
					<Link href="/Articles/CoreValues" className={styles.link}>
						Core Values are Important
					</Link>
				</li>
				<li>
					<Link href="/Articles/GetBetterProduction" className={styles.link}>
						Better Production Without Fertilizer
					</Link>
				</li>
				<li>
					<Link href="/Articles/SoilTransformation" className={styles.link}>
						Signs That Soil Transformation Has Begun
					</Link>
				</li>
				<li>
					<Link href="/Articles/MoreMoistureMoreGrass" className={styles.link}>
						More Moisture Means More Grass - Period.
					</Link>
				</li>
				<section className={styles.GroPal}>
					<h3>
						Considering consolidating these old GroPal articles into new one
						from abve
					</h3>
					<li>
						<Link href="/Articles/LowerInputs" className={styles.link}>
							Lower Your Inputs AND Increase Your Yields!
						</Link>
					</li>
					<li>
						<Link
							href="/Articles/FiveStagesToSoilHealth"
							className={styles.link}>
							5 Stages of Plant Health
						</Link>
					</li>
					<li>
						<Link href="/Articles/HugeRootStructures" className={styles.link}>
							How to Create Huge Root Structures
						</Link>
					</li>
					<li>
						<Link href="/Articles/SevenKeysForSoil" className={styles.link}>
							7 Keys for Developing Wonderful Soil
						</Link>
					</li>
				</section>
			</div>

			<section className={styles.section}>
				<h2>Can't abstract text from PDF</h2>
				<ul>
					<li>
						<Link
							href="/articles/keep-grass-growing-dry-spell"
							className={styles.link}>
							How to Keep Grass Growing During a Dry Spell
						</Link>
					</li>
					<li>
						<Link
							href="/articles/trace-minerals-vanishing-pg1"
							className={styles.link}>
							Trace Minerals are Vanishing – pg.1
						</Link>
					</li>
					<li>
						<Link
							href="/articles/trace-minerals-vanishing-pg2"
							className={styles.link}>
							Trace Minerals are Vanishing – pg.2
						</Link>
					</li>
				</ul>
			</section>
			<section className={styles.section}>
				<h2>Other AG-USA Websites (these link are working)</h2>
				<ul>
					<li>
						<a
							href="http://www.healthyvegetablegardening.com"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}>
							MycorrPlus for Better Gardens
						</a>
					</li>
					<li>
						<a
							href="http://www.best-constipation-remedies.com"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}>
							Sea Minerals for Constipation Relief
						</a>
					</li>
					<li>
						<a
							href="http://www.AidtheChildren.com"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}>
							Sea Minerals for Health (Aid the Children)
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default AGUSAMagazineLinks;
