import React from "react";

const CategorySvg = ({ svg }) => (
	<div dangerouslySetInnerHTML={{ __html: svg }} />
);

export default CategorySvg;
