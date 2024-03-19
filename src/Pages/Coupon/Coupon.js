import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CouponDetails from "./CouponDetails/CouponDetails";

const Coupon = (
) => {
	const { uuid } = useParams();
	const [coupon, setCoupon] = useState("");

	useEffect( () => {
		fetchCoupon()
	},[uuid])

	const fetchCoupon = async () => {
		await fetch(`http://localhost:9090/coupons/${uuid}`)
			.then((response) => response.json())
			.then((data) => setCoupon(data))
			.finally(console.log(coupon));
	};

	return (
		<CouponDetails coupon={coupon}/>
	);
};

export default Coupon;
