"use client";
import React from "react";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import refactoredTestimonials from "../../data/testimonials";

export default function TestimonialCarousel() {
	console.log("Loading");
	return (
		<MDBCarousel interval={3000}>
			{refactoredTestimonials.map((testimonial, index) => {
				const { name, location, results, summary } = testimonial;
				return (
					<MDBCarouselItem key={index} className=" text-center">
						<MDBRow className="d-flex justify-content-center">
							<MDBCol lg="8">
								<h5 className="mb-3">{name}</h5>
								<p>{location}</p>
								<p className="text-muted">
									<MDBIcon fas icon="quote-left" className="pe-2" />
									{summary}
								</p>
							</MDBCol>
						</MDBRow>
					</MDBCarouselItem>
				);
			})}
		</MDBCarousel>
	);
}
