import { Helmet } from 'react-helmet-async';
import ShareCover from '../../../Components/Shared/ShareCover';
import ShareIMG from "../../../assets/menu/banner3.jpg"
import dessertIMG from "../../../assets/menu/dessert-bg.jpeg"
import soupIMG from "../../../assets/menu/soup-bg.jpg"
import saladIMG from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import SectionHeader from '../../../Components/ShareSectionHeader/SectionHeader';
import MenuCategory from './MenuCategory/MenuCategory';
import useMenu from '../../../Hooks/useMenu';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soups = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Our Menu || Bistro Boss</title>
            </Helmet>
            <ShareCover img={ShareIMG} title={'Hello I am Ashraful'}/>
            <SectionHeader heading={`TODAY'S OFFER`} subHeading={"---Don't miss---"}/>
            <MenuCategory items={offered}/>

            {/* dessert */}
            <MenuCategory items={salad}  title={'dessert'} coverImg={dessertIMG}/>
            
            <MenuCategory items={pizza}  title={'soups'} coverImg={soupIMG}/>
            <MenuCategory items={soups}  title={'salad'} coverImg={saladIMG}/>
            <MenuCategory items={dessert}  title={'pizza'} coverImg={pizzaImg}/>

        </div>
    );
};

export default Menu;