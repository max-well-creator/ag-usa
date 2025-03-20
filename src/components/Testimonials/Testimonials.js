import Link from "next/link";
import React from "react";
import styles from "./Testimonials.module.scss";
import TestimonialCarousel from "./TestimonialCarousel";
import refactoredTestimonials from "../../data/testimonials";

const MycorrPlusTestimonials = () => {
	return (
		<div className={styles.container}>
			<p>
				Swipe through our {refactoredTestimonials.length} testimonals to see how
				Mycorr Plus can benefit you.
			</p>
			<TestimonialCarousel />
		</div>
	);
};

export default MycorrPlusTestimonials;
