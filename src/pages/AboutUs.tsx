import React from 'react'
import Hero from '../components/about/Hero'
import OurStory from '../components/about/OurStory'
import Cta from '../components/commen/Cta'
import Achievements from '../components/about/Achievements'
import LearnMore from '../components/about/LearnMore'

const AboutUs = () => {
    return (
        <>
            <Hero />
            <OurStory />
            <Achievements />
            <LearnMore />
            <Cta />
        </>
    )
}

export default AboutUs