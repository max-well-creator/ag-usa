import Link from "next/link";
import React from "react";

const MycorrPlusForCorn = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>MycorrPlus™ for Corn</h1>
			<p>(MycorrPlus is the new name for GroPal Balance)</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Application Benefits</h2>
				<ul>
					<li>Up to 10–20% yield increase</li>
					<li>Higher test weights and protein</li>
					<li>Larger root mass for better nutrient uptake</li>
					<li>
						Enhanced mycorrhizal networks (improved P, moisture, and nutrients)
					</li>
					<li>Improved seed germination and fertilizer efficiency</li>
					<li>Reduced compaction and enhanced moisture retention</li>
					<li>Lower weed pressure and increased plant immunity</li>
					<li>
						Flushed salts and increased organic matter (raising CEC and
						balancing pH)
					</li>
					<li>Greater Relative Feed Value and more earthworms</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Entry Level Application</h2>
				<p>If you plan to make just one application of MycorrPlus:</p>
				<ol>
					<li>
						Apply <strong>1 qt/acre</strong> in the row (on the seed or banded
						over the row).
					</li>
					<li>
						Alternatively, side-dress with 1–2 quarts per acre—with or without
						28%/32% nitrogen (reduce N to 80–90 lbs/200 bushel corn).
					</li>
					<li>Or broadcast 1–2 quarts/acre at or before planting.</li>
				</ol>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Secondary Applications</h2>
				<ul>
					<li>
						If using 28%/32% nitrogen, add a pint to a quart of MycorrPlus-A per
						application and reduce N by 30% or more.
					</li>
					<li>
						Apply 1 quart of MycorrPlus-A or O 5 weeks after planting, or apply
						a foliar treatment (MycorrPlus-F or O-F) at tassel.
					</li>
					<li>
						Consider applying 1–2 quarts/acre in the summer, fall, or winter to
						prepare for next year’s crop.
					</li>
					<li>
						If using anhydrous ammonia, wait two or more weeks post-application,
						then apply 1 quart MycorrPlus-A.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Application Guidelines for Liquid Nitrogen</h2>
				<p>
					MycorrPlus is compatible with 28%/32% nitrogen. Add MycorrPlus to the
					tank first, then water, and finally your nitrogen. Mixing MycorrPlus-A
					with nitrogen helps bind it to the soil, reducing leaching. This may
					allow a 30% cut in your nitrogen use.
				</p>
				<p>
					<strong>Important:</strong> Never mix MycorrPlus with phosphorus or
					potassium to avoid gel formation.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>For Organic/Biological Growers</h2>
				<p>Use MycorrPlus-O as follows:</p>
				<ul>
					<li>
						Apply 1 qt/acre in the row (or banded over the row) if possible;
						broadcast 1–2 qt/acre if not.
					</li>
					<li>
						For foliar applications, use 3 qt/acre of MycorrPlus-O-F (or 2
						qt/acre of MycorrPlus-F for non-organic growers) at tassel.
					</li>
					<li>
						Additional applications in summer, fall, or winter can further
						transform the soil.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Why Use MycorrPlus for Corn?</h2>
				<p>
					MycorrPlus stimulates beneficial aerobic bacteria and mycorrhizal
					fungi that:
				</p>
				<ul>
					<li>Improve soil structure by reducing compaction and hardpan</li>
					<li>Enhance moisture retention and nutrient uptake</li>
					<li>
						Bind nitrogen to prevent leaching, potentially cutting nitrogen
						requirements by 30–50%
					</li>
					<li>
						Free up existing phosphorus and potassium, reducing overall
						fertilizer needs
					</li>
				</ul>
				<p>
					This leads to healthier, more productive corn with higher yields and
					superior nutrient density.
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Call 1-888-588-3139 to speak with a soil health consultant
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
						Read Dr. Christine Jones' interview for more insights
					</Link>
				</p>
				<p>
					<Link
						href="/crop-application-guidelines"
						style={{ color: "blue", textDecoration: "underline" }}>
						Check our detailed crop application guidelines
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<p>
					Apply MycorrPlus as early as possible for better corn production, and
					experience the transformation of your soil and crop yields.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<Link
					href="/back"
					style={{ color: "blue", textDecoration: "underline" }}>
					Back
				</Link>
			</section>
		</div>
	);
};

export default MycorrPlusForCorn;
