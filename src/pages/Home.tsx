import ContactMe from "../components/ContactMe"
import Intro from "../components/Intro"
import MyWorks from "../components/MyWorks"
import Patner from "../components/Patner"
import Price from "../components/Price"
import Reviews from "../components/Reviews"
import MainLayout from "../layout/MainLayout"

const Home = () => {
    return (
        <MainLayout>
            <Intro />
            <Price />
            <MyWorks />
            <Patner />
            <Reviews />
            <ContactMe />
        </MainLayout>
    )
}

export default Home