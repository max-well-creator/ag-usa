import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.column}>
				<p>&copy; 2025 AG-USA. All rights reserved.</p>
			</section>
			<section className={styles.column}>
				<Link href="/Sitemap">Sitemap</Link>
			</section>
		</footer>
	);
};

export default Footer;
