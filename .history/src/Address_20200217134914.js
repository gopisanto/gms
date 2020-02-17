import React from 'react';
import { map } from 'lodash';
import addresses from './addresses.json';

const Address = () => {
    console.log(`addresses are ${JSON(addresses).stringify()}`);
    return (
        <ul>
            {map(addresses, address => (<li>{`Address for ${address.name} is ${address.address}`}</li>))}
        </ul>
    );
}

export default Address;