import Link from "next/link";
import React from "react";

const EnhancingFoodPlots = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Don't Conform; Transform!</h1>
			<h2>Enhancing Food Plots with MycorrPlus™</h2>
			<p>
				Want deer to favor your food plots? Great soil means better drought
				tolerance, less weed pressure, and more nutrient‑dense plants—ideal for
				larger racks, healthier deer, and robust livestock.
			</p>

			<section style={{ marginTop: "20px" }}>
				<h3>Stimulating Soil Life</h3>
				<p>
					MycorrPlus‑A and MycorrPlus‑O are biostimulants that revitalize soil
					life by:
				</p>
				<ul>
					<li>
						Introducing 70+ specialized aerobic bacteria (including nitrogen
						fixers)
					</li>
					<li>
						Establishing deep mycorrhizal networks to transport moisture and
						nutrients
					</li>
					<li>Attracting earthworms, which add valuable castings</li>
					<li>Displacing pathogens and harmful nematodes</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>What Our Customers Report</h3>
				<ul>
					<li>
						<strong>Calves:</strong> Faster growth (market weight reached in 10
						months), stronger and more uniform births.
					</li>
					<li>
						<strong>Cattle:</strong> Cows now preferentially graze on treated
						pasture.
					</li>
					<li>
						<strong>Deer:</strong> In Wisconsin, deer bypass neighboring corn
						fields to favor nutrient‑dense, MycorrPlus‑treated plots.
					</li>
				</ul>
				<p>
					Experts say that 97% of nutrients in the soil are tied up. MycorrPlus
					frees these nutrients and, with concentrated sea minerals, boosts
					plant nutrient density—translating into healthier animals and larger
					antler growth.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>How MycorrPlus Transforms the Soil</h3>
				<ol>
					<li>
						<strong>Structures the Soil:</strong> Microbes create trillions of
						air pockets, reducing compaction and improving water infiltration.
					</li>
					<li>
						<strong>Balances Nutrients & pH:</strong> Enhances nutrient
						availability and makes calcium accessible—often eliminating the need
						for lime.
					</li>
					<li>
						<strong>Supports Mycorrhizal Fungi:</strong> Promotes deep root
						activity by supplying sugars through photosynthesis, allowing fungi
						to deliver essential nutrients back to the plant.
					</li>
					<li>
						<strong>Boosts Carbon Sequestration:</strong> Sequestered sugars
						build organic matter, creating a rich, sponge-like topsoil.
					</li>
					<li>
						<strong>Remediates Salts:</strong> In saline soils, it flushes out
						salts from the root zone.
					</li>
				</ol>
				<p>
					Healthier soil means healthier plants—and when plants are nutrient
					dense, livestock (and deer!) thrive.
				</p>
			</section>

			<section style={{ marginTop: "20px", textAlign: "center" }}>
				<p>
					<Link
						href="/testimonials"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click here to read more customer testimonials
					</Link>
				</p>
				<p>
					<Link
						href="/videos"
						style={{ color: "blue", textDecoration: "underline" }}>
						Watch video transcriptions and more MycorrPlus™ videos
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/purchase-mycorrplus"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Purchase MycorrPlus™ now!
					</Link>
				</p>
			</section>
		</div>
	);
};

export default EnhancingFoodPlots;
