import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";

const MainHeader = () => {
	const token = useSelector((state) => state.auth.token);
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(authActions.logout(token));
		navigate("/login");
	};

	return (
		<header className="bg-blue-500 p-4 text-white">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-semibold">Coupon X</h1>
				<nav className="mt-2">
					<ul className="flex space-x-4 justify-end">
						<li>
							<Link
								to="/home"
								className="hover:underline"
							>
								My Cart{" "}
								<span className="bg-yellow-500 text-black px-2 py-1 rounded-full">
									{cartQuantity}
								</span>
							</Link>
						</li>
						<li>
							<Link
								to="/store"
								className="hover:underline"
							>
								Store
							</Link>
						</li>
						<li>
							<button
								onClick={handleLogout}
								className="hover:underline"
							>
								Logout
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default MainHeader;
