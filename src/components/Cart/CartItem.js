import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = ({ uuid, title, quantity, price }) => {
	const totalPrice = quantity * price;

	const dispatch = useDispatch();

	const handleRemoveItem = () => {
		dispatch(cartActions.removeItem(uuid));
	};

	return (
		<li className="bg-white border p-4 rounded-md shadow-md max-w-xs mx-auto mb-4 mt-4">
			<header className="text-lg font-semibold mb-2">{title}</header>
			<div className="flex justify-between items-center mb-2">
				<div className="text-gray-700">${totalPrice.toFixed(2)}</div>
				<span className="text-gray-500">(${price.toFixed(2)}/item)</span>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<div className="mr-2">
						X<span className="ml-1">{quantity}</span>
					</div>
					<button
						className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none"
						onClick={handleRemoveItem}
					>
						<p className="text-xs">Delete</p>
					</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
