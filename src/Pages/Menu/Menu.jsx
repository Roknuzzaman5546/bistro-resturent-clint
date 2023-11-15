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

            <Cover
            img={imgdessert}
            title={'dessert'}
            subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <Menucategory
            items={dessert}
            ></Menucategory>


            <Cover
            img={imgpizza}
            title={'pizza'}
            subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <Menucategory
            items={pizza}
            ></Menucategory>

            <Cover
            img={imgsalad}
            title={'salad'}
            subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown'}
            ></Cover>
            <Menucategory
            items={salad}
            ></Menucategory>

            <Cover
            img={imgsoup}
            title={'soup'}
            subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown'}
            ></Cover>
            <Menucategory
            items={soup}
            ></Menucategory>
        </div>
    );
};

export default Menu;