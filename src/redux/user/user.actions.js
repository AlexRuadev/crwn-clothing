// those are function which return object
export const setCurrentUser = (user) => ({
	// needs to be the same string as what our user-reducer is expecting
	type: 'SET_CURRENT_USER',
	payload: user
});
