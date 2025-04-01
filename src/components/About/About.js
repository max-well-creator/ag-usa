import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Paul from "../../../public/images/about/Paul.webp";
import warehouse1 from "../../../public/images/about/warehouse.webp";
import warehouse2 from "../../../public/images/about/warehouse1.webp";
import warehouse3 from "../../../public/images/about/warehouse2.webp";
import warehouse4 from "../../../public/images/about/warehouse3.webp";
import warehouse5 from "../../../public/images/about/warehouse4.webp";
import warehouse6 from "../../../public/images/about/warehouse5.webp";

const array = [
	warehouse1,
	warehouse2,
	warehouse3,
	warehouse4,
	warehouse5,
	warehouse6,
];

const About = () => {
	return (
		<div className={styles.container}>
			<Image
				className={styles.paul}
				src={Paul}
				height={300}
				width={200}
				alt="Paul Schneider"
			/>
			<p className={styles.quote}>
				"In 1969, animal nutritionist Paul Schneider launched Tech Ag with a
				revolutionary mineral and vitamin program to boost cattle health. Later,
				his son and family expanded the quest for soil excellence. Lab tests
				show our product makes abundant nutrients available, turning bland crops
				into exciting, nutrient-rich yields—all while reducing fertilizer
				costs." — Paul Schneider Jr.
			</p>

			<p>
				With MycorrPlus, growers enjoy increased production and balanced soil pH
				as healthy microbes displace harmful pathogens.
			</p>

			<p>Contact us today for more details.</p>

			<div className={styles.officeInfo}>
				<p>Our office/warehouse: 119 Palmetto Rd., Tyrone, GA.</p>
				<p>Check out our facility photos below.</p>
			</div>

			{/* Facility Photos Grid */}
			<div className={styles.photos}>
				{array.map((item, index) => {
					return (
						<Image
							key={index}
							src={item}
							height={200}
							width={200}
							alt={`Warehouse view ${index}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default About;
