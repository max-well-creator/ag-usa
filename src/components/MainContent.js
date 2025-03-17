import styles from "../styles/MainContent.module.scss";
import Image from "next/image";

const MainContent = () => {
	return (
		<section className={styles.mainContent}>
			<article>
				<h1>MycorrPlus</h1>
				<p>
					All references to GroPal Balance have been updated to the new name,
					MycorrPlus.
				</p>
				<div className={styles.field}>
					<h2>Untreated Field</h2>
					<p>
						Tight, compacted soil with anaerobic bacteria, no earthworms, and
						reduced plant growth.
					</p>
					<Image
						src="/images/GrassHayUntreated.jpg"
						alt="Grass Hay Without MycorrPlus"
						width={100}
						height={100}
					/>
				</div>
				<div className={styles.field}>
					<h2>Treated Field</h2>
					<p>
						Flocculated, crumbly soil with aerobic bacteria, plenty of
						earthworms, and increased plant growth.
					</p>
					<Image
						src="/images/GrassHayTreated.jpg"
						alt="Grass Hay With MycorrPlus"
						width={100}
						height={100}
					/>
				</div>
				<div className={styles.testimonial}>
					<h3>Testimonial</h3>
					<p>
						"After treating half my pasture with Soil Balance in the fall, the
						cattle clearly preferred the treated grass over the untreated."
					</p>
				</div>
			</article>
		</section>
	);
};

export default MainContent;
