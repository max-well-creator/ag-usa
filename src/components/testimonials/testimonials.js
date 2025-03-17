import Link from "next/link";
import React from "react";
import styles from "./MycorrPlusTestimonials.module.scss";

const MycorrPlusTestimonials = () => {
	return (
		<div className={styles.container}>
			<h1>MycorrPlus Testimonials</h1>
			<p>(Using the new name MycorrPlus in place of GroPal Balance)</p>

			{/* Testimonial 1 */}
			<section className={styles.testimonial}>
				<h2>Elaine – Grass Hay & Pasture (Northern FL)</h2>
				<p>
					After applying 40 oz of MycorrPlus-A in early June, our hay gained an
					extra 3" by August. While neighboring fields turned brown, our
					hayfield stayed green and vigorous.
				</p>
				<p>
					Our pasture is thickening—now we have more grass than needed for our
					cattle.
				</p>
			</section>

			{/* Testimonial 2 */}
			<section className={styles.testimonial}>
				<h2>Elaine – Reduced Compaction (Southern GA / Northern FL)</h2>
				<p>
					On our 1,000-acre pasture, treated soil allowed a probe to penetrate
					1" after 3 weeks, 2.5" after 2 months, and 4" after rain—while
					untreated areas showed no change.
				</p>
				<p>Even my skeptical husband is now impressed.</p>
			</section>

			{/* Testimonial 3 */}
			<section className={styles.testimonial}>
				<h2>Elaine – Cattle Fertility</h2>
				<p>
					Our cows bred earlier and more uniformly, with improved re-breeding
					potential and healthier calves.
				</p>
			</section>

			{/* Testimonial 4 */}
			<section className={styles.testimonial}>
				<h2>Elaine – Clover Revival</h2>
				<p>
					Our clover, once failing, reached 6" by early February—up from 5" last
					year. The pasture has filled in remarkably.
				</p>
			</section>

			{/* Testimonial 5 */}
			<section className={styles.testimonial}>
				<h2>Elaine – Insect Control</h2>
				<p>
					Fire ants and grasshoppers have significantly decreased in treated
					areas.
				</p>
			</section>

			{/* Testimonial 6 */}
			<section className={styles.testimonial}>
				<h2>Oat Farmer – Oats (MO)</h2>
				<p>
					A friend used a fan-type nozzle with MycorrPlus-A, resulting in
					taller, greener oat ridges.
				</p>
			</section>

			{/* Testimonial 7 */}
			<section className={styles.testimonial}>
				<h2>Leroy – Clover in Pasture (TX)</h2>
				<p>
					Leroy reordered 5 buckets after his clover became incredibly tall and
					healthy.
				</p>
			</section>

			{/* Testimonial 8 */}
			<section className={styles.testimonial}>
				<h2>Andrew Curtiss – Seed Potatoes & Vegetables (MI)</h2>
				<p>
					"I applied 40 oz on 1 acre used for conventional agriculture and
					harvested 1,200 lbs of potatoes, with award‑winning produce and
					extensive mycorrhizal networks on the roots. It really works!"
				</p>
			</section>

			{/* Additional testimonials can be added similarly */}

			<section className={styles.cta}>
				<p>
					<strong>Want to see more?</strong> Contact us today!
				</p>
			</section>
		</div>
	);
};

export default MycorrPlusTestimonials;
