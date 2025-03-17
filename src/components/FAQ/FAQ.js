import React from "react";
import styles from "./FAQ.module.scss";

const FAQ = () => {
	return (
		<div className={styles.container}>
			<h1>Frequently Asked Questions</h1>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: Do I need to apply MycorrPlus each year?
				</p>
				<p className={styles.answer}>
					A: Yes. Applying at least 32 oz/acre annually helps transform the
					soil. A 64 oz application accelerates the process.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: Do I need to apply MycorrPlus after every hay cutting?
				</p>
				<p className={styles.answer}>
					A: It’s optional. For higher yields, an extra 32 oz/acre after each
					cut can help, or use a 2-quart foliar treatment 7–14 days post-cut.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: I have almost no topsoil. Will MycorrPlus help?
				</p>
				<p className={styles.answer}>
					A: Yes. Even poor soils contain bound nutrients. A 1–2 qt/acre
					application initiates beneficial bacterial activity to structure the
					soil.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: Which nitrogen sources work best with MycorrPlus?
				</p>
				<p className={styles.answer}>
					A: Use 28% or 32% nitrogen. Always add MycorrPlus to the tank first,
					then water, and finally add nitrogen.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>Q: Can I afford MycorrPlus?</p>
				<p className={styles.answer}>
					A: Absolutely! We offer application options for every budget.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: What microbes does MycorrPlus contain?
				</p>
				<p className={styles.answer}>
					A: It contains 4 strains of mycorrhizal fungi and over 70 aerobic
					bacillus strains. MycorrPlus is a bio‑stimulant that nourishes and
					establishes a robust microbial community in the soil.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: My ground is dry. Can I still apply MycorrPlus?
				</p>
				<p className={styles.answer}>
					A: Ideally, apply it just before a rain. Use a larger tank mix (20–40
					gal/acre) or work it in with a disk (1–2" deep) to ensure it
					penetrates the soil.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: My MycorrPlus containers are bloating. What should I do?
				</p>
				<p className={styles.answer}>
					A: Loosen the lid immediately to vent gases produced by the active
					microbes.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: How soon will MycorrPlus start working?
				</p>
				<p className={styles.answer}>
					A: It needs 1.1"+ of moisture and a soil temperature of 40–45°F to
					activate. You may notice improved moisture retention in about a month,
					with more dramatic results in a few months.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: When is the best time to apply MycorrPlus?
				</p>
				<p className={styles.answer}>
					A: Apply as early as possible—spring, summer, fall, or winter—when the
					soil is permeable. Follow our guidelines for timing after chemical
					applications.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: How long after applying chemicals should I wait to use MycorrPlus?
				</p>
				<p className={styles.answer}>
					A: Wait at least 3 days, or 2 days if rain has occurred.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: How should I use MycorrPlus with anhydrous ammonia?
				</p>
				<p className={styles.answer}>
					A: Wait 2 or more weeks after applying anhydrous ammonia, then apply
					1–2 qt/acre of MycorrPlus.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>
					Q: There are crystals in the container. What should I do?
				</p>
				<p className={styles.answer}>
					A: Crystals can form from mineral precipitation. Add them to your
					spray tank to re-dissolve or spread them on the field.
				</p>
			</div>

			<div className={styles.faqItem}>
				<p className={styles.question}>Q: What if MycorrPlus doesn’t work?</p>
				<p className={styles.answer}>A: Troubleshoot by checking:</p>
				<ul className={styles.troubleshootList}>
					<li>
						<strong>Application:</strong> Was the product applied at all?
					</li>
					<li>
						<strong>Technique:</strong> Follow our guidelines closely.
					</li>
					<li>
						<strong>Tank Mix:</strong> Ensure no incompatible products were
						mixed.
					</li>
					<li>
						<strong>Time:</strong> Allow sufficient time for soil
						transformation.
					</li>
					<li>
						<strong>Storage:</strong> Verify proper storage (avoid direct sun or
						extreme temperatures).
					</li>
					<li>
						<strong>Carry-over:</strong> Previous chemical residues may require
						an extra application.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FAQ;
