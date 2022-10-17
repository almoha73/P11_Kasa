import React from "react";
import about from "../assets/img/about.jpg";
import home from "../assets/img/home.jpg";
const Banner = ({text}) => {
	return (
		<div className="dark-title">
			<div className="title">
				<img src={about} alt="" />

				{text && (
					<>
						<img src={home} alt="" />
						<h1>Chez vous, partout et ailleurs</h1>
					</>
				)}
			</div>
		</div>
	);
};

export default Banner;
