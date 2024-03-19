import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { items: [], totalQuantity: 0 },
	reducers: {
		addItem(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((i) => i.uuid === newItem.uuid);

			state.totalQuantity++;

			if (!existingItem) {
				state.items.push({
					uuid: newItem.uuid,
					title: newItem.title,
					category: newItem.category,
					quantity: 1,
				});
			}
		},
		removeItem(state, action) {
			const itemUuid = action.payload;
			const existingItem = state.items.find((i) => i.uuid === itemUuid);

			state.totalQuantity--;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((i) => i.uuid !== itemUuid);
			} else {
				existingItem.quantity--;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
