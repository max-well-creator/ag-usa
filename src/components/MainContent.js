"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/MainContent.module.scss";
import HomeHeader from "./Home/Home-Header";
import TestimonialCarousel from "./Testimonials/TestimonialCarousel";
import refactoredTestimonials from "../data/testimonials";
import MycorrPlusTestimonials from "./Testimonials/Testimonials";

const MainContent = () => {
	const router = useRouter();
	return (
		<section className={styles.mainContent}>
			<HomeHeader />

			<div className={styles.features}>
				<div className={styles.featureItem}>
					<h2>Revitalize Your Soil</h2>
					<p>
						Our proprietary blend supports the natural mycorrhizal network,
						promoting deeper root growth and improved nutrient uptake.
					</p>
				</div>
				<div className={styles.featureItem}>
					<h2>Boost Crop Yields</h2>
					<p>
						Experience up to 10% more biomass and healthier, more productive
						crops by enhancing your soil’s biological activity.
					</p>
				</div>
				<div className={styles.featureItem}>
					<h2>Sustainable Farming</h2>
					<p>
						Conquer nature by working with it. Mycorr Plus helps build resilient
						soils that require less chemical fertilizer and more natural
						fertility.
					</p>
				</div>
			</div>

			<div className={styles.ctaSection}>
				<h2>Ready to Transform Your Farm?</h2>
				<p>
					Join the thousands of growers who have turned barren fields into
					thriving ecosystems. Get started with Mycorr Plus today and see the
					difference in your crops!
				</p>
				<button
					className={styles.ctaButton}
					onClick={() => router.push("/MycorrPlus")}>
					Get Started Now
				</button>
			</div>

			<div className={styles.evidence}>
				<h2>See the Results</h2>
				<p>
					Swipe through our photo gallery to view before-and-after images of
					fields transformed by Mycorr Plus.
				</p>
				{/* Gallery component or image slider goes here */}
			</div>
			<div className={styles.evidence}>
				<h2>Still Need Convincing?</h2>
				<MycorrPlusTestimonials />
			</div>
		</section>
	);
};

export default MainContent;
