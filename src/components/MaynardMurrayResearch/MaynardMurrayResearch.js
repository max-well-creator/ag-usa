import Link from "next/link";
import React from "react";
import styles from "./MycorrPlusResearch.module.scss";

const MycorrPlusResearch = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>MycorrPlus – Dr. Maynard Murray Research</h1>
			<p className={styles.intro}>
				For 30 years, Dr. Maynard Murray studied the impact of sea minerals on
				plants and animals—with remarkable results!
			</p>

			<section className={styles.section}>
				<h2 className={styles.sectionHeading}>
					Animal Studies: Disease Resistance
				</h2>
				<ul className={styles.list}>
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
						<strong>Rabbits & Pigs:</strong> Experimental groups exhibited fewer
						signs of high cholesterol and overall improved health.
					</li>
					<li>
						<strong>Chickens:</strong> Chickens fed produce grown with sea
						minerals had fewer worms and no leg disorders.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2 className={styles.sectionHeading}>
					Plant Studies: Enhanced Growth and Disease Resistance
				</h2>
				<ul className={styles.list}>
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

			<section className={styles.section}>
				<h2 className={styles.sectionHeading}>Key Takeaways</h2>
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
					You can even supplement your diet with Ionic Sea Minerals—the next
					best thing if you don't consume produce grown with sea minerals.
				</p>
			</section>

			<section className={styles.note}>
				<p>
					<small>
						Note: Dr. Murray’s research is preliminary and intended to stimulate
						further study. These results should not be interpreted as conclusive
						health claims.
					</small>
				</p>
			</section>

			<section className={styles.ctaSection}>
				<p>
					<Link href="/purchase-mycorrplus">
						<span className={styles.link}>Purchase MycorrPlus Today!</span>
					</Link>
				</p>
				<p>
					<Link href="/dr-christine-jones-interview">
						<span className={styles.link}>
							Read Dr. Christine Jones’ Interview on Carbon Sequestration
						</span>
					</Link>
				</p>
				<p>
					<Link href="/contact">
						<span className={styles.link}>Contact Us for More Information</span>
					</Link>
				</p>
			</section>
		</div>
	);
};

export default MycorrPlusResearch;
