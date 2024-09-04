import { MailIcon } from "lucide-react";
import { PhoneCallIcon } from "lucide-react";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
    return (
        <>
            <div className="px-4  lg:px-52 bg-[#7E33E0] w-full">
                <div className="lg:w-full h-14 flex flex-col md:flex-row items-center justify-center lg:justify-between ">
                    <div className="flex items-center gap-1 mb-2 md:mb-0">
                        <MailIcon className="w-4 h-4 text-[#F1F1F1]" />
                        <h2 className="text-[#F1F1F1] text-sm">monhbatsanchir1@gmail.com</h2>
                        <PhoneCallIcon className="w-4 h-4 text-[#F1F1F1]" />
                        <h2 className="text-[#F1F1F1] text-sm">+97688175658</h2>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <h2 className="text-[#F1F1F1] text-sm">Нэвтрэх</h2>
                        <CiUser className="w-4 h-4 text-[#F1F1F1]" />
                        <h2 className="text-[#F1F1F1] text-sm">Хадгалах</h2>
                        <CiHeart className="w-4 h-4 text-[#F1F1F1]" />
                        <LuShoppingCart className="w-6 h-6 text-[#F1F1F1]" />
                    </div>
                </div>
            </div>
            <div className="h-16 bg-white w-full  gap-2  lg:gap-[500px] flex items-center justify-center">
                <div className="flex justify-center items-center h-full lg:gap-10 gap-2">
                    <h1 className="text-[black]">
                        Ecommerce
                    </h1>
                    <h2>Нүүр</h2>
                    <h2>Ангилал</h2>
                </div>
                <div className="flex items-center ">
                    <div className="w-[250px] rounded-sm border-2 border-slate-500">
                        Хайх хэсэг бичигдэнэ
                    </div>
                    <div className="h-[35px] w-[40px] bg-[#FB2E86] flex justify-center items-center border">
                        <CiSearch className="h-[24px] w-[24px]  " />
                    </div>
                </div>
            </div>
        </>
    )
}