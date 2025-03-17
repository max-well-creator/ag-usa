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
					<Link href="/about" className={styles.link}>
						About
					</Link>
					<p>Who we are, a list of our websites</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/mycorrplus" className={styles.link}>
						MycorrPlus
					</Link>
					<p>
						Detailed information about our flagship fertilizer product,
						MycorrPlus
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/how-mycorrplus-works" className={styles.link}>
						How MycorrPlus works
					</Link>
					<p>
						An interview with Dr. Christine Jones on carbon sequestration and
						topsoil building
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/good-moisture-dryland-farms" className={styles.link}>
						Good Moisture for Dryland Farms
					</Link>
					<p>How MycorrPlus keeps plants green even during dry spells</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/building-organic-matter" className={styles.link}>
						Building Organic Matter
					</Link>
					<p>
						The best way to build organic matter is through carbon sequestration
					</p>
				</li>
				<li className={styles.listItem}>
					<Link
						href="/7-keys-for-activating-carbon-sequestration"
						className={styles.link}>
						7 Keys for Activating the Carbon Sequestration Switch
					</Link>
					<p>How to get carbon sequestration really going in your soil</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/benefits-to-applying-mycorrplus" className={styles.link}>
						Benefits to Applying MycorrPlus
					</Link>
					<p>There are numerous benefits to applying MycorrPlus</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/carbon-sequestration-solution" className={styles.link}>
						Carbon Sequestration IS Your Solution
					</Link>
					<p>
						Dr. Mercola on why carbon sequestration is key for improving soil
						and yields
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/mycorrplus-videos" className={styles.link}>
						MycorrPlus videos
					</Link>
					<p>Video testimonials about MycorrPlus (formerly GroPal Balance)</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/mycorrplus-testimonials" className={styles.link}>
						MycorrPlus testimonials
					</Link>
					<p>Customer testimonials regarding MycorrPlus</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/faqs" className={styles.link}>
						FAQs
					</Link>
					<p>Helpful facts about MycorrPlus</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/soil-balance-studies" className={styles.link}>
						Soil Balance studies
					</Link>
					<p>
						Results from studies with Soil Balance, a component of MycorrPlus
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/gropal-for-animal-consumption" className={styles.link}>
						GroPal for animal consumption
					</Link>
					<p>Using GroPal sea mineral concentrate in animal drinking water</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/photo-gallery" className={styles.link}>
						Photo Gallery
					</Link>
					<p>Photos of Soil Balance at work</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/application-for-every-budget" className={styles.link}>
						An application to fit every budget
					</Link>
					<p>Application rates that work for any budget</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/available-plant-food" className={styles.link}>
						Available plant food
					</Link>
					<p>
						How MycorrPlus converts tied-up nutrients into available plant food
					</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/conquer-nature" className={styles.link}>
						Conquer nature
					</Link>
					<p>Learn how to cooperate with nature for better yields</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/eliminating-hardpan" className={styles.link}>
						Eliminating hardpan
					</Link>
					<p>How MycorrPlus eliminates hardpan by structuring the soil</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/controlling-soil-ph" className={styles.link}>
						Controlling soil pH
					</Link>
					<p>The best way to balance soil pH without excessive lime</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/soil-labs" className={styles.link}>
						Soil labs
					</Link>
					<p>Lab results showing nutrient balance restoration</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/grow-superfoods" className={styles.link}>
						Grow superfoods
					</Link>
					<p>How MycorrPlus can turn grass into a "superfood"</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/build-drought-tolerance" className={styles.link}>
						Build drought tolerance
					</Link>
					<p>How MycorrPlus improves soil moisture retention</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/build-topsoil" className={styles.link}>
						Build topsoil
					</Link>
					<p>Why MycorrPlus is the best solution for building topsoil</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/nutrient-density" className={styles.link}>
						Nutrient density
					</Link>
					<p>How MycorrPlus increases the nutrient density of plants</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/organic-applications" className={styles.link}>
						Organic applications
					</Link>
					<p>MycorrPlus is registered with WSDA for organic use</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/mycorrplus-application-sheet" className={styles.link}>
						MycorrPlus application sheet
					</Link>
					<p>Detailed application guidelines for optimal results</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/mycorrplus-price-list" className={styles.link}>
						MycorrPlus price list
					</Link>
					<p>Various sizes available</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/more-bang-for-your-buck" className={styles.link}>
						Why MycorrPlus is "more bang for the buck"
					</Link>
					<p>Get maximum fertilizer efficiency</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/dr-maynard-murrays-research" className={styles.link}>
						Dr. Maynard Murray's Research
					</Link>
					<p>Breakthrough research on sea minerals</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/mycorrplus-magazine-articles" className={styles.link}>
						MycorrPlus magazine articles
					</Link>
					<p>Our advertising articles in various agricultural magazines</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/pages-for-gardeners" className={styles.link}>
						Pages for gardeners
					</Link>
					<p>Helpful AG-USA info for gardeners</p>
				</li>
				<li className={styles.listItem}>
					<Link href="/contact" className={styles.link}>
						Contact
					</Link>
					<p>Ways to contact us</p>
				</li>
			</ul>
		</div>
	);
};

export default SiteMap;
