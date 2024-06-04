import { useEffect, useState } from "react";
import SectionHeader from "../ShareSectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className="my-20">
            <SectionHeader heading={'TESTIMONIALS'} subHeading={'---What Our Clients Say---'} />
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="space-y-4 flex flex-col justify-center items-center w-10/12 mx-auto">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <ImQuotesLeft className="text-7xl"/>
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-yellow-500">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;