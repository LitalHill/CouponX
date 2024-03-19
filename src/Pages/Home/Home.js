import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/Cart";

const Home = () => {
	const token = useSelector((state) => state.auth.token);
	const [coupons, setCoupons] = useState([]);

	useEffect(() => {
		fetchCustomerCoupons();
	}, []);

	const fetchCustomerCoupons = async () => {
		try {
			const response = await fetch("http://localhost:9090/coupons/customer", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
			});
			if (response.ok) {
				const data = await response.json();
				setCoupons(data);
			} else {
				console.error(
					"Failed to fetch coupons:",
					response.status,
					response.statusText
				);
			}
		} catch (error) {
			console.error("Error fetching coupons:", error.message);
		}
	};

	return (
		<>
			<Layout>
			{coupons.length > 0 ? (
				<Cart items={coupons} />
			) : (
				<div className="flex items-center justify-center h-screen">
					<p className="text-2xl font-bold text-gray-500">
						Looks like there are no coupons in your cart, let's go buy some!
					</p>
				</div>
			)}
			</Layout>
		</>
	);
};

export default Home;
