import { Link } from "react-router-dom";
import MenuItem from "../../../../Components/MenuItem/MenuItem";
import ShareCover from "../../../../Components/Shared/ShareCover";

const MenuCategory = ({ title, items, coverImg }) => {
    return (
        <div>
            {title && <ShareCover img={coverImg} title={title} />}
            <div className="grid md:grid-cols-2 gap-4 my-12">
                {
                    items.map(item => <MenuItem key={item._id} menu={item} />)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline btn-secondary border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
        </div>
    );
};

export default MenuCategory;