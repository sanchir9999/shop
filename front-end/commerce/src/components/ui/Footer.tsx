import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const Footer = () => {
    return (
        <div className="h-[282px] bg-black w-full flex flex-col items-center justify-center">
            <div className="flex items-center w-[1040px] justify-between">
                <Image src="/Img/Logo.png" width={41} height={34} alt="hoodie" />
                <div className="flex gap-[38px]">
                    <div className="flex gap-[20px] justify-center items-center">
                        <div className="w-[48px] h-[48px] rounded-full border-x-2 border-y-2 flex justify-center items-center">
                            <FiPhone className="rounded text-white w-[20px] h-[20px]" />
                        </div>
                        <h2 className="text-white">(976) 7007-1234</h2>
                    </div>
                    <div className="flex gap-[20px] justify-center items-center">
                        <div className="w-[48px] h-[48px] rounded-full border-x-2 border-y-2 flex justify-center items-center">
                            <FiMail className="text-white" />
                        </div>
                        <h2 className="text-white">contact@ecommerce.mn</h2>
                    </div>
                </div>

            </div>
            <div className="w-[1040px]  border border-[#FFFFFF1A] border-y-2 mt-[43px]">
            </div>
            <div className="flex justify-between gap-[733px] w-[1040px] h-[20px]">
                <h2 className="text-white">© 2024 Ecommerce MN</h2>
                <div className="flex  text-white gap-[26px]">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <CiLinkedin />
                </div>
            </div>
        </div>
    );
};
