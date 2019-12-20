import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		// if isGoogleSignIn is true, we will render the button with class google-sign, else, empty string
		className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
