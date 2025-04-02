import Link from "next/link";
import React from "react";
import styles from "./ArticleList.module.scss";
import Image from "next/image";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Container,
	Row,
	Col,
} from "reactstrap";

export default function ArticleList({ articleType, array }) {
	return (
		<section className={styles.ArticleList}>
			<h3>{articleType}</h3>
			<Container>
				<Row>
					{array.map((article, index) => (
						<Col xs={12} sm={6} md={4} lg={3} key={index}>
							<Link href={article.href}>
								<Card
									style={{
										width: "100%", // Use 100% of the column width
										height: "350px",
										display: "flex",
										flexDirection: "column",
										marginBottom: "20px",
									}}>
									<div style={{ height: "50%", overflow: "hidden" }}>
										<Image
											src={article.image}
											alt={article.title}
											width={300} // Adjust as needed
											height={200} // Adjust as needed, maintaining aspect ratio
											objectFit="contain"
										/>
									</div>
									<CardBody
										style={{
											height: "50%",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
										}}>
										<div>
											<CardTitle tag="h5">{article.label}</CardTitle>
											<CardSubtitle className="mb-2 text-muted" tag="h6">
												By Paul Schnieder
											</CardSubtitle>
										</div>
									</CardBody>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}
