import React, { useState } from "react";
import "../Content/Content.css";
function Content() {
	const [categories, setCategories] = useState([]); //useState
	return (
		<div className='content'>
			<div className='info'>
				<h2 className='category-title'>Category Title</h2>
				<p className='category-description'>
					lorem ipsum dolor sit amet, consectetur adip
				</p>
			</div>
			<div className='categories-content'>
				{/* {
				categories.map(category => {
					<div className='category-content'>
					<h3 className='box-title'>{category.title}</h3>
					<p className='box-description'>
					{category.desc}
					</p>
				</div>
				})
			} */}
				<div className='category-content'>
					<h3 className='box-title'>Category Title</h3>
					<p className='box-description'>
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
				<div className='category-content'>
					<h3 className='box-title'>Category Title</h3>
					<p className='box-description'>
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
				<div className='category-content'>
					<h3 className='box-title'>Category Title</h3>
					<p className='box-description'>
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
				<div className='category-content'>
					<h3 className='box-title'>Category Title</h3>
					<p className='box-description'>
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
			</div>
		</div>
	);
}

export default Content;
