import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Shared/Cover";
import imgshop from '../../assets/shop/banner2.jpg'
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import Usemenu from "../../hooks/Usemenu";
import Foodcard from "./Foodcard";
import { useParams } from "react-router-dom";

const Shop = () => {
    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const indextab = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(indextab);
    const [menus] = Usemenu();
    const dessert = menus.filter(menu => menu.category === 'dessert')
    const pizza = menus.filter(menu => menu.category === 'pizza')
    const salad = menus.filter(menu => menu.category === 'salad')
    const drinks = menus.filter(menu => menu.category === 'drinks')
    const soup = menus.filter(menu => menu.category === 'soup')

    return (
        <div>
            <Cover
                img={imgshop}
                title={'OUR SHOP'}
                subtitle={'Would you like to try a dish?'}
            ></Cover>

            <div className=" mt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
                            {
                                salad.map(item => <Foodcard
                                    key={item._id}
                                    items={item}
                                ></Foodcard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
                            {
                                pizza.map(item => <Foodcard
                                    key={item._id}
                                    items={item}
                                ></Foodcard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
                            {
                                soup.map(item => <Foodcard
                                    key={item._id}
                                    items={item}
                                ></Foodcard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
                            {
                                dessert.map(item => <Foodcard
                                    key={item._id}
                                    items={item}
                                ></Foodcard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
                            {
                                drinks.map(item => <Foodcard
                                    key={item._id}
                                    items={item}
                                ></Foodcard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;