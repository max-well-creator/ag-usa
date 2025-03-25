import React from "react";
import styles from "./KeepGrassGrowing.module.scss";

const KeepGrassGrowing = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Keep Your Grass Growing</h1>
				<p className={styles.subtitle}>
					Anybody else want to keep your grass growing when it turns hot and
					dry?
				</p>
			</header>

			<section className={styles.section}>
				<p>
					That's what Richard Fish did. In July, when our grass in Florida
					normally goes back, the Mycorr Plus half of the field kept coming on.
					He even noted a huge increase in earthworms on the treated side.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Manufacturing Moisture</h2>
				<p>
					Not only do Mycorr Plus bacteria turn soil into a “water bank” by
					storing huge amounts of water when it's available, but moisture
					appears to be a by-product of the respiration of our special anionic
					bacteria. When we breathe, our breath fogs up eyeglasses because it
					produces water (H₂O). Similarly, our bacteria leave a trail of
					moisture as they travel through the soil—explaining why fields treated
					with GPB have extra moisture when neighbors' fields do not.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Elaine’s Testimonial</h2>
				<p>
					Elaine in southern Georgia told us, "We applied Mycorr Plus A on the
					first of June. By the first of August, our hay had grown an additional
					3 inches." Despite unusually hot and dry conditions, while neighboring
					fields turned brown and dry, her grass remained green all the way to
					the roots—healthier, stronger, and noticeably thicker.
				</p>
				<p>
					One friend, with the same amount of rain, ran out of grass and had to
					start feeding hay, whereas Elaine’s field produced more grass than she
					could use.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Enhanced Soil Nutrients</h2>
				<p>
					Mycorr Plus replaces lime and other fertilizers by freeing up
					nutrients already in the soil. Even though Elaine applied nothing but
					GPB this year, within only 5 months her soil’s NPK and trace minerals
					increased dramatically.
				</p>
			</section>
		</div>
	);
};

export default KeepGrassGrowing;
