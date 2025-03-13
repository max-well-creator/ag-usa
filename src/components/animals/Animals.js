import Link from "next/link";
import React from "react";

const OceanTraceForAnimalWater = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			{/* Header / Logo */}
			<header style={{ textAlign: "center", marginBottom: "30px" }}>
				<img
					src="/images/ocean-trace-logo.png"
					alt="Ocean Trace Logo"
					style={{ maxWidth: "200px", marginBottom: "10px" }}
				/>
				<h1>Ocean Trace</h1>
				<h2>Sea Minerals for Animal Drinking Water</h2>
			</header>

			{/* Introduction */}
			<section>
				<p>
					You can provide your animals with exceptional drinking water by using
					the AG-USA water treatment program:
				</p>
				<ol>
					<li>Filter the water, if needed.</li>
					<li>Add Ocean Trace to the water.</li>
					<li>Pass the water through a NAT Water Structuring Machine.</li>
				</ol>
				<p>
					Previously, Ocean Trace was listed for organic use for animal drinking
					water. Although demand was low for that listing, you can be assured
					that this product is organic in nature.
				</p>
			</section>

			{/* Importance of Good Drinking Water */}
			<section style={{ marginTop: "30px" }}>
				<h3>Is Good Drinking Water That Important?</h3>
				<p>
					Many Americans recognize that good drinking water is essential for
					maintaining health—filtering water or buying bottled water to remove
					chlorine and other chemicals. But have we ever considered that poor
					water quality might also affect our animals?
				</p>
				<p>
					AG-USA wants to help improve the quality of the water you give to your
					animals. Our cutting-edge technology is now available for livestock,
					too.
				</p>
			</section>

			{/* Our Program */}
			<section style={{ marginTop: "30px" }}>
				<h3>Our Water Treatment Program</h3>
				<p>Our program is simple, yet effective. Here’s what we recommend:</p>
				<ol>
					<li>
						<strong>Filter the water:</strong> For those rare cases where it is
						needed, place the filter before injecting Ocean Trace.
					</li>
					<li>
						<strong>Inject or add Ocean Trace:</strong> Inject Ocean Trace into
						the water or add it manually. Please contact us if you need
						assistance purchasing an injector (medicator) that suits your
						system.
					</li>
					<li>
						<strong>Water Structuring:</strong> Pass the water through a NAT
						Water Structuring Machine. This device induces a unified field of
						energy in the water molecules by drawing in biophotons, thereby
						highly structuring the water.
					</li>
				</ol>
			</section>

			{/* What Is Ocean Trace? */}
			<section style={{ marginTop: "30px" }}>
				<h3>What Is Ocean Trace?</h3>
				<p>
					We take 100 gallons of ocean water and evaporate it down to 1 gallon.
					During evaporation, most of the sodium chloride solidifies and is
					removed, leaving behind a dense sea mineral solution.
				</p>
				<p>
					The ocean naturally contains all 76 minerals found in nature. We add a
					small amount of these sea minerals to animal drinking water (typically
					1 part Ocean Trace to 2,000–4,000 parts water) to improve its quality.
				</p>
			</section>

			{/* Recommended Amount for Animals */}
			<section style={{ marginTop: "30px" }}>
				<h3>Recommended Amount for Animals</h3>
				<p>
					Inject 1 part Ocean Trace into 3,000 parts water. Alternatively, if
					adding manually, calculate the combined weight of the animals:
				</p>
				<ul>
					<li>0.8 ounces (12 cc) daily for every 1,000 lbs of animal weight</li>
					<li>2 tsp daily for every 400 lbs</li>
					<li>2 cc daily for every 80 lbs</li>
				</ul>
				<p>
					Always maintain a minimum ratio of 1,000 parts water to 1 part Ocean
					Trace.
				</p>
			</section>

			{/* Recommended Amount for Fowls */}
			<section style={{ marginTop: "30px" }}>
				<h3>Recommended Amount for Fowls</h3>
				<p>
					For a 32,000-bird chicken house where about 45,000 gallons of water
					are consumed during a 40-day grow-out, at a 1:3,000 ratio, you will
					need approximately 15 gallons of Ocean Trace per grow-out. This is
					equivalent to roughly 3/8 oz (12 cc) per 1,000 lbs of birds per day.
					The same amount works for chickens, geese, ducks, turkeys, and other
					fowl.
				</p>
			</section>

			{/* Water Structuring Machine */}
			<section style={{ marginTop: "30px" }}>
				<h3>Water Structuring</h3>
				<p>
					A NAT Water Structuring Machine induces a unified field of energy in
					the water molecules by drawing in biophotons. The more biophotons
					present, the more highly structured the water becomes.
				</p>
				<p>
					<Link
						href="/nat-water-structuring-machines"
						style={{ color: "blue", textDecoration: "underline" }}>
						Check out our NAT Water Structuring Machines
					</Link>
				</p>
			</section>

			{/* Call to Action */}
			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<h2>Ready to Improve Your Animal Drinking Water?</h2>
				<p>
					<Link
						href="/purchase-ocean-trace"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Purchase Ocean Trace
					</Link>
				</p>
				<p>
					For more information, please{" "}
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						contact us
					</Link>
					.
				</p>
			</section>
		</div>
	);
};

export default OceanTraceForAnimalWater;
