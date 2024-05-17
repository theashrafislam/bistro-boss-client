import SectionHeader from "../ShareSectionHeader/SectionHeader";
import img from "../../assets/home/slide1.jpg"

const CartSection = () => {
    return (
        <div>
            <SectionHeader heading={'CHEF RECOMMENDS'} subHeading={'---Should Try---'} />
            <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-secondary border-0 border-b-4">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-secondary border-0 border-b-4">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-secondary border-0 border-b-4">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSection;