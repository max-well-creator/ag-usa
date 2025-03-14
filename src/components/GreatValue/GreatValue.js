import Link from "next/link";
import React from "react";

const MycorrPlusROI = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>MycorrPlus – More Bang for Your Buck!</h1>
			<p>
				A $20 per acre application for $40 per acre results! Get more "bang for
				your fertilizer dollar" with MycorrPlus.
			</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Our Story</h2>
				<p>
					My dad, Paul Schneider Sr., started Tech Ag in 1969. As an animal
					nutritionist, he has spent years helping farmers boost yields and
					improve soil quality. Our family developed a superior product line –
					and MycorrPlus stands out.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Why Choose MycorrPlus?</h2>
				<ul>
					<li>Increased yields and enhanced nutrient density</li>
					<li>Improved carbon sequestration for superior soil structure</li>
					<li>Cost-effective soil building – only 32–64 ounces per acre</li>
				</ul>
				<p>
					Imagine spending twice as much on premium liquid calcium, hydrolyzed
					fish, and humic acids without achieving these results!
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>How It Works</h2>
				<p>
					Instead of relying solely on NPK, MycorrPlus stimulates plants to
					secrete large amounts of sugar (liquid carbon) through their roots.
					This feeds beneficial bacteria and mycorrhizal fungi, which unlock and
					convert tied-up nutrients while binding soil particles together to
					create nutrient-rich topsoil.
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Call 1-888-588-3139 to speak to a soil health consultant
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
						href="/other-products"
						style={{ color: "blue", textDecoration: "underline" }}>
						View our full product line
					</Link>
				</p>
			</section>
		</div>
	);
};

export default MycorrPlusROI;
