import Link from "next/link";
import React from "react";

const ConquerNature = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>Conquer Nature by Learning to Cooperate with It</h1>

			<section style={{ marginTop: "30px" }}>
				<h2>The Problem with Modern Agriculture</h2>
				<p>
					The current approach in modern agriculture is to use the soil as a
					holding medium for soluble chemical fertilizers. These fertilizers do
					not require microbes to break them down and make them available to the
					plant.
				</p>
				<p>However, this method has numerous problems:</p>
				<ul>
					<li>
						Soluble fertilizers are high in salt, which acts as a sterilizer.
					</li>
					<li>
						Bacteria are not needed to feed the plant, so the soil slowly dies.
					</li>
					<li>Inactive bacteria contribute to hardpan and compaction.</li>
					<li>Weeds thrive in the resulting sick soil.</li>
					<li>
						Sick soils produce plants that are susceptible to insects and
						disease.
					</li>
					<li>Harmful nematodes thrive, damaging plant roots.</li>
					<li>
						Using fungicides, insecticides, herbicides, and nematicides further
						damages the soil and makes farming more expensive.
					</li>
				</ul>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>Conquer Nature by Cooperating with It</h2>
				<p>
					God designed nature to operate through a symbiotic relationship
					between plants and soil. Plants use sunlight in photosynthesis to
					manufacture sugars. When soils are balanced, toxins are broken down,
					salts are removed, and mycorrhizal fungi thrive.
				</p>
				<p>
					In this environment, plants excrete large amounts of sugars through
					their roots to feed the soil microbes. These beneficial microbes
					convert unavailable minerals into available plant food while also
					performing a number of critical functions:
				</p>
				<ul>
					<li>
						They highly structure the soil, eliminating compaction and hardpan.
					</li>
					<li>
						Structured soil creates trillions of air gaps that store moisture
						and allow air to flow down, supporting aerobic bacteria.
					</li>
					<li>
						Nitrogen-fixing bacteria take atmospheric nitrogen and fix it in the
						soil as urea.
					</li>
					<li>They break down toxins and flush salts from the root zone.</li>
					<li>
						Beneficial microbes displace harmful nematodes and disease-causing
						pathogens.
					</li>
					<li>
						Mycorrhizal fungi thrive and transport nutrients and moisture to the
						plant from beyond the root zone.
					</li>
				</ul>
				<p>
					In many cases, within a year of applying a quart or more of
					MycorrPlus-A or O, 90% of the soil’s balance is restored. By the end
					of the second year—with no additional chemical applications—the soil
					can be completely balanced.
				</p>
				<p>
					Although MycorrPlus-A and O are bio-stimulants designed to feed and
					establish beneficial soil microbes, their true power lies in working
					with nature, not against it.
				</p>
			</section>

			<section style={{ marginTop: "30px" }}>
				<h2>Conclusion</h2>
				<p>
					So what is the best way to conquer nature? Not by overwhelming it with
					chemicals, but by recognizing and cooperating with the natural
					symbiotic relationships established by the Creator. MycorrPlus-A and O
					are designed to do just that—restoring and balancing your soil
					naturally. The wonderful results witnessed by our customers are a
					testament to this approach.
				</p>
				<p>
					We at AG-USA are here to guide you in how best to cooperate with
					nature. Give us a call, and we will do our best to answer all your
					questions.
				</p>
			</section>

			<section style={{ marginTop: "40px", textAlign: "center" }}>
				<p>
					<Link
						href="/learn-more"
						style={{ color: "blue", textDecoration: "underline" }}>
						Click here to learn more about MycorrPlus
					</Link>
				</p>
				<p>
					<Link
						href="/purchase-mycorrplus"
						style={{
							color: "blue",
							textDecoration: "underline",
							fontWeight: "bold",
						}}>
						Purchase MycorrPlus
					</Link>
				</p>
			</section>
		</div>
	);
};

export default ConquerNature;
