import Title from "../../Components/Title";
import Cover from "../../Shared/Cover";
import img from '../../assets/menu/banner3.jpg'
import Usemenu from "../../hooks/Usemenu";
import Menucategory from "./Menucategory";
import imgpizza from '../../assets/menu/pizza-bg.jpg'
import imgsalad from '../../assets/menu/salad-bg.jpg'
import imgsoup from '../../assets/menu/soup-bg.jpg'
import imgdessert from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
    const [menus] = Usemenu();

    const dessert = menus.filter(menu => menu.category === 'dessert')
    const pizza = menus.filter(menu => menu.category === 'pizza')
    const salad = menus.filter(menu => menu.category === 'salad')
    const offered = menus.filter(menu => menu.category === 'offered')
    const soup = menus.filter(menu => menu.category === 'soup')

    return (
        <div>
            <Cover
                img={img}
                title={'OUR MENU'}
                subtitle={'Would you like to try a dish?'}
                ></Cover>

            <Title
                Subheading={'---Dont miss---'}
                heading={'TODAYS OFFER'}
                    ></Title>
                <Menucategory
                items={offered}
            ></Menucategory>

            <Menucategory
                img={imgdessert}  
                items={dessert}
                title={'dessert'}
            ></Menucategory>

            <Menucategory
                img={imgpizza}
                items={pizza}
                title={'pizza'}
            ></Menucategory>

            <Menucategory
                img={imgsalad}
                items={salad}
                title={'salad'}
            ></Menucategory>

            <Menucategory
                img={imgsoup}
                items={soup}
                title={'soup'}
            ></Menucategory>
        </div>
    );
};

export default Menu;