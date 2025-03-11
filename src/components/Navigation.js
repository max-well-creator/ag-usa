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
				<li>
					<Link href="/crops">Crop Apps</Link>
				</li>
				<li>
					<Link href="/organic">Organic</Link>
				</li>
				<li>
					<Link href="/keypages">Key Pages</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
