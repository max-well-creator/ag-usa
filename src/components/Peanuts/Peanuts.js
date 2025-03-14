import Link from "next/link";
import React from "react";

const PeanutProgram = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Don't Conform; Transform!</h1>
			<h2>Improve Your Soil & Boost Peanut Yields</h2>

			<section style={{ marginTop: "20px" }}>
				<p>
					Many farmers want to improve their soil, but traditional chemical
					programs for peanuts often damage it. Our AG-USA Peanut Program uses a
					biostimulant and a foliar fertilizer to revitalize your soil—helping
					you overcome compaction, displace harmful nematodes, and replace
					costly fungicides.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Key Components</h3>
				<ol>
					<li>
						<strong>MycorrPlus-A:</strong>
						<ul>
							<li>
								Mixed with water and applied in the row (or broadcast in the
								fall) for superior nodulation.
							</li>
							<li>
								Stimulates carbon sequestration to build rich, structured soil
								and enhance root growth.
							</li>
							<li>Cost: $80/gal by bucket, $71/gal by tote.</li>
						</ul>
					</li>
					<li>
						<strong>SupressPlus:</strong>
						<ul>
							<li>
								Foliar fertilizer that replaces fungicides like Bravo and
								Headline.
							</li>
							<li>
								Suppresses fungal diseases via chloride applications while
								feeding soil life.
							</li>
							<li>Cost: $40/gal by bucket, $38/gal by tote.</li>
						</ul>
					</li>
				</ol>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>The Benefits</h3>
				<ul>
					<li>Builds organic matter and improves CEC</li>
					<li>Eliminates compaction, enhancing moisture retention</li>
					<li>Stimulates robust microbial activity for healthier roots</li>
					<li>Improves peanut nodulation and overall crop immunity</li>
					<li>Reduces the need for expensive chemical inputs</li>
					<li>
						Potential 10–20% yield increases and cost savings of up to 20%
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<p>
					Grow more peanuts on fewer inputs while restoring your soil naturally!
					Our program is available on a trial basis for 20 peanut farmers, with
					discounted pricing on a minimum of 15 acres.
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Call 1-888-588-3139, ext. 6 to speak with Preston Haag
					</Link>
				</p>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Email Preston at preston@ag-usa.net
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
						Read the AcresUSA interview with Dr. Christine Jones
					</Link>
				</p>
			</section>
		</div>
	);
};

export default PeanutProgram;
