import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null
};
// if state is not defined, it will fall back with our initial state

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
