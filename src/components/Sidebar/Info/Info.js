import Link from "next/link";
import React from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";

export default function Info() {
	return (
		<SidebarLayout>
			<h3>More Info:</h3>
			<ul>
				<li>
					<Link href="/Videos">Video Testimonials</Link>
				</li>
				<li>
					<Link href="/Testimonials">Testimonials</Link>
				</li>
				<li>
					<Link href="/MaynardMurrayResearch">Dr. Murray's Research</Link>
				</li>
				<li>
					<Link href="/Articles">Articles</Link>
				</li>
				<li>
					<Link href="/Hay">HayMax Conditioner</Link>
				</li>
				<li>
					<Link href="/Silage">Sil-Tec Silage</Link>
				</li>
			</ul>
		</SidebarLayout>
	);
}
