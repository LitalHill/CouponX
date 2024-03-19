import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Products from "../../components/Product/Products";
import SearchCoupon from "../SearchCoupon/SearchCoupon";

const Store = () => {
	const [coupons, setCoupons] = useState([]);
	

	useEffect(() => {
		fetchCoupons();
	}, []);

	const fetchCoupons = async () => {
		const response = await fetch("http://localhost:9090/coupons", {
			method: 'GET',
		});

		if (response.ok) {
			const data = await response.json();
			setCoupons(data);
		}
	};

	const handleSearch = async (searchTerm) => {
		const response = await fetch(`http://localhost:9090/coupons/search?category=${searchTerm}`)
		if (response.ok) {
			const coupons = await response.json();
			setCoupons(coupons)
		}

	}

	return (
		<>
			<Layout>
				<SearchCoupon onSearchTermChanged={handleSearch}/>
                <Products coupons={coupons}/>
            </Layout>
		</>
	);
};

export default Store;
