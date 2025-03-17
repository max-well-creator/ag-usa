import React from "react";
import styles from "./About.module.scss";

const About = () => {
	return (
		<div className={styles.container}>
			<p className={styles.quote}>
				"In 1969, animal nutritionist Paul Schneider launched Tech Ag with a
				revolutionary mineral and vitamin program to boost cattle health. Later,
				his son and family expanded the quest for soil excellence. Lab tests
				show our product makes abundant nutrients available, turning bland crops
				into exciting, nutrient-rich yields—all while reducing fertilizer
				costs." — Paul Schneider Jr.
			</p>

			<p>
				With MycorrPlus (formerly GroPal Balance), growers enjoy increased
				production and balanced soil pH as healthy microbes displace harmful
				pathogens.
			</p>

			<p>Contact us today for more details.</p>

			<div className={styles.externalLinks}>
				<h3>Other Websites</h3>
				<ul>
					<li>
						<a
							href="http://www.healthy-vegetable-gardening.com"
							target="_blank"
							rel="noopener noreferrer">
							Healthy Vegetable Gardening
						</a>
					</li>
					<li>
						<a
							href="http://www.best-constipation-remedies.com"
							target="_blank"
							rel="noopener noreferrer">
							Best Constipation Remedies
						</a>
					</li>
					<li>
						<a
							href="http://www.AidtheChildren.com"
							target="_blank"
							rel="noopener noreferrer">
							Aid the Children
						</a>
					</li>
				</ul>
			</div>

			<div className={styles.officeInfo}>
				<p>Our office/warehouse: 119 Palmetto Rd., Tyrone, GA.</p>
				<p>Check out our facility photos below.</p>
			</div>
		</div>
	);
};

export default About;
