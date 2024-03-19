import ProductItem from "./ProductItem";

const Products = ({ coupons }) => {
	return (
		<section className="flex flex-wrap justify-center gap-4">
			{coupons.map((coupon) => {
				return (
					
						<ProductItem
							key={coupon.uuid}
							uuid={coupon.uuid}
							title={coupon.title}
							category={coupon.category}
							endDate={coupon.endDate}
						/>
				
				);
			})}
		</section>
	);
};

export default Products;
