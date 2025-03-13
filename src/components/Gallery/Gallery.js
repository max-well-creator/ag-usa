import Link from "next/link";
import React from "react";

const PhotoGallery = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Plants and Soils Treated with Soil Balance</h1>
			<p>(Soil Balance is the soil-building ingredient in MycorrPlus)</p>

			<section style={{ marginTop: "30px" }}>
				<h2>Untreated Field</h2>
				<ul>
					<li>Tight, compacted soil</li>
					<li>Anaerobic bacterial activity</li>
					<li>No earthworms</li>
					<li>Reduced plant growth</li>
				</ul>
				<div style={{ textAlign: "center", marginTop: "10px" }}>
					{/* Replace src with actual image path for untreated field */}
					<img
						src="/images/untreated-field.jpg"
						alt="Untreated Field - Compact Soil"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>Treated Field</h2>
				<ul>
					<li>Flocculated, crumbly soil</li>
					<li>Aerobic bacterial activity</li>
					<li>Abundance of earthworms</li>
					<li>Increased plant growth</li>
				</ul>
				<div style={{ textAlign: "center", marginTop: "10px" }}>
					{/* Replace src with actual image path for treated field */}
					<img
						src="/images/treated-field.jpg"
						alt="Treated Field - Flocculated Soil"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>
			</section>

			<section style={{ marginTop: "40px" }}>
				<p>
					<strong>Key Differences:</strong> The treated field yielded a ton more
					per acre than the untreated field. The treated field received only
					Soil Balance—without any additional fertilizer—whereas the untreated
					field was given 60# of dry nitrogen and 20 lbs (100 lbs 0-20-0) of
					phosphorus. Santa Anita Raceway even chose the treated field because
					the horses wouldn’t touch the untreated one.
				</p>
				<p>
					In the treated area, numerous earthworms were observed within a month
					after application, while no earthworms could be found in the untreated
					field.
				</p>
			</section>

			<section
				style={{
					marginTop: "40px",
					backgroundColor: "#f5f5f5",
					padding: "20px",
				}}>
				<h2>Testimonial</h2>
				<p>
					"After treating half my pasture with Soil Balance in the fall, I
					noticed a few months later that the cattle were crossing the
					belly-high grass on the untreated part of the pasture to get to the
					pond. They then returned to the treated portion to continue grazing on
					the treated grass (which by then was down to the nubs) without
					stopping to eat the high untreated grass while passing through it to
					get back to the treated side."
				</p>
				<p>
					The customer called to ask why this was happening—until he remembered
					that the favored grazing area was the part of the field treated with
					Soil Balance. It makes a <strong>DIFFERENCE!</strong>
				</p>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<h2>The Difference Between Flocculated and Compacted Soil</h2>
				<p>
					<em>Untreated on the left – Treated on the right</em>
				</p>
				<p>Which soil would you prefer?</p>
			</section>

			<section style={{ marginTop: "40px" }}>
				<h2>How Soil Balance Works</h2>
				<p>
					Soil Balance contains many components, including fulvic acid, humates,
					fish, and all of the known essential micro and macro nutrients. It
					also provides a diverse array of aerobic bacteria, fungi, and other
					soil organisms—all native to healthy soil. Molasses is used as an
					energy source for these microorganisms.
				</p>
				<p>
					Once applied, the microorganisms multiply rapidly (with bacterial
					increases recorded up to 10^23 within 48 hours, if conditions are
					right). They begin digesting and removing harmful elements such as
					chemicals and anaerobic bacteria, while releasing the bound nutrients
					for plant use. This process flocculates the soil, creating air spaces
					that allow water and oxygen to flow freely—resulting in an ideal
					environment for plant growth.
				</p>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<h2>Want to Learn More?</h2>
				<ul style={{ listStyle: "none", paddingLeft: 0 }}>
					<li style={{ marginBottom: "10px" }}>
						<Link
							href="/7-keys-for-activating-carbon-sequestration"
							style={{ color: "blue", textDecoration: "underline" }}>
							7 Keys for Activating the Carbon Sequestration Switch
						</Link>
					</li>
					<li style={{ marginBottom: "10px" }}>
						<Link
							href="/benefits-of-using-mycorrplus"
							style={{ color: "blue", textDecoration: "underline" }}>
							Benefits of Using MycorrPlus
						</Link>
					</li>
					<li style={{ marginBottom: "10px" }}>
						<Link
							href="/product-application"
							style={{ color: "blue", textDecoration: "underline" }}>
							Good News! We have a product application that fits every budget.
						</Link>
					</li>
					<li>
						<Link
							href="/purchase-mycorrplus"
							style={{
								color: "blue",
								textDecoration: "underline",
								fontWeight: "bold",
							}}>
							Buy MycorrPlus now!
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default PhotoGallery;
