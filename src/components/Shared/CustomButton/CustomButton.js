"use client";
import React from "react";
import { Button } from "reactstrap";

export default function CustomButton({ text, href }) {
	return (
		<Button href={href} color="success">
			{text}
		</Button>
	);
}
