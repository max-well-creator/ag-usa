import styles from "../styles/MainContent.module.scss";
import Image from "next/image";
import treated from "../../public/images/home/GrassHayTreated.webp";
import untreated from "../../public/images/home/GrassHayUntreated.webp";

const imageSize = 400;

const MainContent = () => {
	return (
		<section className={styles.mainContent}>
			<article>
				<h1>MycorrPlus</h1>
				<div className={styles.field}>
					<div className={styles.untreated}>
						<h2>Untreated Field</h2>
						<p>
							Tight, compacted soil with anaerobic bacteria, no earthworms, and
							reduced plant growth.
						</p>
						<Image
							src={untreated}
							alt="Grass Hay Without MycorrPlus"
							width={imageSize}
							height={imageSize}
						/>
					</div>
					<div className={styles.treated}>
						<h2>Treated Field</h2>
						<p>
							Flocculated, crumbly soil with aerobic bacteria, plenty of
							earthworms, and increased plant growth.
						</p>
						<Image
							src={treated}
							alt="Grass Hay With MycorrPlus"
							width={imageSize}
							height={imageSize}
						/>
					</div>
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
