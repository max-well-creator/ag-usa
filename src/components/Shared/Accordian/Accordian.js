"use client";
import React, { useState } from "react";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "reactstrap";

import styles from "./Accordion.module.scss";

function CustomAccordion({ id, question, answer }) {
	const [open, setOpen] = useState(id);
	const toggle = (id) => {
		if (open === id) {
			setOpen();
		} else {
			setOpen(id);
		}
	};

	return (
		<div>
			<Accordion open={open} toggle={toggle}>
				<AccordionItem className={styles.faqItem}>
					<AccordionHeader className={styles.faqItem} targetId="1">
						{question}
					</AccordionHeader>
					<AccordionBody className={styles.answer} accordionId="1">
						{answer}
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default CustomAccordion;
