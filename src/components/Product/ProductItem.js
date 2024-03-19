import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { CouponActions } from "../../store/coupon-slice";
import { useNavigate, useParams } from "react-router-dom";

const ProductItem = ({ uuid, title, category, endDate }) => {
	
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const token = useSelector((state) => state.auth.token);

	const purchaseCoupon = async () => {
		await fetch(
			`http://localhost:9090/coupons/purchase/${uuid}`,
			{
				method: "POST",
				headers: {
					"Authorization": token,
				},
				
			}
		);
	};

	const handleAddToCart = () => {
		dispatch(
			cartActions.addItem({
				uuid,
				title,
				category,
				endDate,
			}),
			CouponActions.toggle()
		);
		purchaseCoupon();
	};

	const toCouponDetails = () => {
		
		navigate(`/store/${uuid}`)
	}

	return (
		
			<div onClick={toCouponDetails} className="bg-white border p-4 rounded-md shadow-md max-w-xs mx-auto">
				<div className="text-lg font-semibold mb-2">{title}</div>
				<div className="text-gray-500 mb-2">{category}</div>
				<div className="text-sm text-gray-500 mb-2">Expires on: {endDate}</div>
				<div>
					<button
						onClick={handleAddToCart}
						className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
					>
						<p className="text-xs">Add to Cart</p>
					</button>
				</div>
			</div>
		
	);
};

export default ProductItem;
