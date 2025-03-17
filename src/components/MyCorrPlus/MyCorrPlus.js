import React from "react";
import BenefitsOfMycorrPlus from "../Benefits/Benefits";
import Functionality from "../Functionality/Functionality";
import MycorrPlusInstructions from "../ApplicationInstructions/Instructions";
import styles from "./MycorrPlus.module.scss";

const MycorrPlus = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mycorr Plus™</h1>
			<p className={styles.intro}>
				Would you like to build dark, rich topsoil? AG-USA's MycorrPlus-A and
				MycorrPlus-O prompt an incredible amount of carbon sequestration into
				the soil—the fastest and best way to create new topsoil. Learn why
				secreting sugars (carbon) through plant roots can build topsoil up to 10
				times faster than compost.
			</p>
			<p>
				MycorrPlus-A and O provide the perfect environment for plants by
				delivering all the nutrients needed for optimum productivity and
				nutrient density.
			</p>
			<p>
				They combine two products—Soil Balance and GroPal (also marketed as
				Ocean Trace).
			</p>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Soil Balance</h2>
				<p>
					A blend of ingredients including humic and fulvic acids that balances
					both nutrients and energies in the soil.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>GroPal</h2>
				<p>
					A sea mineral concentrate produced by evaporating 100 gallons of
					Australian ocean water down to 1 gallon, packed with trace minerals
					that supply both macro and micronutrients.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>How MycorrPlus-A and O Work</h2>
				<p>
					They form an “aerobic membrane” that holds and balances nutrients for
					the plant. This process re-establishes the natural relationship
					between soil and plant by introducing beneficial bacteria, fungi, and
					other soil organisms—using molasses as an energy source.
				</p>
				<p>
					As these microbes digest chemicals and flush out toxins, anaerobic
					soil converts to aerobic soil. Their multiplication and the fixation
					of plant-secreted sugars flocculate the soil, creating vital air
					spaces for water and nutrient flow.
				</p>
				<p>
					Ultimately, MycorrPlus adjusts soil pH to near neutral without using
					lime.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>
					The Nutrient Package & Energy Balance
				</h2>
				<p>
					When soil nutrients are balanced, its energy increases—boosting plant
					growth. MycorrPlus delivers a comprehensive nutrient package that
					raises soil energy and enhances plant development.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Give MycorrPlus a Try!</h2>
				<p>
					Test it on a small area before large-scale application. Avoid using
					other products in that test area.
				</p>
				<p>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}>
						View side by side soil results
					</a>
				</p>
				<p>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}>
						Photo gallery of treated vs. untreated fields
					</a>
				</p>
				<p>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}>
						Read an authoritative interview on soil transformation
					</a>
				</p>
				<p>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}>
						Watch video testimonials
					</a>
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Customer Testimonial</h2>
				<p>
					<strong>Pastor Andrew Curtiss, Shalom Vegetables in Michigan:</strong>
				</p>
				<p>
					"My experience with GroPal Balance (MycorrPlus-A) was excellent. I
					grow CSA and farm market vegetables on about 1 acre of land that had
					been conventionally farmed for 30 years. On recommendation, I applied
					40 oz of GroPal Balance A in May 2015. I planted 75 lbs of seed
					potatoes and harvested 1,200 lbs of potatoes. My shell peas produced
					sweet peas for nearly 6 weeks, and our snap beans kept flowering long
					after picking ceased. The produce was exceptional, and I received
					weekly compliments at the farmers market. The product's ability to
					help plants withstand stress—like 5 inches of rain in 2 days followed
					by 21 days without rain—was truly remarkable. When it was time to tear
					the garden down, I was amazed by the mycorrhizal fungi on the roots. I
					firmly believe that the symbiotic relationship between plants and
					roots was key to our success in 2015. God's creation is amazing!
					Thanks for an awesome product."
				</p>
				<p>
					You can further boost the process with natural products like fish or
					kelp, although excellent results are achievable without them.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Good News!</h2>
				<p>We offer product applications that fit every budget.</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>How It Works</h2>
				<Functionality />
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Benefits</h2>
				<BenefitsOfMycorrPlus />
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Application</h2>
				<MycorrPlusInstructions />
			</section>
		</div>
	);
};

export default MycorrPlus;
