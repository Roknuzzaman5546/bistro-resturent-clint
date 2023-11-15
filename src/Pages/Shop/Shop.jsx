import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Shared/Cover";
import imgshop from '../../assets/shop/banner2.jpg'
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Cover
                img={imgshop}
                title={'OUR SHOP'}
                subtitle={'Would you like to try a dish?'}
            ></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;