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
					<Link href="/mycorrplus">MycorrPlus</Link>
				</li>
				{/* the old mycorrplus function is fuctionality */}
				<li>
					<Link href="/functionality">How Mycorr Works</Link>
				</li>
				<li>
					<Link href="/application">Application Guide</Link>
				</li>
				<li>
					{/* TODO: make this a slider */}
					<Link href="/gallery">Photo Gallery</Link>
				</li>
				<li>
					<Link href="/crops">Crop Apps</Link>
				</li>
				<li>
					<Link href="/results">Soil Lab Results</Link>
				</li>
				<li>
					<Link href="/organic">Organic</Link>
				</li>
				<li>
					<Link href="/faq">FAQs</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link href="/sitemap">Sitemap</Link>
				</li>
				{/* I don't know where the following pages are linked from on the original site */}
				<li>
					<Link href="/buildOrganicMatter">Build Organic Matter</Link>
				</li>
				<li>
					<Link href="/7keys">
						7 Keys for Activating the Carbon Sequestration Switch
					</Link>
				</li>
				<li>
					<Link href="/benefits">Benefits of MycorrPlus</Link>
				</li>
				<li>
					<Link href="/sequestion">Carbon Sequestion</Link>
				</li>
				<li>
					<Link href="/testimonials">MycorrPlus Testimonials</Link>
				</li>
				{/* make page */}
				<li>
					<Link href="/videos">Videos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
