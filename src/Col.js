import React from 'react';

const Col = ({ numCol, className, children }) => <div className={`col${numCol} ${className}`}>{children}</div>;

export default Col;