import Link from "next/link";
import React from "react";

const BuildOrganicMatter = () => {
	return (
		<div
			className="increasing-soil-organic-matter"
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Increasing Soil Organic Matter – It's All About Carbon!</h1>
			<p>
				The higher the organic matter, the greater the Cation-exchange Capacity
				(CEC) – and the better the yields and nutrient density!
			</p>
			<p>
				Most growers try cover crops, green manure, crop litter, compost, and
				mulch to increase organic matter. Although these methods work, they are
				not the long-term answer. There is a much better solution!
			</p>
			<p>
				<strong>The secret formula is:</strong> Organic matter is{" "}
				<strong>CARBON</strong>, and <strong>CARBON is organic matter</strong>.
			</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Article Overview</h2>
				<p>
					Should we feed the plant directly with NPK, or should we utilize
					microorganisms to convert tied‐up nutrients into available plant food?
					The best way to get good yields while building the soil is to fully
					utilize microorganisms.
				</p>
				<p>
					Encouraging the plant to manufacture large amounts of sugar (carbon)
					and send it into the soil via its roots creates a thriving microbial
					environment. These microbes then convert unavailable nutrients into
					available plant food, bind soil particles together, eliminate
					compaction, and produce humus.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>INTERVIEW: SOS – Save our Soils</h2>
				<p>
					Dr. Christine Jones explains the life-giving link between carbon and
					healthy topsoil. For decades, she has helped farmers and ranchers
					implement regenerative systems that boost biodiversity, carbon
					sequestration, nutrient cycling, water management, and productivity.
				</p>
				<p>
					<em>
						"People have confused the weathering of rock—a very slow
						process—with the building of topsoil, which is altogether different.
						Most of the ingredients for new topsoil come from the
						atmosphere—carbon, hydrogen, oxygen, and nitrogen."
					</em>
				</p>
				<p>
					Dr. Jones emphasizes that the flow of liquid carbon (dissolved sugars)
					from plant roots into the soil is the primary pathway for rapid
					topsoil formation.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>How MycorrPlus Facilitates Rapid Topsoil Formation</h2>
				<p>
					MycorrPlus provides a host of nutrients – including trace minerals
					from ocean water – that supply the soil with everything needed for
					optimum plant growth. It stimulates beneficial aerobic bacteria and
					mycorrhizal fungi, creating a high-energy, balanced soil.
				</p>
				<p>
					As microbes feed on plant-secreted sugars, they make nutrients
					available to the plant. This encourages the plant to secrete even more
					sugars into the soil, reinforcing the cycle of carbon sequestration
					and rapid topsoil formation.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Benefits of Sequestering Carbon into the Soil</h2>
				<p>
					Carbon is essential for soil structuring and water retention. As
					liquid carbon flows into soil aggregates, it acts as a natural glue,
					binding soil particles together to form stable structure and humus.
				</p>
				<p>
					This process creates air spaces that enable nitrogen-fixing bacteria
					to function, boosting plant nutrition and growth.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Weaning Off NPK Fertilizers</h2>
				<p>
					Dr. Jones recommends a gradual transition from chemical fertilizers to
					a system based on a thriving plant-microbial bridge. Typically, this
					involves reducing synthetic nitrogen by 20% the first year, 30% the
					next, and 30% the third year.
				</p>
				<p>
					With MycorrPlus, the plant-microbial bridge is established rapidly,
					which may even shorten the transition period. Foliar applications of
					trace minerals (such as MycorrPlus F) can further support this
					process.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Why Chemical Fertilizers Hinder Soil Building</h2>
				<p>
					When plants obtain nutrients too easily via chemical fertilizers, they
					may reduce the secretion of carbon into the soil. This interruption
					hampers soil aggregation and new topsoil formation. Nurturing a robust
					microbial community is key to unlocking bound nutrients and building
					organic matter.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Maintaining Soil Aggregates</h2>
				<p>
					Keeping the soil covered and minimizing tillage protects beneficial
					microbes and mycorrhizal fungi. Cover crops and companion plants help
					preserve soil structure by maintaining air spaces essential for
					moisture infiltration and retention.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Minimizing Chemical Applications</h2>
				<p>
					Reducing the use of fungicides, insecticides, and herbicides is
					crucial because these chemicals can damage the soil's microbial
					community. A diverse and active microbiome is vital for converting
					tied-up nutrients into available plant food and building organic
					matter.
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>MycorrPlus: The Advanced System for Carbon Sequestration</h2>
				<p>
					MycorrPlus is the most advanced system available for triggering carbon
					sequestration and rapid topsoil formation. For most applications, only
					20 ounces per acre is needed to set off a cascade of microbial
					activity, improved nutrient availability, and enhanced soil structure.
				</p>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
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
				<p>
					<Link
						href="/carbon-benefits-article"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Click here for an article highlighting the need and benefits of
						building more carbon in our soils.
					</Link>
				</p>
			</section>

			<section style={{ marginTop: "20px", textAlign: "center" }}>
				<Link
					href="/back"
					style={{ color: "blue", textDecoration: "underline" }}>
					BACK
				</Link>
			</section>
		</div>
	);
};

export default BuildOrganicMatter;
