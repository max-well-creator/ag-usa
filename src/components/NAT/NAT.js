import Link from "next/link";
import React from "react";

const NATStructuredWater = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Structured Water is Amazing</h1>
			<p>
				Discover the powerful benefits of highly structured water produced by
				Natural Action Technology's water structuring machines.
			</p>
			<p>
				<Link href="/NAT">
					Click here to view the full line of NAT products available to you
				</Link>
			</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Biophoton Structured Water: Rich in Benefits</h2>
				<ul>
					<li>Improved taste and smoother flavor</li>
					<li>Eliminates sediment in laundry water</li>
					<li>Enhances seed germination and plant growth</li>
					<li>Increases brix and nutrient density of produce</li>
					<li>Boosts life force energy (biophotons) in the body</li>
					<li>Transfers its energy to nearby liquids via entrainment</li>
					<li>Improves hydration with lower surface tension</li>
					<li>Reduces chlorine needs and prevents scale buildup in pools</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>How It Works</h2>
				<p>
					Structured water is water in its natural, organized state. When water
					flows down a mountain stream, it becomes structured—free of memory and
					balanced in pH. By increasing its structure, the biophoton content
					rises dramatically, as documented by microscopic studies. Adding Ionic
					Sea Minerals can help maintain this structure for months.
				</p>
				<p>
					Once you drink structured water, its energy transfers to surrounding
					water, instantly structuring it throughout your body. This effect is
					evident in improved taste, hydration, and even clearer, scale-free
					pool water.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Scientific Proof</h2>
				<p>
					Independent tests from the AGALIS Lab demonstrate that highly
					structured water produces crystal patterns indicative of increased
					biophoton energy and mineral solubility. These "star-shaped" hexagonal
					structures mirror the qualities of excellent spring water, offering
					higher vitality and bioavailability of trace elements.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Dynamically Enhanced Units!</h2>
				<p>
					Our new Dynamically Enhanced Units use proprietary materials to boost
					the energy of structured water—even before the water flows through.
					These units:
				</p>
				<ul>
					<li>Neutralize inorganic compounds, pesticides, and heavy metals</li>
					<li>Counteract electromagnetic field effects</li>
					<li>Enhance immunity and rejuvenate the skin</li>
					<li>Purify water and increase its energetic properties</li>
				</ul>
				<p>
					<Link href="/nat-products">
						Click here to see the full line of NAT products
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<h2>Structured Water Machines</h2>
				<p>
					Thank you for your interest in our water structuring units, developed
					by Natural Action Technologies and inventor Clayton M. Nolte.
				</p>
				<p>
					<Link href="/structured-water-benefits">
						Click here to read about the benefits of structured water
					</Link>
				</p>
				<p>
					<Link href="/store">Visit our store for NAT products</Link>
				</p>
			</section>
		</div>
	);
};

export default NATStructuredWater;
