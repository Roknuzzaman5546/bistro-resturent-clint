import Cover from "../../Shared/Cover";
import img from '../../assets/menu/banner3.jpg'
import Popularmenu from "../Home/Popularmenu";

const Menu = () => {
    return (
        <div>
            <Cover
            img={img}
            title={'OUR MENU'}
            subtitle={'Would you like to try a dish?'}
            ></Cover>
            <Popularmenu></Popularmenu>
            <Cover
            img={img}   
            title={'OUR MENU'}
            subtitle={'Would you like to try a dish?'}
            ></Cover>
            <Popularmenu></Popularmenu>
            <Cover
            img={img}
            title={'OUR MENU'}
            subtitle={'Would you like to try a dish?'}
            ></Cover>
            <Popularmenu></Popularmenu>
        </div>
    );
};

export default Menu;