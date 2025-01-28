import Link from "next/link";
import React from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";

export default function Info() {
	return (
		<SidebarLayout>
			<h3>More Info:</h3>
			<ul>
				<li>
					<Link href="/categories">Purchase Products</Link>
				</li>
				<li>
					<Link href="/mycorrplus">MycorrPlus</Link>
				</li>
				<li>
					<Link href="/mycorrplusfunction">How MycorrPlus Works</Link>
				</li>
				<li>
					<Link href="/gallery">Photo Gallery</Link>
				</li>
				<li>
					<Link href="/videos">Video Testimonials</Link>
				</li>
				<li>
					<Link href="/testimonials">Testimonials</Link>
				</li>
				<li>
					<Link href="/faq">FAQs</Link>
				</li>
				<li>
					<Link href="/SoilLabs">Soil Lab Results</Link>
				</li>
				<li>
					<Link href="/drmaynardmurrayresearch">Dr. Murray's Research</Link>
				</li>
				<li>
					<Link href="/application">Application Guidelines</Link>
				</li>
				<li>
					<Link href="/articles">Articles</Link>
				</li>
				<li>
					<Link href="/hay">HayMax Conditioner</Link>
				</li>
				<li>
					<Link href="/silage">Sil-Tec Silage</Link>
				</li>
				<li>
					<Link
						href="https://ag-usa.net/garden.htm"
						target="_blank"
						rel="noopener noreferrer">
						For the Garden
					</Link>
				</li>
				<li>
					<Link
						href="https://www.max-well.net/"
						target="_blank"
						rel="noopener noreferrer">
						For Your Health
					</Link>
				</li>
			</ul>
		</SidebarLayout>
	);
}
