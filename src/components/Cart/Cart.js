import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<CartItem
					uuid={item.uuid}
					key={item.uuid}
					title={item.title}
					quantity={item.quantity}
					price={item.price}
				/>
			))}
		</ul>
	);
};

export default Cart;
