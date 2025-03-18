import Link from "next/link";
import React from "react";
import styles from "./Sitemap.module.scss";

const SiteMap = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Site Map for AG-USA.net</h1>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href="/" className={styles.link}>
						Home
					</Link>
					<p>Our home page</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/About" className={styles.link}>
						About
					</Link>
					<p>Who we are, a list of our websites</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/MycorrPlus" className={styles.link}>
						MycorrPlus
					</Link>
					<p>
						Detailed information about our flagship fertilizer product,
						MycorrPlus
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Dryland" className={styles.link}>
						Good Moisture for Dryland Farms
					</Link>
					<p>How MycorrPlus keeps plants green even during dry spells</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/BuildOrganicMatter" className={styles.link}>
						Building Organic Matter
					</Link>
					<p>
						The best way to build organic matter is through carbon sequestration
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/7keys" className={styles.link}>
						7 Keys for Activating the Carbon Sequestration Switch
					</Link>
					<p>How to get carbon sequestration really going in your soil</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Sequestion" className={styles.link}>
						Carbon Sequestration IS Your Solution
					</Link>
					<p>
						Dr. Mercola on why carbon sequestration is key for improving soil
						and yields
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Videos" className={styles.link}>
						MycorrPlus videos
					</Link>
					<p>Video testimonials about MycorrPlus (formerly GroPal Balance)</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Testimonials" className={styles.link}>
						MycorrPlus testimonials
					</Link>
					<p>Customer testimonials regarding MycorrPlus</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/FAQ" className={styles.link}>
						FAQs
					</Link>
					<p>Helpful facts about MycorrPlus</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Animals" className={styles.link}>
						GroPal for animal consumption
					</Link>
					<p>Using GroPal sea mineral concentrate in animal drinking water</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/AvailablePlantFood" className={styles.link}>
						Available plant food
					</Link>
					<p>
						How MycorrPlus converts tied-up nutrients into available plant food
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/ConquerNature" className={styles.link}>
						Conquer nature
					</Link>
					<p>Learn how to cooperate with nature for better yields</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Hardpan" className={styles.link}>
						Eliminating hardpan
					</Link>
					<p>How MycorrPlus eliminates hardpan by structuring the soil</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/SoilPh" className={styles.link}>
						Controlling soil pH
					</Link>
					<p>The best way to balance soil pH without excessive lime</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/SoilLabs" className={styles.link}>
						Soil labs
					</Link>
					<p>Lab results showing nutrient balance restoration</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/SuperFood" className={styles.link}>
						Grow superfoods
					</Link>
					<p>How MycorrPlus can turn grass into a "superfood"</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/DroughtTolerance" className={styles.link}>
						Build drought tolerance
					</Link>
					<p>How MycorrPlus improves soil moisture retention</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/BuildTopSoil" className={styles.link}>
						Build topsoil
					</Link>
					<p>Why MycorrPlus is the best solution for building topsoil</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Organic" className={styles.link}>
						Organic applications
					</Link>
					<p>MycorrPlus is registered with WSDA for organic use</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/MaynardMurrayResearch" className={styles.link}>
						Dr. Maynard Murray's Research
					</Link>
					<p>Breakthrough research on sea minerals</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Articles" className={styles.link}>
						MycorrPlus magazine articles
					</Link>
					<p>Our advertising articles in various agricultural magazines</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/Contact" className={styles.link}>
						Contact
					</Link>
					<p>Ways to contact us</p>
				</li>
			</ul>
		</div>
	);
};

export default SiteMap;
