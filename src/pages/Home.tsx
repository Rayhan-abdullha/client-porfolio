import ContactMe from "../components/ContactMe"
import Expriences from "../components/Expriences"
import Intro from "../components/Intro"
import MyWorks from "../components/MyWorks"
import Patner from "../components/Patner"
import Price from "../components/Price"
import Reviews from "../components/Reviews"
import TimelineSection from "../components/TimelineSection"
const Home = () => {
    return (
        <>
            <Intro />
            <Expriences />
            <TimelineSection />
            <Price />
            <MyWorks />
            <Patner />
            <Reviews />
            <ContactMe />
        </>
    )
}

export default Home