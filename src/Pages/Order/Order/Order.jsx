import { useState } from "react";
import ShareCover from "../../../Components/Shared/ShareCover";
import cover from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCard from "../../../Components/Shared/OrderCard/OrderCard";
// import FoodCard from "../../../Components/FoodCard/FoodCard"
import useMenu from "../../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soups', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialindex = categories.indexOf(category);
    const [tabs, setTabs] = useState(initialindex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Helmet>
                <title>Our Order || Bistro Boss</title>
            </Helmet>
            <ShareCover img={cover} title={'Our Shop'} />
            <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderCard items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderCard items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderCard items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderCard items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderCard items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;