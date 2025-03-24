import React from "react";
import styles from "./MycorrhizalFungi.module.scss";

const MycorrhizalFungi = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<p className={styles.date}>June, 2018</p>
				<p className={styles.author}>By Paul Schneider Jr., AG-USA</p>
			</header>

			<section className={styles.intro}>
				<p>
					Last month a leading farm publication had a 5-page article on
					mycorrhizal fungi. Come to find out, these oft over-looked fungi have
					the ability to greatly increase the interface between root and soil
					(see drawing). This enhances the efficiency at which the plant can
					take up nutrients and moisture.
				</p>
				<p>
					Unfortunately, modern farming practices tend to hinder and even
					destroy the development of mycorrhizal fungi.
				</p>
				<p>
					Soil cultivation, extensive use of NPK fertilizer, leaving the ground
					fallow for months, single-crop environments, plus extensive pesticide
					and herbicide use have taken a toll and minimized the growth of
					mycorrhizae.
				</p>
			</section>

			<section className={styles.section}>
				<p>
					In fact, when phosphorus levels are high in the soil, phosphorus will
					be high in the root—totally shutting down carbon sequestration. The
					plant will not feed mycorrhizae when the plant root has an excess of
					phosphorus.
				</p>
				<p>
					On the other hand, when phosphorus is low in the soil, the plant will
					feed mycorrhizae, and mycorrhizal fungi will supply the needed
					phosphorus.
				</p>
			</section>

			<section className={styles.section}>
				<p>
					Experts report that 97% of soil nutrients are tied up. In a good acre
					of farmland, this includes around 4,500 lbs. of phosphorus. Aerobic
					bacteria (like those in MycorrPlus) help to make these nutrients
					available.
				</p>
				<p>
					Once microbes make nutrients available, mycorrhizal fungi transport
					them up to the plant. You already have a lot of phosphorus in the
					soil—why not use it?
				</p>
			</section>

			<section className={styles.section}>
				<p>
					What else can we do to put these fungi back to work in our soils?
					AG-USA’s product, MycorrPlus, can help plant roots colonize
					mycorrhizal fungi in less-than-optimal soil environments.
				</p>
				<p>
					MycorrPlus contains 4 strains of mycorrhizal fungi and nutrients that
					feed both mycorrhizae and the aerobic bacteria working with them to
					enhance soil. Get the AG-USA info packet for simple strategies to
					further increase mycorrhizae growth.
				</p>
				<p>
					Although MycorrPlus can help row crops, it is even easier to establish
					mycorrhizal fungi in pasture and hay ground—fields that aren’t tilled
					and have no fallow period, so they continuously nurture fungi with
					sugar, increasing their development.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Mycorrhizae “Glue”</h2>
				<p>
					Mycorrhizae filaments are sticky. When they colonize a plant’s roots,
					they exude glomalin—a sticky sugary protein. This protein causes soil
					particles to stick together into aggregates, filling the soil with
					tiny air pockets and stabilizing surface soils against wind and water
					erosion.
				</p>
				<p>
					When soil is structured by mycorrhizal fungi, it helps water move
					quickly from the upper soil to deeper levels, protecting both the
					plant and aerobic microbes from being “drowned out” by waterlogged
					fields, and enabling quicker field re-entry after rain.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Mycorrhizae Transport Nutrients and Water</h2>
				<p>
					Drought isn’t just about a lack of moisture. When the ground is dry,
					it becomes hard for the plant to absorb needed nutrients. Mycorrhizal
					fungi help by transporting moisture and nutrients from deeper soil
					layers up to the plant, effectively acting as “drought insurance” for
					farmers facing erratic weather.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Symbiotic Relationship</h2>
				<p>
					God created 90% of plants to function in relationship with mycorrhizal
					fungi. Grass and alfalfa certainly need these fungi, and the fungi
					depend on them. Let’s get this synergistic relationship going again!
				</p>
				<p>
					There are rich blessings in cooperating with nature. One of the goals
					of AG-USA is to help farmers re-establish mycorrhizal fungi in the
					soil.
				</p>
			</section>

			<section className={styles.section}>
				<p>
					For your pastures and hay acres, why not get some MycorrPlus and get
					the process started?
				</p>
				<ul className={styles.bulletList}>
					<li>Imagine no more compaction.</li>
					<li>
						Imagine your happiness when your pasture and hay continue
						growing—even when it gets dry.
					</li>
					<li>
						Imagine having so much grass that your cattle can’t keep up with it.
					</li>
					<li>Imagine more cows per acre, and more money in your pocket!</li>
				</ul>
			</section>
		</div>
	);
};

export default MycorrhizalFungi;
