import Link from "next/link";
import React from "react";
import styles from "./CropApplicationGuidelines.module.scss";

const CropApplicationGuidelines = () => {
	return (
		<div className={styles.container}>
			<h1>MycorrPlus™ Crop Application Guidelines</h1>
			<p>
				Use MycorrPlus to transform your crops and soil. Below are streamlined
				guidelines for various crops.
			</p>

			<section className={styles.section}>
				<h2>General Guidelines</h2>
				<p>
					Use a 20 gal/acre tank mix (or 40+ gal if no rain is expected) to
					broadcast MycorrPlus. If rain or irrigation will carry it in within 24
					hours, use a 10 gal/acre tank mix (or 3 gal with a plane). MycorrPlus
					requires at least 1" of soil moisture.
				</p>
				<p>Organic growers: Use MycorrPlus-O in place of MycorrPlus-A.</p>
				<p>
					<strong>Chemical apps:</strong> Wait 3+ days after applying herbicides
					or other chemicals before using 16–32 oz/acre of MycorrPlus-A. For
					regular chemical treatments, monthly apply 32 oz/acre.
				</p>
				<p className={styles.warning}>
					Do NOT mix MycorrPlus with herbicides, fungicides, or insecticides.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Crop-Specific Guidelines</h2>

				<h3>Pasture</h3>
				<p>
					Apply MycorrPlus-A or O once a year, any time. Standard rate is 1
					qt/acre; for faster results, use 64 oz/acre.
				</p>

				<h3>Grass Hay</h3>
				<p>
					Use 1–2 qt/acre. If nitrogen is needed, apply 28%/32% nitrogen or
					manure. For even better results, apply 2 qt/acre of MycorrPlus-F (or
					O-F for organic) as a foliar treatment 7–10 days after cutting.
				</p>

				<h3>Alfalfa</h3>
				<p>
					Strengthens roots and thickens stands. Apply 1–2 qt/acre (fall,
					winter, or spring). Optionally, foliar apply 2 qt/acre 10–15 days
					after cutting.
				</p>

				<h3>Soybeans</h3>
				<p>
					At planting, apply 1 qt of MycorrPlus-A or O in the row or banded over
					the row. Alternatively, broadcast 2 qt/acre. For yield boost, foliar
					treat with 2 qt/acre at flowering (a second treatment 3–4 weeks later
					may help).
				</p>

				<h3>Corn</h3>
				<p>
					Apply 1 qt of MycorrPlus-A in the row (on the seed). Optionally
					side-dress with an extra qt with 28%/32% nitrogen (reduce total N to
					80–90 lbs for 200- bushel corn), or broadcast 1–2 qt/acre. Five to six
					weeks after planting, an extra qt may boost yields.
				</p>
				<p>
					For anhydrous ammonia, apply 1 qt at least 2 weeks later. A top-dress
					foliar treatment of 2 qt/acre of MycorrPlus-F (or O-F) at tassel helps
					boost test weights, protein, and yields.
				</p>
				<p className={styles.externalLink}>
					<a href="/Corn" target="_blank" rel="noopener noreferrer">
						Detailed corn page
					</a>
				</p>

				<h3>Wheat, Milo, and Millet</h3>
				<p>
					Broadcast 1–2 qt/acre at planting or use 1 qt if drilling in-row. For
					winter wheat, apply in early spring. To boost yields, top-dress with 2
					qt/acre of MycorrPlus-F (or 3 qt/acre of MycorrPlus-O-F) at flag leaf.
				</p>

				<h3>Cotton</h3>
				<p>
					Apply 1 qt of MycorrPlus-A or O in the row (or broadcast 1–2 qt/acre).
					<strong>
						{" "}
						Do NOT mix with any chemicals except 28% or 32% nitrogen.
					</strong>
				</p>
				<p>
					Pre-planting: Apply 1–2 qt/acre in summer, fall, or winter to prepare
					the soil. During growth, apply 1 qt 5–6 weeks after planting or a 2 qt
					foliar treatment at boll set.
				</p>

				<h3>Peanuts</h3>
				<p>
					At planting, apply 1 qt of MycorrPlus-A or O in the row (or broadcast
					2 qt/acre). Pre-planting, use 1–2 qt/acre in summer, fall, or winter.
					<strong>
						{" "}
						Do NOT mix with any chemical except 28% or 32% nitrogen.
					</strong>
				</p>
				<p>
					For yield boost, foliar treat with 2 qt/acre every 4 weeks during
					growth. If chemicals are used, substitute with a monthly 1 qt
					application.
				</p>
				<p>
					MycorrPlus is an excellent inoculant for nodulation—no additional
					inoculant is needed.
				</p>

				<h3>Potatoes</h3>
				<p>
					In fall, winter, or early spring, apply 2 qt of MycorrPlus-A to
					prepare the soil. Use 1 qt in the row or broadcast 1–2 qt around
					planting or after herbicide application.
				</p>

				<h3>Fruit and Nut Trees</h3>
				<p>
					In fall, broadcast 1–2 qt/acre over an area twice the tree's diameter
					for next- year results. Apply early when the ground is unfrozen. In
					spring, once the tree has good leaf coverage, apply one or more foliar
					treatments of 2 qt/acre (use MycorrPlus-O-F for larger tank mixes over
					20 gal/acre). For 4+ applications, divide 2 gallons of MycorrPlus-F
					accordingly.
				</p>

				<h3>Grape Vines</h3>
				<p>
					Apply 2 qt/acre (or 1 oz per 600 sq ft) of MycorrPlus-A in fall or
					early spring to maintain neutral pH. In spring, foliar treat with 2
					qt/acre.
				</p>

				<h3>Sod Farms</h3>
				<p>
					After harvesting sod, apply 2 qt/acre of MycorrPlus-A to the soil. For
					continuous benefit, apply an extra 32 oz monthly. Do not mix with
					herbicides, pesticides, or most fertilizers.
				</p>

				<h3>Blueberries & Acid-Loving Plants</h3>
				<p>
					MycorrPlus helps balance pH but is not recommended for acid-loving
					plants.
				</p>
			</section>
		</div>
	);
};

export default CropApplicationGuidelines;
