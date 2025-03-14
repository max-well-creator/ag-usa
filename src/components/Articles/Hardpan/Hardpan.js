import Link from "next/link";
import React from "react";

const OvercomingHardpan = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Overcoming Hardpan: How to Free Up Tight Soils</h1>

			<section style={{ marginTop: "30px" }}>
				<h2>Compaction and Hardpan Cause Numerous Problems</h2>
				<ul>
					<li>
						Less water infiltration and drainage – precious water runs off or
						stands instead of soaking in.
					</li>
					<li>Reduced root penetration, leading to lower yields.</li>
					<li>
						Grassy weeds thrive in compact soils and can become very
						problematic.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>The Best Way to Overcome Hardpan</h2>
				<p>
					The best way to reduce compaction and hardpan is not by plowing or
					using an aerator (which may help but also damage root structures).
					Instead, activating carbon sequestration is the most effective method.
					MycorrPlus-A and O (organic) are the best and fastest way we know to
					achieve this.
				</p>
				<p>
					MycorrPlus contains beneficial bacteria that restore balance to the
					soil by removing toxins and salts, creating the perfect environment
					for mycorrhizal fungi to flourish. In response, plants secrete large
					amounts of sugars into the soil (carbon sequestration) to feed the
					microorganisms.
				</p>
				<p>
					The bacteria then use these sugars as gums and glues to bond soil
					particles together, creating a network of aggregates that improve
					water infiltration and root penetration. Over time, these processes
					stretch the boundaries of healthy soil deeper and deeper, making
					hardpan disappear.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>Balancing Soil Nutrients</h2>
				<p>
					Magnesium tends to bind up the soil, while calcium helps create space
					for proper aeration and drainage. MycorrPlus helps to balance these
					nutrients—including calcium—thus improving overall soil health and pH.
				</p>
				<p>
					<Link
						href="/lab-reports"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click here to see lab reports
					</Link>{" "}
					that demonstrate how, after applying MycorrPlus-A or O, calcium (along
					with NPK) has increased significantly as the soil comes into balance.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>Customer Experience</h2>
				<p>
					Elaine and her husband own a 1,000-acre farm in southern Georgia.
					Despite rotational grazing, their soil compaction had worsened, and
					their clover wasn’t growing well. After applying MycorrPlus-A to their
					pastures and hay fields in mid-summer, progress was evident:
				</p>
				<ul>
					<li>
						After 3 weeks, soil probes went down 2.5 inches in treated areas,
						while they wouldn’t penetrate the untreated soil.
					</li>
					<li>After 2 months, probes measured 4 inches in treated areas.</li>
					<li>
						After 4 months, probes easily penetrated 6 inches, with moisture
						present at 5 inches deep—even during a hot, dry fall.
					</li>
				</ul>
				<p>
					MycorrPlus not only removes compaction and hardpan—it flocculates the
					soil so that air flows down to support aerobic bacteria, which
					continue to improve soil structure over time.
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<h2>Ready to Transform Your Soil?</h2>
				<p>
					<Link
						href="/purchase-mycorrplus"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Buy MycorrPlus now!
					</Link>
				</p>
			</section>
		</div>
	);
};

export default OvercomingHardpan;
