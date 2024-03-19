import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignUp = () => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	const performSignUp = async () => {
		try {
			if (password !== confirmPassword) {
				return;
			}

			const response = await fetch(`http://localhost:9090/auth/sign-up`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.ok) {
				const data = await response.json();

				return data;
			}
		} catch (error) {
			console.error(error);
			return undefined;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const signUpData = await performSignUp({ username, password });

		if (signUpData) {
			//standby page...
			navigate("/login");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto mt-8"
		>
			<h1 className="text-2xl font-semibold mb-4">Sign Up</h1>

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

			<input
				type="password"
				value={confirmPassword}
				placeholder="Confirm password"
				onChange={(event) => setConfirmPassword(event.target.value)}
				className="w-full p-2 mb-4 border border-gray-300 rounded-md"
			/>

			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
				>
					Sign Up
				</button>
				<p className="text-sm">
					Already have an account?{" "}
					<NavLink
						to="/login"
						className="text-green-500"
					>
						Log in
					</NavLink>
				</p>
			</div>
		</form>
	);
};

export default SignUp;
