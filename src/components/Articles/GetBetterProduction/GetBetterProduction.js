import React from "react";
import styles from "./GetBetterProduction.module.scss";

const GetBetterProduction = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.date}>AG-USA – April 2017</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
				<h1>Get Better Production Without Additional Fertilizer</h1>
			</header>

			<section className={styles.section}>
				<p>
					Production is determined within the first 22 days of growth. That’s
					why it’s crucial to apply Mycorr Plus either above or on the
					seed—allowing it to soak down effectively.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Guarding Against Sapping Insects</h2>
				<p>
					Bruce Tainio of Tainio Technologies explained that Base Saturation—the
					percentage of a soil’s CEC occupied by base elements—is critical. The
					ideal ratios are:
				</p>
				<ul>
					<li>Potassium: 5-7.5%</li>
					<li>Magnesium: 10-15%</li>
					<li>Calcium: 65-70%</li>
					<li>Hydrogen: no more than 12%</li>
				</ul>
				<p>
					When the base saturation is balanced, the plant generates a healthy
					frequency (7.5 to 32 hertz) that deters sapping insects. In one
					demonstration, foliar applications restored balance in a potato field
					so that 2,000 potato bugs released on the balanced half did not feed
					on the plants.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Improved Nutrient Availability</h2>
				<p>
					Before and after lab tests show that after applying Mycorr Plus, the
					NPK and trace minerals in the soil increase significantly—even without
					additional fertilizer. The nutrients were already present; Mycorr Plus
					simply frees them up.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Customer Testimonial</h2>
				<p>
					Leonard, a farmer in northern Florida, initially thought GroPal
					Balance sounded too good to be true. Despite a dry spell after his
					March 2016 application, his pastures consistently outperformed his
					neighbors'. Leonard has since become a believer—and even expressed
					interest in becoming a dealer.
				</p>
			</section>

			<section className={styles.section}>
				<p>
					Mycorr Plus is like a center pivot for dryland farmers—it replaces
					lime and other fertilizers by making tied-up nutrients available.
				</p>
			</section>
		</div>
	);
};

export default GetBetterProduction;
