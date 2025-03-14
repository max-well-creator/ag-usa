import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<>
			<header className={styles.header_top}>
				<div className={styles.logo}>
					<Image
						src="/images/home-header.jpg"
						alt="AG-USA"
						height="100"
						width="140"
					/>
				</div>
			</header>
			<div className={styles.space} />
			<Navigation />
			<div className={styles.space} />
			<h2 className={styles.header_main}>
				Conquer Nature By Cooperating With It
			</h2>
		</>
	);
};

export default Header;
