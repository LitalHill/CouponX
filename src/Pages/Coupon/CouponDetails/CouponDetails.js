import React from "react";

const CouponDetails = ({ coupon }) => {
	const { imgUrl, title, description, price, startDate, endDate } = coupon;
	
	return (
		<div className="bg-white border p-8 rounded-md shadow-md max-w-lg mx-auto my-16">
			<img
				src={imgUrl}
				alt={title}
				className="w-full h-64 object-cover mb-6 rounded-md"
			/>
			<div className="text-3xl font-semibold mb-4">{title}</div>
			<div className="text-gray-800 text-lg mb-4">{description}</div>
			<div className="text-green-800 text-2xl mb-4">${price}</div>
			<div className="text-xl text-gray-800 mb-4">Starts: {startDate}</div>
			<div className="text-xl text-gray-800 mb-6">Expires: {endDate}</div>
		</div>
	);
};

export default CouponDetails;
