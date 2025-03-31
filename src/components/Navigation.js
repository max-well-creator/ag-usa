"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<nav className={styles.topNav}>
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
					<Link href="/FAQ">FAQs</Link>
				</li>
				<li>
					<Link href="/About">About</Link>
				</li>
				<li>
					<Link href="/Contact">Contact</Link>
				</li>
				<li>
					<Link href="/Articles">Articles</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
