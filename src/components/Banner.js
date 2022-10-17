import React from "react";
import about from "../assets/img/about.jpg";
import home from "../assets/img/home.jpg";
const Banner = ({ text, noText }) => {
	return (
		<>
			{text && (
				<div
					className="dark-title"
					style={{ height: "111px" }}
				>
					<div className="title">
						<img src={home} alt="mountain" />
						<h1>Chez vous, partout et ailleurs</h1>
					</div>
				</div>
			)}
			{noText && (
				<div
				className="dark-title"
				style={{ height: "223px" }}
			>
				<div className="title">
					<img src={about} alt="mountain" />
					
				</div>
			</div>
			)}
		</>
	);
};

export default Banner;
