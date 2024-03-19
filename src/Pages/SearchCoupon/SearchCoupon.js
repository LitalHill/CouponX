const SearchCoupon = ({ onSearchTermChanged }) => {
	return (
		<div className="flex items-center justify-center my-4">
			<input
				type="text"
				placeholder="Search by category here..."
				onChange={(event) => onSearchTermChanged(event.target.value)}
				className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
			/>
		</div>
	);
};

export default SearchCoupon;
