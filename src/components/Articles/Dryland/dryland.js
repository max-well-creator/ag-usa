import React from "react";
import Link from "next/link";
import styles from "./Dryland.module.scss";

const OutlastDrySpells = () => {
	return (
		<div className={styles.container}>
			<h1>Keep Your Crops Growing Even in Dry Spells</h1>

			<section className={styles.section}>
				<p>
					<strong>MycorrPlus-A and O</strong> (formerly GroPal Balance) act like
					a center pivot for dryland farmers!
				</p>
				<blockquote className={styles.quote}>
					<p>
						Richard Fish says: "When the hot, dry July weather came and grass
						normally goes dormant, the 'GroPal Balance' grass just kept
						growing."
					</p>
				</blockquote>
				<p>
					<Link href="/video-transcription" className={styles.link}>
						View the 4-min video transcription
					</Link>
				</p>
				<p>
					<Link href="/more-videos" className={styles.link}>
						Watch more MycorrPlus videos
					</Link>
				</p>
			</section>

			<section className={styles.section}>
				<h2>How MycorrPlus Helps Keep Grass Growing</h2>
				<ol>
					<li>
						<strong>Fills the Soil with Beneficial Microbes:</strong>
						<p>
							It inoculates the soil with 70+ strains of aerobic bacteria and
							fungi, along with sea minerals, fish, kelp, and humic acids.
						</p>
					</li>
					<li>
						<strong>Transforms the Soil:</strong>
						<p>
							Beneficial microbes displace harmful elements, form
							nutrient-transporting mycorrhizal webs, and multiply earthworms
							for better soil energy.
						</p>
					</li>
					<li>
						<strong>Enhances Carbon Sequestration:</strong>
						<p>
							Favorable conditions prompt plants to secrete sugars into the
							soil. These sugars act as a glue to bind soil particles, create
							structure, and boost moisture retention.
						</p>
						<p className={styles.italic}>
							(Andrew in Michigan reported award-winning produce and massive
							root networks after applying MycorrPlus in July.)
						</p>
					</li>
					<li>
						<strong>Structures the Soil:</strong>
						<p>
							Microbes use sugars to bind soil particles, building organic
							matter and increasing moisture storage.
						</p>
					</li>
					<li>
						<strong>Improves Nitrogen Availability:</strong>
						<p>
							Enhanced soil structure allows nitrogen (78% of air) to flow in
							and be fixed by bacteria into forms available to plants.
						</p>
					</li>
					<li>
						<strong>Boosts Moisture Retention:</strong>
						<p>
							Well-structured soil holds water in tiny air pockets, ensuring
							moisture is available even during dry spells.
						</p>
					</li>
				</ol>
			</section>

			<section className={styles.section}>
				<h2>Recap</h2>
				<ul>
					<li>MycorrPlus acts as a center pivot for dryland farmers.</li>
					<li>
						It remediates soil issues and builds robust mycorrhizal networks.
					</li>
					<li>
						It "turns on" the carbon sequestration switch to boost organic
						matter.
					</li>
					<li>
						Enhanced soil structure means better moisture retention and
						consistent yields.
					</li>
				</ul>
			</section>

			<section className={styles.cta}>
				<h2>Want to Learn More?</h2>
				<ul>
					<li>
						<Link
							href="/7-keys-for-activating-carbon-sequestration"
							className={styles.link}>
							7 Keys for Activating Carbon Sequestration
						</Link>
					</li>
					<li>
						<Link href="/benefits-of-using-mycorrplus" className={styles.link}>
							Benefits of Using MycorrPlus
						</Link>
					</li>
					<li>
						<Link
							href="/acresusa-interview-dr-christine-jones"
							className={styles.link}>
							AcresUSA Interview with Dr. Christine Jones
						</Link>
					</li>
					<li>
						<Link href="/buy-mycorrplus" className={styles.link}>
							Buy MycorrPlus now!
						</Link>
					</li>
				</ul>
				<p>
					<strong>By Dr. Mercola:</strong> "Reasons Why Farmers Should Work to
					Sequester More Carbon"
				</p>
			</section>
		</div>
	);
};

export default OutlastDrySpells;
