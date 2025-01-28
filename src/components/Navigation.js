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
					<Link href="/">MycorrPlus</Link>
				</li>
				<li>
					<Link href="/">Crop Apps</Link>
				</li>
				<li>
					<Link href="/">Organic</Link>
				</li>
				<li>
					<Link href="/">Key Pages</Link>
				</li>
				<li>
					<Link href="/">Shop</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>
					<Link href="/">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
