import Link from "next/link";
import React from "react";

const NATHayMaxPage = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>NATHayMax – Premium Hay Conditioner</h1>
			<h2>The Best Hay Preserver on the Market!</h2>

			<section style={{ marginTop: "20px" }}>
				<h3>Bale Hay How You Want, When You Want!</h3>
				<p>
					Farm life is busy enough. With NATHayMax, you no longer have to wait
					for hay to dry down or bale at odd hours. Say goodbye to night-time
					baling, rot, and mold. Now you can bale hay during the day—even at up
					to 25% moisture!
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Directions for Use</h3>
				<ul>
					<li>Spray on windrowed hay or at the mouth of the baler.</li>
					<li>
						Apply at a rate of 5 pints per ton of hay (up to 25% moisture).
					</li>
					<li>
						For better coverage, mix HayMax 1:1 with water and apply at 10 pints
						per ton.
					</li>
					<li>Use at least two nozzles for even application.</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Key Benefits</h3>
				<ul>
					<li>Keeps hay leaves intact, preserving essential nutrients.</li>
					<li>Allows baling at higher moisture, reducing wait time.</li>
					<li>Minimizes rot, mold, and moisture loss.</li>
					<li>Improves forage quality for better animal nutrition.</li>
					<li>Reduces field losses and increases profitability.</li>
					<li>
						Does not contain corrosive propionic acid—protecting your equipment.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Quick Reference Guide</h3>
				<p>
					<strong>What is it?</strong> A premium hay conditioner derived from
					water, zinc sulfate, lactic acid, copper sulfate, and molasses.
				</p>
				<p>
					<strong>Why use it?</strong> To eliminate drying wait times, bale hay
					at up to 25% moisture, preserve nutritional quality, and boost
					profits.
				</p>
				<p>
					<strong>Application:</strong> 5 pints per ton (or 10 pints per ton
					when diluted 1:1 with water).
				</p>
				<p>
					<strong>Cost:</strong> $90 per 5‑gallon bucket ($18/gal) or $15 per
					gallon by tote (prices subject to change).
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link href="/purchase-haymax">
						<a
							style={{
								color: "blue",
								textDecoration: "underline",
								fontWeight: "bold",
							}}>
							Click here to buy HayMax or Sila‑Tec
						</a>
					</Link>
				</p>
				<p>
					<Link href="/contact">
						<a style={{ color: "blue", textDecoration: "underline" }}>
							Contact us for more details
						</a>
					</Link>
				</p>
			</section>
		</div>
	);
};

export default NATHayMaxPage;
