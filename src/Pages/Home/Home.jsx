import Banner from "./Banner";
import Bistrosection from "./Bistrosection";
import Contact from "./Contact";
import Featred from "./Featred";
import Menu from "./Popularmenu";
import Slider from "./Swiper";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Bistrosection></Bistrosection>
            <Menu></Menu>
            <Contact></Contact>
            <Featred></Featred>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;