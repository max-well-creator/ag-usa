import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<div className={styles.contactPage}>
			<h1 className={styles.pageTitle}>Contact Us</h1>

			<div className={styles.column}>
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Mailing Address</h2>
					<p>AG-USA, LLC</p>
					<p>PO Box 73019 (new PO Box)</p>
					<p>Newnan, GA 30271</p>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Contact Info</h2>
					<p>
						<strong>Call:</strong> 1-888-588-3139
					</p>
					<p>
						<strong>Email:</strong>{" "}
						<a href="mailto:contact@ag-usa.net">contact@ag-usa.net</a>
					</p>
				</section>
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Physical Location</h2>
					<p>AG-USA, LLC</p>
					<p>119 Palmetto Rd.</p>
					<p>Tyrone, GA 30290</p>
				</section>
			</div>
		</div>
	);
};

export default Contact;
