import React from "react";
import styles from "./FAQ.module.scss";
import Accordion from "../Shared/Accordian/Accordian";
import { FAQ_DATA } from "../../data/FAQ";

const FAQ = () => {
	return (
		<div className={styles.container}>
			<h1>Frequently Asked Questions</h1>
			{FAQ_DATA.map((faq, index) => {
				return (
					<Accordion
						id={index}
						key={index}
						question={faq.question}
						answer={faq.answer}
					/>
				);
			})}
		</div>
	);
};

export default FAQ;
