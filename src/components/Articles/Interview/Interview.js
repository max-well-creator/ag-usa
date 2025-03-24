import React from "react";
import styles from "./Interview.module.scss";

const Interview = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.title}>Walter Jehne Interview</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<p className={styles.info}>Interviewed by Tracy Frisch</p>
				<p className={styles.link}>
					For the full version, visit{" "}
					<a
						href="https://www.ecofarmingdaily.com/supporting-the-soil-carbon-sponge/"
						target="_blank"
						rel="noopener noreferrer">
						www.ecofarmingdaily.com
					</a>
				</p>
			</header>
			<section className={styles.introduction}>
				<p>
					Walter Jehne is an internationally known Australian soil
					microbiologist, climate scientist, and founder of Healthy Soils
					Australia. He is passionate about educating farmers, policymakers, and
					others about “the soil carbon sponge” and its crucial role in
					reversing and mitigating climate change.
				</p>
				<p>
					His work shows how we can safely cool the climate by repairing our
					disrupted hydrological cycles—returning excess carbon in the
					atmosphere to the soil, where it belongs. In 2017, he participated in
					an invitation-only UN FAO conference in Paris aimed at bringing soil
					into the next IPCC report.
				</p>
			</section>
			<section className={styles.background}>
				<p>
					Jehne was an early researcher on glomalin, mycorrhizal fungi, and root
					ecology. Growing up in the bush surrounded by nature, he chose
					microbiology in university because it encompasses all life processes
					in microcosm. He started his career studying forest dieback diseases
					in relation to soil microbial interactions, then “switched to the dark
					side” when he realized that disease fungi are involved in symbiosis
					and play a role in recycling moribund organisms.
				</p>
				<p>
					As a research scientist at CSIRO, Jehne investigated the potential of
					mycorrhizal fungi to recolonize toxic, degraded soils and rebuild
					productive biosystems. His curiosity took him to China to study why
					traditional agriculture in that country was so productive. Later he
					worked with his federal government to foster strategic innovation in
					land management before retiring to get back to applying science at a
					grassroots level.
				</p>
			</section>
			<section className={styles.highlights}>
				<h2>MycorrPlus Helps to Build the Soil Carbon Sponge!</h2>
				<p>
					Carbon sequestration is THE ANSWER to returning carbon to the soil,
					restoring more normal rain fall patterns, and solving the problem of
					climate change. MycorrPlus is an amazing tool for optimizing carbon
					sequestration, which in turn causes a rapid building of the Soil
					Carbon Sponge. As Mr. Jehne has noted, this can result in some pretty
					wonderful things!
				</p>
				<h3>Interview Highlights</h3>
				<ul>
					<li>
						<strong>Greater Nutrient Availability:</strong> The “soil cathedral”
						concept—efficient nutrient delivery is related to how much mineral
						surface area is exposed.
					</li>
					<li>
						<strong>Fertility without Fertilizer:</strong> Enhance natural
						nutrient cycling, solubilization, and fixation to sustainably
						achieve high productivity.
					</li>
					<li>
						<strong>Mycorrhizae are Key:</strong> These fungi form membrane
						interfaces that allow for selective, intelligent nutrient uptake
						while excluding toxins.
					</li>
					<li>
						<strong>How to Change the Weather:</strong> Rebuild the Earth’s soil
						carbon sponge and in-soil reservoirs to mitigate extreme weather.
					</li>
					<li>
						<strong>Changing pH without Lime:</strong> Nature can balance pH by
						absorbing hydrogen ions onto organic surfaces.
					</li>
				</ul>
			</section>
			<section className={styles.conclusion}>
				<p>
					Acres USA has given AG-USA permission to reprint this article with
					added highlights. Enjoy this glimpse into Walter Jehne’s insights on
					soil health, climate change, and the power of the soil carbon sponge.
				</p>
			</section>
		</div>
	);
};

export default Interview;
