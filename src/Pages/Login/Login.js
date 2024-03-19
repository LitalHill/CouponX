import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const performLogin = async ({ username, password }) => {
		const response = await fetch("http://localhost:9090/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) {
			const data = await response.text();
			return data;
		}
		return undefined;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const token = await performLogin({ username, password });

		if (token) {
			dispatch(authActions.login(token));
			navigate("/home");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto mt-8"
		>
			<h1 className="text-2xl font-semibold mb-4">Coupon X</h1>

			<input
				type="email"
				value={username}
				placeholder="Email address"
				onChange={(event) => setUserName(event.target.value)}
				className="w-full p-2 mb-4 border border-gray-300 rounded-md"
			/>

			<input
				type="password"
				value={password}
				placeholder="Password"
				onChange={(event) => setPassword(event.target.value)}
				className="w-full p-2 mb-4 border border-gray-300 rounded-md"
			/>

			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
				>
					Login
				</button>
				<p className="text-sm">
					Don't have an account?{" "}
					<NavLink
						to="/sign-up"
						className="text-blue-500"
					>
						Sign Up
					</NavLink>
				</p>
			</div>
		</form>
	);
};

export default Login;
