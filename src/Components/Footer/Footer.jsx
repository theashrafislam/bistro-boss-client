import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-evenly items-center">
                <div className="bg-[#1F2937] text-center text-white py-16 w-full">
                    <h3 className="text-xl mb-1">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] text-white text-center py-16 w-full space-y-[26px]">
                    <h3 className="text-xl mb-1">Follow US</h3>
                    <p>Join us on social media</p>
                    <div className="flex gap-5 justify-center items-center">
                        <FaFacebook className="text-2xl"/>
                        <FaSquareInstagram className="text-2xl"/>
                        <FaTwitter className="text-2xl"/>
                    </div>
                </div>
            </div>
            <div className="text-center bg-[#151515]">
                <h3 className="py-4 text-lg text-white">Copyright &copy; 2024 CulinaryCloud. All rights reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;