"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<nav className={styles.topNav}>
			<div className={styles.logo}>
				<Image
					src="/images/navigation/home-header.webp"
					alt="AG-USA"
					height={100}
					width={200}
				/>
			</div>
			{/* Hamburger Icon */}
			<div className={styles.menuToggle} onClick={toggleMenu}>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</div>
			<ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/MycorrPlus">MycorrPlus</Link>
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
				<li>
					<Link href="/Articles">Articles</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
