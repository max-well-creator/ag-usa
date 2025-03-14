import Link from "next/link";
import React from "react";

const SilaTecSilageConditioner = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Sila‑Tec Silage Conditioner</h1>
			<h2>For a Sweet, Highly Palatable Silage</h2>

			<section style={{ marginTop: "20px" }}>
				<h3>How It Works</h3>
				<p>
					Sila‑Tec feeds L‑form lactic acid–producing bacteria that rapidly
					ferment silage packs with a sweet, non‑toxic fatty acid. This acid
					partially digests the silage, making nutrients more available and
					resulting in a silage so sweet that cattle lick the bunk clean!
				</p>
				<p>
					Additionally, the L‑form lactic acid acts as a prebiotic in the
					animal’s rumen—quickly turning into propionic acid and supporting
					healthy digestion.
				</p>
				<p>
					The fermentation process quickly transforms trapped oxygen into a
					non‑volatile gas, keeping silage cool and reducing shrinkage. Silage
					can be safely fed within 24 hours.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Advantages</h3>
				<ul>
					<li>
						<strong>Enhanced Palatability:</strong> Allows higher moisture
						silage with more available sugars.
					</li>
					<li>
						<strong>Lower Temperature:</strong> Keeps silage cool, reduces
						spoilage, and minimizes pack shrinkage.
					</li>
					<li>
						<strong>Prevents Off-Odors:</strong> Fermentation is sweet rather
						than ammonia or alcohol producing.
					</li>
					<li>
						<strong>Extended Shelf-Life:</strong> Silage remains feedable even
						on 100°F days without becoming rancid.
					</li>
					<li>
						<strong>Nitrate Conversion:</strong> Converts nitrates into protein,
						reducing the risk of nitrate poisoning.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Using Treated Silage in Rations</h3>
				<p>Sila‑Tec treated silage offers:</p>
				<ul>
					<li>Lower feed costs</li>
					<li>
						Higher energy, protein, and mineral availability per acre compared
						to grain-only systems
					</li>
					<li>Improved compatibility in cattle and other ruminant rations</li>
					<li>
						Early crop removal in double-cropping systems with reduced weed and
						insect problems
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>How to Make Better Silage</h3>
				<ul>
					<li>Avoid cutting crops in the rain or when overly wet.</li>
					<li>
						Cut at the proper maturity stage to avoid over-drying or frost
						damage.
					</li>
					<li>
						Do not leave chopped crop untreated; pack it immediately using a
						wheel tractor for optimal compaction.
					</li>
					<li>
						Ensure chopper knives are sharp and adjusted, and follow recommended
						forage length (up to 5/8" for high-moisture crops).
					</li>
					<li>
						Properly dilute and evenly apply Sila‑Tec using a spray rig or
						sprinkler can.
					</li>
				</ul>
				<p>
					<strong>Note:</strong> Moisture is crucial. The fermentation process
					will not work properly if the feed is too dry.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Sila‑Tec Application Rates</h3>
				<ul>
					<li>For 65–78% moisture: 1 pint per ton</li>
					<li>For 78–80% moisture: 1.5 pints per ton</li>
					<li>For below 65% moisture: 2 pints per ton</li>
				</ul>
				<p>
					You may use a boom applicator for truckloads or mount the applicator
					on your chopper for direct cutting.
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/purchase-sila-tec"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Click here to buy Sila‑Tec or HayMax
					</Link>
				</p>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Contact us for more details
					</Link>
				</p>
			</section>
		</div>
	);
};

export default SilaTecSilageConditioner;
