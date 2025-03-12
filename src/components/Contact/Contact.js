import React from "react";

const ContactUs = () => {
	return (
		<div
			className="contact-us-container"
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h2>Contact Us</h2>

			<section style={{ marginBottom: "20px" }}>
				<h3>Mailing Address</h3>
				<p>
					AG-USA, LLC <br />
					PO Box 73019 (new PO Box) <br />
					Newnan, GA 30271
				</p>
			</section>
			<section style={{ marginBottom: "20px" }}>
				<p>
					Call: 1-888-588-3139 <br />
					Email: <a href="mailto:contact@ag-usa.net">contact@ag-usa.net</a>
					<br />
					Newnan, GA 30271
				</p>
			</section>

			<section style={{ marginBottom: "20px" }}>
				<h3>Physical Location</h3>
				<p>
					AG-USA, LLC <br />
					119 Palmetto Rd. <br />
					Tyrone, GA 30290
				</p>
			</section>

			<section>
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
