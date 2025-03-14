import Link from "next/link";
import React from "react";

const SoilMaxx = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>SoilMaxx</h1>
			<p>
				<strong>
					Soil Amendment, Auxiliary Soil and Plant Substance (ASPS)
				</strong>
			</p>
			<p>
				Now, two of Paul's sons – along with other family members – have joined
				in the quest for soil excellence. After many breakthroughs at Tech Ag,
				Paul Jr. developed a product that achieves Paul Sr.'s lifelong goal.
				Laboratory tests show that SoilMaxx makes a wealth of nutrients
				available to plants (and livestock). Crops go from "blah" to exciting,
				and year after year the soil just keeps getting better. With MycorrPlus
				(formerly GroPal Balance), growers not only experience increased
				production, but also save a fortune on fertilizer. Soil and pH come into
				balance, and healthy microbes displace harmful nematodes and pathogens.
			</p>
			<p>
				<strong>Please contact us today for more details.</strong>
			</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Other Websites</h2>
				<ul>
					<li>
						<a
							href="http://www.healthy-vegetable-gardening.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "blue", textDecoration: "underline" }}>
							Healthy Vegetable Gardening
						</a>
					</li>
					<li>
						<a
							href="http://www.best-constipation-remedies.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "blue", textDecoration: "underline" }}>
							Best Constipation Remedies
						</a>
					</li>
					<li>
						<a
							href="http://www.AidtheChildren.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "blue", textDecoration: "underline" }}>
							Aid the Children
						</a>
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Our Office/Warehouse</h2>
				<p>
					Currently our office/warehouse is located at:
					<br />
					119 Palmetto Rd., Tyrone, GA
				</p>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "10px",
						justifyContent: "center",
						marginTop: "10px",
					}}>
					<img
						src="/images/warehouse1.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse2.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse3.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse4.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse5.jpg"
						alt="Lots of product in stock"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse6.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse7.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
					<img
						src="/images/warehouse8.jpg"
						alt="AG-USA warehouse"
						style={{ maxWidth: "200px", width: "100%" }}
					/>
				</div>
			</section>
		</div>
	);
};

export default SoilMaxx;
