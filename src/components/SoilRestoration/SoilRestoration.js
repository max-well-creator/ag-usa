import React from "react";

const WestCoastOfficeInfo = () => {
	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}>
			<h1>AG-USA West Coast Office</h1>
			<p>
				AG-USA has a West Coast office in Oregon. If you are on the West Coast,
				you'll save money on shipping by ordering directly from them.
			</p>
			<p>
				Please note: Orders for buckets or totes placed through our website will
				be shipped from our East Coast Office, which may incur additional
				shipping charges.
			</p>
			<p>
				Learn more on our website, but to place an order directly, please call
				our West Coast office:
			</p>
			<div style={{ marginTop: "20px" }}>
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
