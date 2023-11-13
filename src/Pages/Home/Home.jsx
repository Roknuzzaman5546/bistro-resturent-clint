import Banner from "./Banner";
import Contact from "./Contact";
import Featred from "./Featred";
import Menu from "./Menu";
import Slider from "./Swiper";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Menu></Menu>
            <Contact></Contact>
            <Featred></Featred>
        </div>
    );
};

export default Home;