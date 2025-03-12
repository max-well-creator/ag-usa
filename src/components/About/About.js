import React from "react";

const About = () => {
	return (
		<div
			className="tech-ag-container"
			style={{
				padding: "20px",
				lineHeight: "1.6",
				fontFamily: "Arial, sans-serif",
			}}>
			<p>
				In 1969, animal nutritionist Paul Schneider started Tech Ag with an
				exceptional program of minerals, vitamins and other nutrients to
				maximize cattle health. After many years in the business, Paul realized
				that the only way to take things to the next level was through improving
				the soil, which in turn would improve the nutrients in crops. - Paul
				Schneider Jr
			</p>
			<p>
				Now, two of Paul's sons plus other family members have joined him in his
				quest for soil excellence. After Tech Ag had experienced numerous
				breakthroughs, Paul's son Paul Jr., under the company name AG-USA,
				developed a product that seems to have achieved Paul Sr.'s lifelong
				goal.
			</p>
			<p>
				Laboratory tests indicate that this new product makes a wealth of
				nutrients available to the plant and thus to livestock. Crops go from
				blah to exciting. Add to this the fact that year after year the soil
				just keeps getting better, and MycorrPlus (formerly called GroPal
				Balance) is truly a product to get excited about.
			</p>
			<p>
				Not only do growers experience increased production, they also save a
				fortune on fertilizer. With MycorrPlus, soil and pH are brought more
				into balance, and healthy soil microbes dominate, displacing harmful
				nematodes and pathogens.
			</p>
			<p>Please contact us today for more details.</p>

			<div className="external-links" style={{ marginTop: "20px" }}>
				<h3>Other websites:</h3>
				<ul>
					<li>
						<a
							href="http://www.healthy-vegetable-gardening.com"
							target="_blank"
							rel="noopener noreferrer">
							Healthy Vegetable Gardening
						</a>
					</li>
					<li>
						<a
							href="http://www.best-constipation-remedies.com"
							target="_blank"
							rel="noopener noreferrer">
							Best Constipation Remedies
						</a>
					</li>
					<li>
						<a
							href="http://www.AidtheChildren.com"
							target="_blank"
							rel="noopener noreferrer">
							Aid the Children
						</a>
					</li>
				</ul>
			</div>

			<div className="office-info" style={{ marginTop: "20px" }}>
				<p>
					Currently our office/warehouse is at 119 Palmetto Rd., Tyrone, GA.
					Here are a few pictures of this facility.
				</p>
			</div>
		</div>
	);
};

export default About;
