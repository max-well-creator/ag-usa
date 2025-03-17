import React from "react";
import styles from "./Contact.module.scss";

const ContactUs = () => {
	return (
		<div className={styles.container}>
			<h2>Contact Us</h2>

			<section className={styles.section}>
				<h3>Mailing Address</h3>
				<p>
					AG-USA, LLC <br />
					PO Box 73019 (new PO Box) <br />
					Newnan, GA 30271
				</p>
			</section>

			<section className={styles.section}>
				<h3>Contact Info</h3>
				<p>
					Call: 1-888-588-3139 <br />
					Email: <a href="mailto:contact@ag-usa.net">contact@ag-usa.net</a>
				</p>
			</section>

			<section className={styles.section}>
				<h3>Physical Location</h3>
				<p>
					AG-USA, LLC <br />
					119 Palmetto Rd. <br />
					Tyrone, GA 30290
				</p>
			</section>

			<section className={styles.section}>
				<h3>Website</h3>
				<p>
					<a
						href="http://www.AG-USA.net"
						target="_blank"
						rel="noopener noreferrer">
						www.AG-USA.net
					</a>
				</p>
			</section>
		</div>
	);
};

export default ContactUs;
