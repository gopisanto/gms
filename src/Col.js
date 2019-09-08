import React from 'react';

const Col = ({numCol, children}) => <div className={`col${numCol}`}>{children}</div>;

export default Col;