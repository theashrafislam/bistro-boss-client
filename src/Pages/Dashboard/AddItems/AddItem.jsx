import { useForm } from "react-hook-form";
import SectionHeader from "../../../Components/ShareSectionHeader/SectionHeader";
import userAxiosPublic from "../../../Hooks/userAxiosPublic";
import userAxiosSecure from "../../../Hooks/userAxiosSecure";
import Swal from "sweetalert2";

const img_hosting = import.meta.env.VITE_IMG_API_KEY;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting}`;

const AddItem = () => {
    const axiosPublic = userAxiosPublic();
    const axiosSecure = userAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(img_hosting_url, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        });
        if (res.data.success) {
            // now send the menu item data t o the server with the image url
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                category: data.category,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                //show will popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }

    return (
        <div>
            <div>
                <SectionHeader heading={'MANAGE ALL ITEMS'} subHeading={'---Hurry Up!---'} />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe name?</span>
                        </div>
                        <input {...register('name', { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>

                    <div className="flex items-center gap-6">
                        <div className="w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select
                                defaultValue={'default'}
                                {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        </div>
                        {/* price  */}
                        <label className="form-control w-full my-10">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input {...register('price')} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        </label>
                    </div>
                    <div className="my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full" />
                    </div>

                    <input type="submit" value={'Add Item'} className="flex items-cente gap-3 btn btn-secondary mt-3" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;