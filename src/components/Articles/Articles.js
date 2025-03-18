import Link from "next/link";
import React from "react";
import styles from "./Articles.module.scss";

const AGUSAMagazineLinks = () => {
	return (
		<div className={styles.container}>
			<h1>AG-USA Magazine Articles</h1>

			<section className={styles.section}>
				<h2>Recent Articles</h2>
				<ul>
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
					<li>
						<Link
							href="/articles/walter-jehne-interview"
							className={styles.link}>
							Walter Jehne Interview, Acres U.S.A. April 2019
						</Link>
					</li>
					<li>
						<Link
							href="/articles/next-soil-success-story"
							className={styles.link}>
							Be Our Next Soil Success Story
						</Link>
					</li>
					<li>
						<Link
							href="/articles/tapping-natures-fertility"
							className={styles.link}>
							Tapping into Nature's Fertility Solutions
						</Link>
					</li>
					<li>
						<Link href="/articles/turn-soil-great" className={styles.link}>
							Turn Any Soil Into Great Soil
						</Link>
					</li>
					<li>
						<Link href="/articles/increase-root-mass" className={styles.link}>
							Increasing Root Mass for Better Nutrient Uptake
						</Link>
					</li>
					<li>
						<Link
							href="/articles/creating-aerobic-soil"
							className={styles.link}>
							Creating and Sustaining Aerobic Soil
						</Link>
					</li>
					<li>
						<Link
							href="/articles/flavor-and-nutrient-density"
							className={styles.link}>
							In Pursuit of Flavor AND Nutrient Density
						</Link>
					</li>
					<li>
						<Link
							href="/articles/must-have-mycorrhizal"
							className={styles.link}>
							Why Pastures and Hay Need Mycorrhizal Fungi
						</Link>
					</li>
					<li>
						<Link
							href="/articles/33-benefits-carbon-sequestration"
							className={styles.link}>
							33 Benefits of Carbon Sequestration
						</Link>
					</li>
					<li>
						<Link href="/articles/transform-your-soil" className={styles.link}>
							Learn the Secret of Transforming Your Soil
						</Link>
					</li>
					<li>
						<Link
							href="/articles/affordable-soil-enrichment"
							className={styles.link}>
							A More Affordable Way to Enrich the Soil
						</Link>
					</li>
					<li>
						<Link href="/articles/improved-soil-yields" className={styles.link}>
							Improved Soil, for Better Weight Gains and Fertility
						</Link>
					</li>
					<li>
						<Link href="/articles/larger-root-mass" className={styles.link}>
							Larger Root Mass - A Great Place to Begin!
						</Link>
					</li>
					<li>
						<Link
							href="/articles/better-moisture-retention"
							className={styles.link}>
							Larger Roots and Better Moisture Retention
						</Link>
					</li>
					<li>
						<Link
							href="/articles/mycorrplus-testimonials"
							className={styles.link}>
							MycorrPlus Testimonials
						</Link>
					</li>
					<li>
						<Link
							href="/articles/retain-moisture-compaction"
							className={styles.link}>
							Retain Moisture AND Get Rid of Compaction
						</Link>
					</li>
					<li>
						<Link
							href="/articles/what-bio-stimulants-can-do"
							className={styles.link}>
							What a Bio-stimulant Can Do for You
						</Link>
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Older Articles (Using GroPal Balance)</h2>
				<ul>
					<li>
						<Link
							href="/articles/turn-poor-soil-into-great-soil"
							className={styles.link}>
							Turn Poor Soil into Great, Healthy Soil
						</Link>
					</li>
					<li>
						<Link
							href="/articles/lower-inputs-increase-yields"
							className={styles.link}>
							Lower Your Inputs AND Increase Your Yields!
						</Link>
					</li>
					<li>
						<Link
							href="/articles/5-stages-plant-health"
							className={styles.link}>
							5 Stages of Plant Health
						</Link>
					</li>
					<li>
						<Link href="/articles/huge-root-structures" className={styles.link}>
							How to Create Huge Root Structures
						</Link>
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Articles from 2017</h2>
				<ul>
					<li>
						<Link
							href="/articles/33-benefits-activating-carbon-sequestration"
							className={styles.link}>
							33 Benefits of Activating Carbon Sequestration
						</Link>
					</li>
					<li>
						<Link
							href="/articles/7-keys-for-wonderful-soil"
							className={styles.link}>
							7 Keys for Developing Wonderful Soil
						</Link>
					</li>
					<li>
						<Link
							href="/articles/the-best-way-enrich-soil"
							className={styles.link}>
							The Best Way to Enrich Your Soil
						</Link>
					</li>
					<li>
						<Link
							href="/articles/core-values-are-important"
							className={styles.link}>
							Core Values are Important
						</Link>
					</li>
					<li>
						<Link
							href="/articles/bio-stimulant-increase-production"
							className={styles.link}>
							How a Bio-stimulant Can Increase Production and Profit
						</Link>
					</li>
					<li>
						<Link
							href="/articles/better-production-without-fertilizer"
							className={styles.link}>
							Better Production Without Fertilizer
						</Link>
					</li>
					<li>
						<Link
							href="/articles/keep-grass-growing-dry-spell"
							className={styles.link}>
							How to Keep Grass Growing During a Dry Spell
						</Link>
					</li>
					<li>
						<Link
							href="/articles/more-moisture-more-grass"
							className={styles.link}>
							More Moisture Means More Grass - Period.
						</Link>
					</li>
					<li>
						<Link
							href="/articles/signs-soil-transformation"
							className={styles.link}>
							Signs That Soil Transformation Has Begun
						</Link>
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Other AG-USA Websites</h2>
				<ul>
					<li>
						<a
							href="http://www.healthy-vegetable-gardening.com"
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

			<section className={styles.section}>
				<h2>Inspiring Stories</h2>
				<p>
					Read the story of Fidel’s miraculous recovery after taking our Ocean
					Treasure supplement.
				</p>
			</section>
		</div>
	);
};

export default AGUSAMagazineLinks;
