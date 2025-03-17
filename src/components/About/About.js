import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Paul from "../../../public/images/about/Paul.webp";
import warehouse from "../../../public/images/about/warehouse.webp";
import warehouse1 from "../../../public/images/about/warehouse1.webp";
import warehouse2 from "../../../public/images/about/warehouse2.webp";
import warehouse3 from "../../../public/images/about/warehouse3.webp";
import warehouse4 from "../../../public/images/about/warehouse4.webp";
import warehouse5 from "../../../public/images/about/warehouse5.webp";

const About = () => {
	return (
		<div className={styles.container}>
			<Image src={Paul} height={300} width={200} alt={Paul} />
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

			<Image src={warehouse} height={300} width={200} alt={warehouse} />
			<Image src={warehouse1} height={300} width={200} alt={warehouse1} />
			<Image src={warehouse2} height={300} width={200} alt={warehouse2} />
			<Image src={warehouse3} height={300} width={200} alt={warehouse3} />
			<Image src={warehouse4} height={300} width={200} alt={warehouse4} />
			<Image src={warehouse5} height={300} width={200} alt={warehouse5} />
		</div>
	);
};

export default About;
