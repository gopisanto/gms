import React from 'react';
import addresses from './addresses.json';

const Address = () => (
    <ul>
        {addresses.map(address => (<li>{`Address for ${address.name} is ${address.address}`}</li>))}
    </ul>
);

export default Address;