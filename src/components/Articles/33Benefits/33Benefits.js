"use client";
import React, { useState } from "react";
import styles from "./CarbonSequestrationBenefits.module.scss";
import { benefitsData } from "../../../data/Articles/33Benefits/benefitsData";

const CarbonSequestrationBenefits = () => {
	const [openBenefit, setOpenBenefit] = useState(null);

	const toggleBenefit = (id) => {
		setOpenBenefit(openBenefit === id ? null : id);
	};

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>33 Benefits of Activating the Carbon Sequestration Switch</h1>
				<p>
					Flipping on the carbon sequestration switch with MycorrPlus (formerly
					called GroPal Balance) is the best thing that farmers can do to ensure
					consistent production. MycorrPlus activates mycorrhizal fungi like
					nothing else we know, thereby stimulating a huge amount of carbon
					sequestration. Just look at all the benefits that could be yours, once
					you do what is necessary to activate the carbon sequestration switch
					in your soil.
				</p>
				<p className={styles.instruction}>
					(Click on any of the 33 benefits below to read about that benefit)
				</p>
			</header>

			<section className={styles.benefitsList}>
				{benefitsData.map((benefit) => (
					<div key={benefit.id} className={styles.benefitItem}>
						<div
							className={styles.benefitHeader}
							onClick={() => toggleBenefit(benefit.id)}>
							<h2>
								{benefit.id}. {benefit.title}
							</h2>
						</div>
						{openBenefit === benefit.id && (
							<div className={styles.benefitContent}>
								<p>{benefit.content}</p>
							</div>
						)}
					</div>
				))}
			</section>

			<footer className={styles.footer}>
				<h3>Conclusion</h3>
				<p>
					What does MycorrPlus help to provide? A recipe for success! MycorrPlus
					is a wonderful tool for activating the carbon sequestration switch in
					plants and helps to keep it activated. As this article points out,
					this can result in so many wonderful things. When is the best time to
					apply MycorrPlus? As soon as possible!
				</p>
			</footer>
		</div>
	);
};

export default CarbonSequestrationBenefits;
