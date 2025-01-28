import styles from "../styles/MainContent.module.scss";
import Image from "next/image";

const MainContent = () => {
	return (
		<section className={styles.main_content}>
			<article>
				<h1>MycorrPlus</h1>
				<p>
					On this page, every reference to GroPal Balance has been changed to
					the new name, MycorrPlus.
				</p>
				<h2>Untreated Field</h2>
				<p>
					Tight soil, anaerobic bacterial activity, no earthworms, reduced plant
					growth.
				</p>
				<Image
					src="/images/GrassHayUntreated.jpg"
					alt="Grass Hay Without MycorrPlus"
					width={100}
					height={100}
				/>

				<h2>Treated Field</h2>
				<p>
					Flocculated soil, aerobic bacterial activity, abundance of earthworms,
					increased plant growth.
				</p>
				<Image
					src="/images/GrassHayTreated.jpg"
					alt="Grass Hay With MycorrPlus"
					width={100}
					height={100}
				/>

				<h3>Testimonial</h3>
				<p>
					After treating half my pasture with Soil Balance in the fall, I
					noticed the cattle preferred the treated grass over the untreated.
				</p>
			</article>
		</section>
	);
};

export default MainContent;
