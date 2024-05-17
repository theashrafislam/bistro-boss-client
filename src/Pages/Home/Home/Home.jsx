import Banner from "../../../Components/Banner/Banner";
import CartSection from "../../../Components/CartSection/CartSection";
import Category from "../../../Components/Category/Category";
import Contact from "../../../Components/Contact/Contact";
import Feature from "../../../Components/FeatureSection/Feature";
import InfoSection from "../../../Components/InfoSection/InfoSection";
import PopularItem from "../../../Components/PopularItems/PopularItem";
import Testimonials from "../../../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <InfoSection/>
            <PopularItem/>
            <Contact/>
            <Feature/>
            <CartSection/>
            <Testimonials/>
        </div>
    );
};

export default Home;