import React from "react";

const MycorrPlusSoilLabs = () => {
	return (
		<div
			className="soil-labs-container"
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Mycorr Plus (formerly called GroPal Balance)</h1>

			<section style={{ marginTop: "20px" }}>
				<h2>Soil Labs</h2>
				<p>
					Below are soil tests, before and after, from 2 different fields in
					southern Georgia/northern Florida.
				</p>
				<p>
					Note that only 5 months after the application of MycorrPlus, soil pH
					has been restored to neutral, plus many other nutrients have already
					come into balance. It generally takes 2 years (with a quart of
					MycorrPlus-A or O each year) for balance to be fully restored.
				</p>
				<p>
					Note in the following lab test that numerous trace minerals don't even
					show up on the soil test. Also note the Base Saturation before and
					after. It is great when calcium is around 75% to 80%. MycorrPlus helps
					to restore this ratio, while lowering hydrogen!
				</p>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Field 1</h3>
				<div style={{ marginBottom: "20px" }}>
					<h4>Before MycorrPlus</h4>
					{/* Replace the src with the actual image path */}
					<img
						src="/images/field1-before.jpg"
						alt="Field 1 Soil Test Before MycorrPlus"
						style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
					/>
				</div>
				<div style={{ marginBottom: "20px" }}>
					<h4>After MycorrPlus</h4>
					{/* Replace the src with the actual image path */}
					<img
						src="/images/field1-after.jpg"
						alt="Field 1 Soil Test After MycorrPlus"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h3>Field 2</h3>
				<div style={{ marginBottom: "20px" }}>
					<h4>Before MycorrPlus</h4>
					{/* Replace the src with the actual image path */}
					<img
						src="/images/field2-before.jpg"
						alt="Field 2 Soil Test Before MycorrPlus"
						style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
					/>
				</div>
				<div style={{ marginBottom: "20px" }}>
					<h4>After MycorrPlus</h4>
					{/* Replace the src with the actual image path */}
					<img
						src="/images/field2-after.jpg"
						alt="Field 2 Soil Test After MycorrPlus"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>
			</section>

			<section style={{ marginTop: "20px" }}>
				<p>
					MycorrPlus is emerging as a breakthrough for both pasture and crop
					production. Call today for more info!
				</p>
				<h2>Want to Learn More?</h2>
				<ul>
					<li>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "blue", textDecoration: "underline" }}>
							7 Keys for Activating the Carbon Sequestration Switch
						</a>
					</li>
					<li>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "blue", textDecoration: "underline" }}>
							Benefits of Using MycorrPlus
						</a>
					</li>
					<li>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "blue", textDecoration: "underline" }}>
							AcresUSA interview with Carbon Sequestration specialist Dr.
							Christine Jones
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default MycorrPlusSoilLabs;
