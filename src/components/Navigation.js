import styles from "../styles/Navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
	return (
		<nav className={styles.top_nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/MycorrPlus">MycorrPlus</Link>
				</li>
				<li>
					{/* TODO: make this a slider */}
					<Link href="/Gallery">Photo Gallery</Link>
				</li>
				<li>
					<Link href="/Crops">Crop Apps</Link>
				</li>
				<li>
					<Link href="/Results">Soil Lab Results</Link>
				</li>
				<li>
					<Link href="/Organic">Organic</Link>
				</li>
				<li>
					<Link href="/FAQ">FAQs</Link>
				</li>
				<li>
					<Link href="/About">About</Link>
				</li>
				<li>
					<Link href="/Contact">Contact</Link>
				</li>
				<li>
					<Link href="/Sitemap">Sitemap</Link>
				</li>
				{/* I don't know where the following pages are linked from on the original site */}
				<li>
					<Link href="/BuildOrganicMatter">Build Organic Matter</Link>
				</li>
				<li>
					<Link href="/7keys">
						7 Keys for Activating the Carbon Sequestration Switch
					</Link>
				</li>
				<li>
					<Link href="/Sequestion">Carbon Sequestion</Link>
				</li>
				<li>
					<Link href="/Testimonials">MycorrPlus Testimonials</Link>
				</li>
				<li>
					<Link href="/ConquereNature">Conquere Nature</Link>
				</li>
				<li>
					<Link href="/SuperFood">Super Food</Link>
				</li>
				<li>
					<Link href="/DroughtTolerance">Drought Tolerance</Link>
				</li>
				<li>
					<Link href="/BuildTopSoil">Build Top Soil</Link>
				</li>
				<li>
					<Link href="/Great Value">MycorrPlus ROI</Link>
				</li>
				<li>
					<Link href="/Peanuts">Peanuts</Link>
				</li>
				<li>
					<Link href="/Cotton">Cotton</Link>
				</li>
				<li>
					<Link href="/Corn">Corn</Link>
				</li>
				<li>
					<Link href="/FoodPlots">Food Plots</Link>
				</li>
				<li>
					<Link href="/SAS">SAS</Link>
				</li>
				<li>
					<Link href="/SoilMaxx">Soil Maxx</Link>
				</li>
				<li>
					<Link href="/SoilRestoration">Soil Restoration</Link>
				</li>
				{/* make page */}
				<li>
					<Link href="/Videos">Videos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
