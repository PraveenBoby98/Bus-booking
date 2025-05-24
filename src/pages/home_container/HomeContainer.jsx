import React  from "react";
import Hero from './hero/Hero'
import Search from '../search/Search'
import Category from '../home_container/category/Category'
import Offer from '../home_container/offer/Offer'
import WhyChooseUs from '../home_container/whychooseus/WhyChooseUs'

const HomeContainer = () => {
    return (
        <>
       <Hero/>
       <Search/>
       <Category/>
       <Offer/>
       <WhyChooseUs/>
        </>
    )
}

export default HomeContainer