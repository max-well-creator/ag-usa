import Link from "next/link";
import React from "react";
import styles from "./Testimonials.module.scss";
import TestimonialCarousel from "./TestimonialCarousel";
import refactoredTestimonials from "../../data/testimonials";

const MycorrPlusTestimonials = () => {
	return (
		<div className={styles.container}>
			<p>Approved by {refactoredTestimonials.length} happy customers</p>
			<div className={styles.slider_container}>
				<TestimonialCarousel />
			</div>
		</div>
	);
};

export default MycorrPlusTestimonials;
