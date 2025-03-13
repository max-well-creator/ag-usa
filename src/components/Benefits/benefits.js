import Link from "next/link";
import React from "react";

const BenefitsOfMycorrPlus = () => {
	return (
		<div
			className="benefits-mycorrplus"
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Benefits of MycorrPlus (formerly called GroPal Balance)</h1>

			<section style={{ marginTop: "20px" }}>
				<h2>Keep Your Crops Growing When It Turns Hot and Dry</h2>
				<p>
					Anyone else want to keep your crops growing when it turns hot and dry?
					That's what Richard Fish did! MycorrPlus is like a center pivot for
					dryland farmers!
				</p>
				<blockquote
					style={{
						margin: "20px 0",
						padding: "10px",
						borderLeft: "4px solid #ccc",
					}}>
					<p>
						"When the hot, dry July weather came when grass normally goes back,
						the MycorrPlus (GroPal Balance) grass just kept coming on."
					</p>
				</blockquote>
				<p>
					<Link
						href="/video-transcription"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click for the transcription of the 4 min. video
					</Link>
				</p>
				<p>
					<Link
						href="/more-videos"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click here to view more MycorrPlus (GroPal Balance) videos
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>Challenges with Weak Soils</h2>
				<ul>
					<li>Weak soils cause problems</li>
					<li>Weeds keep coming back</li>
					<li>Water runs off instead of soaking in</li>
					<li>Poor production</li>
					<li>Poor animal health</li>
				</ul>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>Results of Properly Functioning Soil</h2>
				<ul>
					<li>Nutrients become highly available</li>
					<li>An increase in organic matter</li>
					<li>Plants become highly nutritious</li>
					<li>Yields increase</li>
					<li>
						Livestock become super healthy, resulting in greater production
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<h2>Could a Single Product Help You Keep Your Moisture? Yes!</h2>
			</section>

			<section style={{ marginTop: "20px" }}>
				<p>
					Organic matter has increased each year that Soil Balance was used. The
					Cation Exchange increased each year, causing a rich bounty of
					nutrients to be available to the plant. Soils become highly
					structured, better utilizing moisture.
				</p>
				<p>
					<Link
						href="/side-by-side-photos"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click here to view side by side photos
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>Making Tied-Up Nutrients Available</h2>
				<p>
					When soil is functioning correctly, it is flocculated. Air flows down
					into the soil – and that air is mostly nitrogen! Look at lab results
					that show an increase of available nutrients after just one
					application of Soil Balance.
				</p>
				<p>
					MycorrPlus stimulates beneficial bacillus bacteria and mycorrhizal
					fungi. These micro-organisms help remediate toxins and salts.
				</p>
				<p>
					To visualize how MycorrPlus works in the soil, imagine an expanding
					aerobic membrane—a sack that holds in carbon and other nutrients.
				</p>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>Ways to Evaluate if MycorrPlus Is Working for You</h2>
				<h3>Visible Results</h3>
				<ul>
					<li>Fewer weeds</li>
					<li>Less water standing in the field</li>
					<li>Less compaction or hard pan</li>
					<li>Reduction in visible salts</li>
				</ul>
				<h3>Soil Test Results</h3>
				<ul>
					<li>Reduction in nematodes</li>
					<li>Increase in organic matter</li>
					<li>Increase in Cation Exchange Capacity (CEC)</li>
				</ul>
				<h3>Changes in Vegetation</h3>
				<ul>
					<li>Increase in protein content</li>
					<li>Increase in Relative Feed Value (RFV)</li>
					<li>Increase in overall production</li>
					<li>Higher Brix readings</li>
				</ul>
				<h3>Improvements in Livestock</h3>
				<ul>
					<li>Stronger calves at birth</li>
					<li>Faster weight gain</li>
					<li>Increased milk production</li>
					<li>
						Better feed utilization (less grass per pound of beef or milk)
					</li>
					<li>
						Better overall health with fewer vet visits and lower mortality
						rates
					</li>
					<li>Improved reproductive performance</li>
					<li>Better auction prices due to improved appearance</li>
				</ul>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Contact us with your questions
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
						Purchase MycorrPlus
					</Link>
				</p>
			</section>
		</div>
	);
};

export default BenefitsOfMycorrPlus;
