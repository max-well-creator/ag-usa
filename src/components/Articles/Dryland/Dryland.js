import React from "react";
import styles from "./Dryland.module.scss";
import dryland_logo from "../../../../public/images/articles/dryland/dryland_logo.webp";
import grass_keeps_growing from "../../../../public/images/articles/dryland/grass_keep_growing.webp";
import grass_stopped_growing from "../../../../public/images/articles/dryland/grass_stopped_growing.webp";
import ArticleImage from "../../Article/ArticleImage";
import Image from "next/image";

const OutlastDrySpells = () => {
	return (
		<div className={styles.container}>
			<ArticleImage image={dryland_logo} title="Dryland" />
			<h1>Keep Your Crops Growing Even in Dry Spells</h1>

			<section className={styles.section}>
				<p>
					<strong>MycorrPlus-A and O</strong> act like a center pivot for
					dryland farmers!
				</p>
				<blockquote className={styles.quote}>
					<p>
						Richard Fish says: "When the hot, dry July weather came and grass
						normally goes dormant, the 'MycorrPlus' grass just kept growing."
					</p>
				</blockquote>
				<Image
					src={grass_keeps_growing}
					width={600}
					height={500}
					alt="Grass Keeps Growing with Mycorr Plus"
				/>
				<p>When the weather turned hot and dry, grass stopped growing.</p>
				<Image
					src={grass_stopped_growing}
					width={600}
					height={500}
					alt="Grass Keeps Growing with Mycorr Plus"
				/>
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
		</div>
	);
};

export default OutlastDrySpells;
