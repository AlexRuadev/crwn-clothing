import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		// if isGoogleSignIn is true, we will render the button with class google-sign, else, empty string
		className={`${inverted ? 'inverted' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
