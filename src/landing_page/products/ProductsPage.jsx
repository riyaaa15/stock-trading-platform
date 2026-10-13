import React from 'react';

import Hero from'./Hero';
import LeftSection from './leftSection';
import RightSection from './RightSection';
import Universe from './Universe';

import Navbar from '../Navbar';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
           <Hero />
           <LeftSection />
           <RightSection />
           <Universe />
        </>
     );
}

export default PricingPage;