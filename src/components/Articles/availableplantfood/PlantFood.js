import Link from "next/link";
import React from "react";

const MoreAvailablePlantFood = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>More Available Plant Food: How to Free Up Nutrients in the Soil</h1>

			<section style={{ marginTop: "30px" }}>
				<h2>You Can Have it All!</h2>
				<ul>
					<li>Increased uptake of nutrients</li>
					<li>Increased cation exchange (CEC)</li>
					<li>Higher plant energy</li>
					<li>Stimulated root growth</li>
					<li>Increased plant growth</li>
					<li>Better drought tolerance</li>
					<li>The encapsulating and holding of nitrogen</li>
					<li>Reduced nutrient leaching</li>
					<li>Greater plant immunity</li>
					<li>Accelerated seed germination</li>
					<li>Toxins and salts digested and flushed down through the soil</li>
					<li>Increased organic matter in the soil</li>
				</ul>
				<p>
					MycorrPlus-A or O (formerly called GroPal Balance) are highly
					concentrated organic fertilizer/bio-stimulants that can accomplish all
					of the above.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>How MycorrPlus-A and O Work</h2>
				<p>
					Instead of feeding the plant directly with NPK, we supply a host of
					microorganisms that convert tied-up nutrients in the soil into
					available plant food.
				</p>
				<p>
					The best way to get good yields and build the soil is to fully utilize
					these microorganisms. Fertilizing with NPK bypasses the helpful
					microbes. MycorrPlus encourages the plant to manufacture large amounts
					of sugar (carbon) and send it through its roots into the soil to
					colonize and feed the microorganisms.
				</p>
				<p>
					These microorganisms convert unavailable nutrients into available
					plant food. The sugars secreted by the plant act like glue to bind
					soil particles together, creating air spaces, eliminating compaction,
					and producing humus. As air flows down into the soil, nitrogen-fixing
					bacteria convert nitrogen into urea, which other microbes then convert
					into available plant food. Meanwhile, beneficial bacteria break down
					chemicals, flush toxins, and remediate salts away from the root zone.
				</p>
				<p>
					The result is an ideal growing environment where aerobic bacteria,
					fungi, and beneficial nematodes displace harmful anaerobic organisms.
				</p>
				<p>
					<Link
						href="/lab-test-results"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click here to view lab tests demonstrating how MycorrPlus frees up
						tied-up nutrients.
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>Things That Make MycorrPlus-A and O Great Products</h2>
				<ul>
					<li>Generally, just one soil application a year</li>
					<li>Excellent for balancing soil</li>
					<li>Increased Cation Exchange benefits next year’s crops</li>
					<li>Enhanced nutrients in crops and forage</li>
					<li>Greater nutrient density leads to healthier livestock</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>What’s in MycorrPlus?</h2>
				<p>MycorrPlus is very well balanced and contains:</p>
				<ul>
					<li>GroPal, a sea mineral concentrate</li>
					<li>Humic & fulvic acids</li>
					<li>Fish and kelp</li>
					<li>Molasses</li>
					<li>70 strains of aerobic bacteria</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>3 Ways MycorrPlus-A and O Work</h2>
				<ol>
					<li>
						<strong>Provides Essential Nutrients:</strong> Supplies a host of
						nutrients—including many trace minerals from ocean water—that the
						plant needs.
					</li>
					<li>
						<strong>Stimulates Beneficial Microbes:</strong> Encourages the
						proliferation of aerobic bacteria and mycorrhizal fungi, making
						tied-up nutrients available.
					</li>
					<li>
						<strong>Energizes the Plant:</strong> Stimulates the plant to
						sequester sugars (carbon) through its roots, which in turn feed the
						soil microorganisms.
					</li>
				</ol>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
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
						Check this out! We have an application for every budget – Purchase
						MycorrPlus now!
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>Get Inspired</h2>
				<p>
					Read the following article and let it inspire you with the
					possibilities:
				</p>
				<p>
					<Link
						href="/dr-christine-jones-interview"
						style={{ color: "blue", textDecoration: "underline" }}>
						Read Dr. Christine Jones’ article on building more carbon in our
						soils
					</Link>
				</p>
			</section>
		</div>
	);
};

export default MoreAvailablePlantFood;
