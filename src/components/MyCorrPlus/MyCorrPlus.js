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

const imageSize = 400;

const Section = ({ title, children }) => (
	<section className={styles.section}>
		<h2 className={styles.sectionTitle}>{title}</h2>
		{children}
	</section>
);

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
			<h1 className={styles.title}>Mycorr Plus™</h1>
			<MycorrPlusOrganic />

			<article>
				<div className={styles.field}>
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
				</div>
			</article>

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
			<Section title="How MycorrPlus-A and O Work">
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
			</Section>

			<Section title="The Nutrient Package & Energy Balance">
				<p>
					When soil nutrients are balanced, its energy increases—boosting plant
					growth. MycorrPlus delivers a comprehensive nutrient package that
					raises soil energy and enhances plant development.
				</p>
			</Section>
			<Functionality />
			<BenefitsOfMycorrPlus />
			{/* TODO: ADD THE 33 BENEFITS OF MYCORR PLUS ARTICLE */}
			<MycorrPlusInstructions />
			<MycorrPlusROI />
			<MycorrPlusTestimonials />
			<MycorrPlusSoilLabs />
		</div>
	);
};

export default MycorrPlus;
