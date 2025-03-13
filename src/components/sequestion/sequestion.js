import Link from "next/link";
import React from "react";

const Sequestion = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Great Soil Is Your Solution</h1>
			<h2>Reasons to Sequester More Carbon</h2>
			<p style={{ fontStyle: "italic" }}>By Dr. Mercola</p>

			<section style={{ marginTop: "30px" }}>
				<h3>Story at-a-Glance</h3>
				<ul>
					<li>
						<strong>Regenerating Soil:</strong> In nature, plants thrive because
						of a symbiotic relationship with their surrounding environment,
						including microorganisms in the soil.
					</li>
					<li>
						The excessive use of synthetic fertilizers irreparably damages this
						relationship.
					</li>
					<li>
						Game-changing practices like no-till and planting winter cover crops
						can help make soils “net mitigating” – capturing more greenhouse
						gases than they emit.
					</li>
					<li>
						The dirt beneath your feet is one of our planet’s most
						under-appreciated assets. When at its prime, this “black gold” gives
						life.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Nature’s Symbiotic System</h3>
				<p>
					In nature, plants thrive because they share a mutually beneficial
					relationship with the microorganisms in their rhizosphere—the zone
					immediately around a plant’s roots. These microorganisms feed on
					exudates (carbohydrates, phytochemicals, and other compounds) released
					by the plant. In return, the root microbiome supplies the plant with
					vital metabolites and nutrients, including nitrogen (N), phosphorus
					(P), and potassium (K)—the same ingredients found in most synthetic
					fertilizers.
				</p>
				<p>
					When the plant is forced to rely on synthetic NPK, it stops “wasting”
					energy to feed its microbiome, and in turn receives fewer benefits.
					The result is a plant that looks robust on the outside but lacks
					internal nutrient density and natural pest defenses.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Why Synthetic Fertilizers Are Ruining the Planet</h3>
				<p>
					Synthetic fertilizers can boost plant size in the short term, but they
					also disrupt the natural symbiotic exchange between plant roots and
					soil microbes. As a result, plants miss out on essential metabolites
					and phytochemicals that contribute to overall health. Moreover, less
					than 50% of the applied fertilizer is used by the plant; the remainder
					runs off into water systems, causing nutrient pollution, algal blooms,
					and even dead zones in bodies of water like the Gulf of Mexico.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Soil Health Campaigns and Changing Practices</h3>
				<p>
					Recognizing that soil is a living, biological system—not just a
					chemistry set—the USDA’s NRCS is educating farmers on practices that
					promote soil biology. By shifting focus from chemical inputs to
					building a thriving microbial community, farmers can achieve the same
					(or better) yields while naturally reducing their carbon footprint.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Three 'Game-Changing' Practices for Agriculture</h3>
				<ul>
					<li>
						No-till cultivation – growing crops without plowing preserves soil
						structure and the beneficial microbes within.
					</li>
					<li>
						Advanced nitrogen fertilizer management – applying minimal,
						precisely measured amounts of fertilizer.
					</li>
					<li>
						Cover crops – these not only insulate and conserve soil moisture but
						can virtually eliminate the need for irrigation when done correctly.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Economic Incentives: Carbon Credits & Cover Crops</h3>
				<p>
					Many farmers are beginning to adopt regenerative practices—such as
					cover cropping, reduced tillage, and compost application—not only for
					environmental benefits but also because they can earn carbon credits.
					Programs like USDA’s COMET-Farm help farmers estimate their carbon
					footprint, and participation in regional carbon markets can offer
					financial rewards.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Regenerating Our Soil Is the Solution</h3>
				<p>
					By restoring soil biology and enhancing carbon sequestration, we can
					improve soil fertility, reduce water usage, increase crop yields, and
					mitigate climate change. As more carbon is fixed in the soil, our
					agricultural lands become more resilient and productive,
					simultaneously reducing the need for chemical inputs.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h3>Great Soil Is Your Solution</h3>
				<p>
					The evidence is clear: when soil is healthy, it naturally sequesters
					more carbon, retains moisture better, and supports higher nutrient
					density in crops. Regenerative practices—like those championed by Dr.
					Mercola and experts worldwide—are essential for reversing the damage
					caused by decades of synthetic fertilizer use.
				</p>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<p>
					<a
						href="https://www.drmercola.com"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Click here to see the above article on Dr. Mercola's website.
					</a>
				</p>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h3>Take Action Today</h3>
				<ul>
					<li>
						<strong>Call:</strong>{" "}
						<a
							href="tel:18885883139"
							style={{ color: "blue", textDecoration: "underline" }}>
							1-888-588-3139
						</a>{" "}
						to speak to a soil health consultant.
					</li>
					<li>
						<strong>Email:</strong>{" "}
						<a
							href="mailto:info@ag-usa.net"
							style={{ color: "blue", textDecoration: "underline" }}>
							info@ag-usa.net
						</a>
					</li>
					<li>
						<strong>Order MycorrPlus now!</strong>{" "}
						{/* You can replace this with an internal Next.js Link if desired */}
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<em>
						Great Soil Is Your Solution – Because a healthier soil means a
						healthier planet and a more prosperous future for all.
					</em>
				</p>
			</section>
		</div>
	);
};

export default Sequestion;
