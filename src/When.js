import React from 'react';

const When = ({guard, children}) => guard ? <>{children}</> : null;

export default When;