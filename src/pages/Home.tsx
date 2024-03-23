import ContactMe from "../components/ContactMe"
import Intro from "../components/Intro"
import MyWorks from "../components/MyWorks"
import Patner from "../components/Patner"
import Price from "../components/Price"
import Reviews from "../components/Reviews"

const Home = () => {
    return (
        <>
            <Intro />
            <Price />
            <MyWorks />
            <Patner />
            <Reviews />
            <ContactMe />
        </>
    )
}

export default Home