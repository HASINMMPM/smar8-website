
import Hero from '../../components/about/Hero'
import OurStory from '../../components/about/OurStory'
import Cta from '../../components/commen/Cta'
import Achievements from '../../components/about/Achievements'
import LearnMore from '../../components/about/LearnMore'

const AboutUs = () => {
    return (
        <>
            <Hero />
            <OurStory />
            <Achievements />
            <LearnMore />
            <Cta heading="List, manage, and maintain your properties at scale. Effortlessly." buttonText="Get Started" buttonUrl="/#" />
        </>
    )
}

export default AboutUs