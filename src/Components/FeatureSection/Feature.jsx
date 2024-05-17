import SectionHeader from "../ShareSectionHeader/SectionHeader";
import featureImg from "../../assets/home/featured.jpg"
import "./FeatureSection.css"

const Feature = () => {
    return (
        <div className="feature-section text-white pt-8 bg-fixed my-20">
            <SectionHeader className="mt-10" subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img className="w-fit" src={featureImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-4">
                    <p>March 20, 2023</p>
                    <p className="text-xl">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline btn-secondary border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;