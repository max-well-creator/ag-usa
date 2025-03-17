import React from "react";
import styles from "./SoilRestoration.module.scss";

const WestCoastOfficeInfo = () => {
	return (
		<div className={styles.container}>
			<h1>AG-USA West Coast Office</h1>
			<p>
				AG-USA has a West Coast office in Oregon. If you're on the West Coast,
				ordering directly from them can save you on shipping costs.
			</p>
			<p>
				Note: Orders for buckets or totes placed through our website ship from
				our East Coast office and may incur additional charges.
			</p>
			<p>To place an order directly, please call our West Coast office:</p>
			<div className={styles.officeInfo}>
				<strong>Global Restoration LLC</strong>
				<p>
					1513 NW Jackpine Ave.
					<br />
					Redmond, OR 97756
				</p>
				<p>Phone: (541) 788-8918</p>
			</div>
		</div>
	);
};

export default WestCoastOfficeInfo;
