import React, { useState } from "react";
import "../Sidebar/Sidebar.css";
import CategorySvg from "../Svg";
import { icon1, icon2, icon3, icon4, icon5, icon6, logo } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faChevronUp,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
	const [allData, setAllData] = useState([
		{ name: "SELECTED CATEGORY", icon: icon1 },
		{ name: "CATEGORRY", icon: icon2 },
		{ name: "Reports", icon: icon3 },
		{ name: "Teams", icon: icon4 },
		{ name: "Notifications", icon: icon5 },
		{ name: "Settings", icon: icon6 },
	]);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const linksLi = (iconLink, txet) => {
		return (
			<li>
				<span className='icon'>
					<CategorySvg svg={iconLink} />
				</span>
				<span>{txet}</span>
			</li>
		);
	};

	console.log(allData[0].name);
	return (
		<div className='sidebar'>
			hhhhhh <br />
			<div>{true}</div>
			<div className='container'>
				<div className='logo'>
					<CategorySvg svg={logo} />
				</div>
				<p className='menu'>Menu</p>
				<div className='sidebar-list'>
					<ul>
						{linksLi(allData[0].icon, allData[0].name)}
						{linksLi(allData[1].icon, allData[1].name)}
						{linksLi(allData[2].icon, allData[2].name)}

						<div className='teams' onClick={toggleDropdown}>
							{linksLi(allData[3].icon, allData[3].name)}
							{isOpen ? (
								<FontAwesomeIcon icon={faChevronUp} />
							) : (
								<FontAwesomeIcon icon={faChevronDown} />
							)}
						</div>
						{isOpen && (
							<div className='dropdown'>
								<ul>
									<li>SUBCATEGORY</li>
									<li className='subcategory'>
										<span>SELECTED subcategory</span>
										<span>
											<FontAwesomeIcon icon={faChevronRight} />
										</span>
									</li>
									<li>Engineering</li>
									<li>Marketing</li>
								</ul>
							</div>
						)}
						{linksLi(allData[4].icon, allData[4].name)}
						{linksLi(allData[5].icon, allData[5].name)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
