import React from 'react';

import Cabinet from "../cabinet";
import Address from "../address";
import Telephone from "../telephone";
import Add from "../add";
import Nav from "../nav";

const Profile = () => {
    return (
        <div>

            <Cabinet/>
            <Address/>
            <Telephone/>
            <Add/>
            <Nav/>

        </div>
    );
};

export default Profile;