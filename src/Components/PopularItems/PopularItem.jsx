// import { useEffect, useState } from "react";
import SectionHeader from "../ShareSectionHeader/SectionHeader";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularItem = () => {
    const popular = useMenu();
    const popularData = popular.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularData = data.filter(item => item.category === 'popular')
    //             setMenu(popularData)
    //         })
    // }, [])
    return (
        <div className="mb-12">
            <SectionHeader heading={'FROM OUR MENU'} subHeading={'Popular Items'} />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularData.map(item => <MenuItem key={item._id} menu={item} />)
                }
            </div>
            <div className="flex justify-center items-center mt-6">
                <button className="btn btn-outline btn-secondary border-0 border-b-4">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularItem;