import Link from "next/link";
import React from "react";

const SoilStructureDroughtTolerance = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Soil Structure is the Key to Superior Drought Tolerance</h1>
			<p>
				What if you could grow more grass on half the water? Poor soil structure
				wastes water through run-off, while well-structured soil stores moisture
				in billions of tiny air spaces (capillaries) and releases it when
				needed. Well-structured soil also resists erosion.
			</p>

			<section style={{ marginTop: "20px" }}>
				<h2>The Power of Carbon Sequestration</h2>
				<p>
					The best way to improve soil structure is by boosting carbon
					sequestration. In nature, plants use photosynthesis to produce extra
					sugars. These sugars (mostly built from materials in the air) are
					secreted by roots to feed soil microbes, which then bind soil
					particles together to form stable, nutrient-rich topsoil.
				</p>
				<p>
					MycorrPlus-A and O excel at stimulating this process, rapidly creating
					topsoil that can hold more water – an ideal way to prepare for
					drought.
				</p>
				<p>
					<em>
						Note: At least 1.1" of moisture is needed to kick-start this
						process.
					</em>
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
						href="/dr-christine-jones-interview"
						style={{ color: "blue", textDecoration: "underline" }}>
						Read Dr. Christine Jones’ article for more inspiration.
					</Link>
				</p>
			</section>
		</div>
	);
};

export default SoilStructureDroughtTolerance;
