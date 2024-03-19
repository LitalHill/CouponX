import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Coupon from "./Pages/Coupon/Coupon";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Store from "./Pages/Store/Store";
import Home from "./Pages/Home/Home";

function App() {
	const token = useSelector((state) => state.auth.token);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={token ? <Navigate to="/home" /> : <Login />}
				/>
				<Route
					path="/home"
					element={token ? <Home /> : <Navigate to="/login" />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
				<Route
					path="/store/:uuid"
					element={token ? <Coupon /> : <Navigate to="/login" />}
				/>
				<Route
					path="/store"
					element={token ? <Store /> : <Navigate to="/login" />}
				/>
			</Routes>
		</>
	);
}

export default App;
