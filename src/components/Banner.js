import styles from "../styles/Banner.module.scss";
import Image from "next/image";

const Banner = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.banner_left}>
				<Image
					src="/images/clearpixel.gif"
					alt="Banner Left"
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.banner_right}>
				<Image
					src="/images/clearpixel.gif"
					alt="Banner Right"
					width={100}
					height={100}
				/>
			</div>
		</section>
	);
};

export default Banner;
