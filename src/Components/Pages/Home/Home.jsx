import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Home = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>This is Home</h1>
            <h2>This is Home</h2>
            <h3>This is Home</h3>
            <h4>This is Home</h4>
            <h5>This is Home</h5>
            <h6 className='text-6xl'>This is Home</h6>
        </div>
    );
};

export default Home;