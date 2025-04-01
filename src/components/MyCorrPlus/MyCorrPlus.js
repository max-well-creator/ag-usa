import React from "react";
import Image from "next/image";
import BenefitsOfMycorrPlus from "../Benefits/Benefits";
import Functionality from "../Functionality/Functionality";
import MycorrPlusInstructions from "../ApplicationInstructions/Instructions";
import MycorrPlusROI from "../GreatValue/GreatValue";
import MycorrPlusTestimonials from "../Testimonials/Testimonials";
import MycorrPlusSoilLabs from "../Results/Results";
import MycorrPlusOrganic from "../Organic/Organic";
import styles from "./MycorrPlus.module.scss";

import treated from "../../../public/images/home/GrassHayTreated.webp";
import untreated from "../../../public/images/home/GrassHayUntreated.webp";
import treated_untreated from "../../../public/images/mycorrPlus/treated_untreated.webp";
import remediate from "../../../public/images/mycorrPlus/remediate.webp";
import { Button } from "reactstrap";
import CustomButton from "../Shared/CustomButton/CustomButton";

const imageSize = 400;

// Reusable Section Component
const Section = ({ title, children }) => (
	<section className={styles.section}>
		<h2 className={styles.sectionTitle}>{title}</h2>
		{children}
	</section>
);

// Component for displaying field comparisons
const FieldBlock = ({ title, description, image, altText }) => (
	<div className={styles.fieldBlock}>
		<h2>{title}</h2>
		<p>{description}</p>
		<Image src={image} alt={altText} width={imageSize} height={imageSize} />
	</div>
);

const MycorrPlus = () => {
	return (
		<div className={styles.container}>
			{/* Introduction */}
			<header className={styles.header}>
				<h1 className={styles.title}>Mycorr Plus™</h1>
				<h2 className={styles.subtitle}>Helps keep your moisture.</h2>
				<MycorrPlusOrganic />
				<p>
					By increasing organic matter year‑after‑year to boost cation exchange
					and nutrient availability, Mycorr Plus delivers a comprehensive
					nutrient package that balances soil nutrients, raises soil energy, and
					ultimately enhances plant growth and development.
				</p>

				<section className={styles.benefitsSection}>
					<BenefitsOfMycorrPlus />
				</section>
			</header>

			{/* Visual Comparison of Fields */}
			<article className={styles.fieldComparison}>
				<FieldBlock
					title="Untreated Field"
					description="Tight, compacted soil with anaerobic bacteria, no earthworms, and reduced plant growth."
					image={untreated}
					altText="Grass Hay Without MycorrPlus"
				/>
				<FieldBlock
					title="Treated Field"
					description="Flocculated, crumbly soil with aerobic bacteria, plenty of earthworms, and increased plant growth."
					image={treated}
					altText="Grass Hay With MycorrPlus"
				/>
			</article>

			{/* Topsoil & Benefits Introduction */}
			<section className={styles.introSection}>
				<p className={styles.intro}>
					Would you like to build dark, rich topsoil? AG-USA's MycorrPlus-A and
					MycorrPlus-O prompt an incredible amount of carbon sequestration—the
					fastest and best way to create new topsoil. Learn why secreting sugars
					(carbon) through plant roots can build topsoil up to 10 times faster
					than compost.
				</p>
				<p>
					MycorrPlus-A and O provide the perfect environment for plants by
					delivering all the nutrients needed for optimum productivity and
					nutrient density.
				</p>
			</section>

			{/* How It Works */}
			<Section title="How MycorrPlus-A and O Work">
				<p>
					Using molasses as an energy source, MycorrPlus creates an aerobic
					membrane that balances nutrients by introducing beneficial bacteria,
					fungi, and other soil organisms. As these microbes flush out toxins
					and digest chemicals, they convert anaerobic soil to aerobic,
					flocculating plant-secreted sugars to form vital air spaces.{" "}
				</p>
				<p>
					Ultimately, MycorrPlus neutralizes soil pH without lime and prompts
					plants to secrete liquid carbon, fueling microbes that release
					nutrients and build rich topsoil.
				</p>
			</Section>

			{/* Functionality & Benefits */}
			<section className={styles.functionalitySection}>
				<Functionality />
			</section>
			<section className={styles.moreInfoButtons}>
				<CustomButton
					href="/ApplicationInstructions"
					text="View Application Instructions"
				/>
				<CustomButton href="/Results" text="Soil Analysis Results" />
			</section>
			{/* Testimonials */}
			<section className={styles.testimonialsSection}>
				<MycorrPlusTestimonials />
			</section>
		</div>
	);
};

export default MycorrPlus;
