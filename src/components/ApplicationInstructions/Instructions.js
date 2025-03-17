import React from "react";
import Link from "next/link";
import styles from "./MycorrPlusInstructions.module.scss";

const MycorrPlusInstructions = () => {
	return (
		<div className={styles.container}>
			<p className={styles.instruction}>
				Loosen the lid immediately to vent MycorrPlus and prevent pressure
				build‑up.
			</p>
			<p className={styles.instruction}>
				Store in a cool, shaded area below 120°F (ideally under 100°F).
			</p>

			<h2 className={styles.heading}>Application Instructions</h2>
			<p>
				Use MycorrPlus‑A or MycorrPlus‑O for soil improvement. Do not use for
				foliar applications until 64 oz have been applied.
			</p>
			<p>
				Apply it alone or mix with fish, kelp, or liquid nitrogen (28%/32%).
				Always add MycorrPlus first, then water, then other additives. (Always
				perform a jar test.)
			</p>
			<p>
				It can be applied in any season—early spring boosts that year's crop;
				fall or winter applications prepare the soil for next season.
			</p>

			<h3 className={styles.subheading}>Safe Application Rate</h3>
			<p>
				Over‑application is rarely harmful, but more than 1 gal/acre may burn
				plant leaves.
			</p>

			<h3 className={styles.subheading}>Overcoming Application Challenges</h3>
			<h4 className={styles.subheadingSmall}>1. Sun Protection</h4>
			<ul>
				<li>
					For shallow plowing/discing (≤6"), apply just before the final soil
					work or use chiseling.
				</li>
				<li>If cultivating, apply before cultivation.</li>
				<li>For in‑row or seed applications, use your usual tank mix.</li>
				<li>For side-dressing, mix 2 qt/acre with your nitrogen.</li>
			</ul>

			<h4 className={styles.subheadingSmall}>2. Moving Product Off the Leaf</h4>
			<ul>
				<li>
					If no rain is forecast, use 40+ gal/acre; if rain is soon, 20
					gal/acre; if watered in immediately, 3–10 gal/acre.
				</li>
				<li>
					May be applied via irrigation or drip (screen out fungus first).
				</li>
				<li>Mix with manure or lagoon water, then spread.</li>
				<li>
					For lagoon water, use 5 gal per 250,000 gal; for composting manure,
					use 12 oz per cubic yard.
				</li>
			</ul>

			<h4 className={styles.subheadingSmall}>3. Protecting Microbes</h4>
			<p>
				Keeping the soil covered (using crop residue, forage, or cover crops)
				protects the beneficial microbes and maintains moisture.
			</p>

			<h3 className={styles.subheading}>Nutrient Mobilization</h3>
			<p>
				MycorrPlus’s microbes free up phosphorus and potassium. Mycorrhizal
				fungi can even transport phosphorus from deep in the soil to the roots.
			</p>

			<h3 className={styles.subheading}>Nitrogen Applications</h3>
			<p>
				The nitrogen‑fixing bacteria in MycorrPlus need 4–5 months to work. For
				nitrogen‑demanding crops, you may reduce N by 30% or more. For anhydrous
				ammonia, apply 1 qt of MycorrPlus‑A two weeks after application.
			</p>

			<h3 className={styles.subheading}>Herbicides</h3>
			<p>
				Herbicides damage soil life. Wait 3+ days after knock‑down herbicides or
				2–3 weeks after pre‑emergents before applying MycorrPlus.
			</p>

			<h3 className={styles.subheading}>Timing</h3>
			<ul>
				<li>Apply as soon as possible for first‑time use.</li>
				<li>If sowing in under a month, apply after planting.</li>
				<li>If tilling (≤6"), apply just before the final soil work.</li>
				<li>
					After herbicides, wait at least 3 days (or 2–3 weeks for residuals)
					before applying MycorrPlus.
				</li>
			</ul>

			<h3 className={styles.subheading}>Foliar Application Guidelines</h3>
			<p>
				For foliar use: MycorrPlus‑F: 2 qt/acre ($18/acre) and MycorrPlus‑O‑F: 3
				qt/acre ($23.10/acre). Apply in the morning or evening (below 80–85°F)
				using a 10 gal/acre tank mix or 3+ gal/acre by plane.
			</p>

			<h3 className={styles.subheading}>Small Area Applications</h3>
			<p>
				For areas less than one acre: Use 1 tsp per 100 sq. ft. in a gallon or 1
				tsp per quart for pump sprayers.
			</p>
			<p className={styles.link}>
				<Link href="/crop-applications">View crop-specific applications</Link>
			</p>

			<h3 className={styles.subheading}>More Information</h3>
			<ul>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						Soil Balance Results
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						Photo Gallery: Treated vs. Untreated Fields
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						Lab Test Results
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						pH Balance Without Lime
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						In‑Depth Article on Soil Transformation
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						FAQs about MycorrPlus
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						Application Guidelines
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer">
						GroPal Balance for Organic Use
					</a>
				</li>
			</ul>
			<p>
				GroPal Balance is likely the only fertilizer you need for great pasture.
				Many farmers find that additional products like fish or kelp are
				unnecessary.
			</p>
		</div>
	);
};

export default MycorrPlusInstructions;
