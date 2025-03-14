import Link from "next/link";
import React from "react";

const MycorrPlusResearch = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>MycorrPlus – Dr. Maynard Murray Research</h1>
			<p>
				For 30 years, Dr. Maynard Murray studied the impact of sea minerals on
				plants and animals—with remarkable results!
			</p>

			<section style={{ marginTop: "20px" }}>
				<h2>Animal Studies: Disease Resistance</h2>
				<ul>
					<li>
						<strong>Mice:</strong> Mice fed a diet grown with sea minerals did
						not develop cancer, while all control mice did.
					</li>
					<li>
						<strong>Rats:</strong> Rats on the experimental diet showed
						significantly longer survival and fewer cancer "takes" after
						carcinogen injection.
					</li>
					<li>
						<strong>Rabbits & Pigs:</strong> Experimental groups on sea
						mineral–fertilized diets exhibited fewer signs of high cholesterol
						and improved overall health.
					</li>
					<li>
						<strong>Chickens:</strong> Chickens fed produce grown with sea
						minerals had fewer worms and no leg disorders.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Plant Studies: Enhanced Growth and Disease Resistance</h2>
				<ul>
					<li>
						<strong>Peach Trees:</strong> Treated trees remained virus-free and
						produced normal fruit yields, while untreated trees contracted
						disease.
					</li>
					<li>
						<strong>Turnips:</strong> Experimental turnips resisted "center rot"
						and thrived, whereas controls succumbed.
					</li>
					<li>
						<strong>Tomatoes:</strong> Treated tomatoes resisted Tobacco Mosaic
						Virus and heavy blight, while control plants failed.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "20px" }}>
				<h2>Key Takeaways</h2>
				<p>
					Dr. Murray’s research, detailed in his book{" "}
					<em>
						Sea Energy Agriculture: Nature's Ideal Trace Element Blend for Farm,
						Livestock, Humans
					</em>
					, demonstrates that fertilizing with sea minerals not only boosts
					plant immunity and yield but may also have profound effects on animal
					health.
				</p>
				<p>
					You can even supplement your diet with Ionic Sea Minerals – the next
					best thing if you don't consume produce grown with sea minerals.
				</p>
			</section>

			<section
				style={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}>
				<p>
					<small>
						Note: Dr. Murray’s research is preliminary and is intended to
						stimulate further study. The results should not be interpreted as
						conclusive health claims.
					</small>
				</p>
			</section>

			<section style={{ marginTop: "30px", textAlign: "center" }}>
				<p>
					<Link
						href="/purchase-mycorrplus"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Purchase MycorrPlus Today!
					</Link>
				</p>
				<p>
					<Link
						href="/dr-christine-jones-interview"
						style={{ color: "blue", textDecoration: "underline" }}>
						Read Dr. Christine Jones’ Interview on Carbon Sequestration
					</Link>
				</p>
				<p>
					<Link
						href="/contact"
						style={{ color: "blue", textDecoration: "underline" }}>
						Contact Us for More Information
					</Link>
				</p>
			</section>
		</div>
	);
};

export default MycorrPlusResearch;
