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
            <div>
                <div className="rainbow-gradient-circle"></div>
                <div className="rainbow-gradient-circle theme-pink"></div>
            </div>
            <Intro />
            <Expriences />
            <TimelineSection />
            <MyWorks />
            <Price />
            <Patner />
            <Reviews />
            <ContactMe />
        </>
    )
}

export default Home