import Link from "next/link";
import React from "react";

const CottonYields = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Increasing Cotton Yields</h1>
			<p>Achieve up to a 10–20% yield increase with one simple application!</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Imagine the Possibilities</h2>
				<ul>
					<li>Better boll sets</li>
					<li>Larger root mass</li>
					<li>Less compaction</li>
					<li>Up to 20% more yield</li>
				</ul>
				<p>
					For just $23.50 per acre (applied in the row on the seed) plus an
					additional $20 for a foliar broadcast at bloom, you can experience
					these superior results.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>What Our Customers Report</h2>
				<ul>
					<li>10–20% increase in yields</li>
					<li>Huge root structures for improved nutrient uptake</li>
					<li>Enhanced mycorrhizal activity extending the root zone</li>
					<li>Reduced disease and insect attack</li>
					<li>Better moisture retention and drought tolerance</li>
					<li>Greater plant immunity and accelerated seed germination</li>
					<li>Toxins and salts effectively flushed from the soil</li>
					<li>Increased organic matter in the soil</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Why Use MycorrPlus?</h2>
				<p>MycorrPlus is a highly concentrated organic bio‐stimulant that:</p>
				<ul>
					<li>
						Stimulates beneficial bacteria and mycorrhizal fungi to structure
						the soil and reduce compaction
					</li>
					<li>
						Enhances moisture retention and nutrient availability by unlocking
						bound nutrients
					</li>
					<li>
						Improves cation exchange capacity, benefiting next year's crops
					</li>
					<li>
						Contains a balanced blend of GroPal (sea mineral concentrate), humic
						& fulvic acids, fish, kelp, and molasses
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>2 Key Functions of MycorrPlus</h2>
				<ol>
					<li>
						<strong>Provides Essential Nutrients:</strong> Delivers trace
						minerals from ocean water directly to the plant.
					</li>
					<li>
						<strong>Energizes Carbon Sequestration:</strong> Stimulates plants
						to secrete sugars (liquid carbon) that feed beneficial microbes,
						which convert tied-up nutrients into available plant food.
					</li>
				</ol>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Call 1-888-588-3139, ext. 2 to speak with a consultant
					</Link>
				</p>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Email us at info@ag-usa.net
					</Link>
				</p>
				<p>
					<Link
						href="/purchase-mycorrplus"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Purchase MycorrPlus now!
					</Link>
				</p>
				<p>
					<Link
						href="/dr-christine-jones-interview"
						style={{ color: "blue", textDecoration: "underline" }}>
						Read Dr. Christine Jones’ article for more inspiration
					</Link>
				</p>
			</section>
		</div>
	);
};

export default CottonYields;
