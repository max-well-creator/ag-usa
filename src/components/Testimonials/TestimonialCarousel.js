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
	return (
		<MDBContainer className="my-5">
			<MDBCarousel showControls dark>
				{refactoredTestimonials.map((testimonial, index) => {
					const { name, location, results, summary } = testimonial;
					return (
						<MDBCarouselItem className=" text-center">
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
							<ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
								<li>
									<MDBIcon fas icon="star" size="sm" />
								</li>
								<li>
									<MDBIcon fas icon="star" size="sm" />
								</li>
								<li>
									<MDBIcon fas icon="star" size="sm" />
								</li>
								<li>
									<MDBIcon fas icon="star" size="sm" />
								</li>
								<li>
									<MDBIcon far icon="star" size="sm" />
								</li>
							</ul>
						</MDBCarouselItem>
					);
				})}
			</MDBCarousel>
		</MDBContainer>
	);
}
