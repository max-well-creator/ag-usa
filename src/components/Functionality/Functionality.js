import React from "react";
import Link from "next/link";
import styles from "./Functionality.module.scss";
import ChristineJones from "../../../public/images/mycorrPlus/ChristineJones.webp";
import Image from "next/image";

const Functionality = () => {
	return (
		<>
			<p className={styles.paragraph}>
				For decades, Dr. Christine Jones has helped farmers adopt systems that
				boost biodiversity, carbon sequestration, and nutrient cycling.
			</p>
			<Link
				className={styles.link}
				href="https://www.amazingcarbon.com/PDF/Jones_ACRES_USA%20(March2015).pdf">
				Dr. Christine Jones Explains the Life-Giving Link Between Carbon and
				Healthy Topsoil.
			</Link>
		</>
	);
};

export default Functionality;
