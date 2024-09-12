import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { Inter } from 'next/font/google';
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] });

export const Navbar = () => {
    return (
        <>
            <div className="h-[68px] bg-black w-full flex items-center">
                <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8">
                    <Link href="/">
                        <div className="flex items-center gap-[6px]">
                            <Image src="/img/Logo.png" width={36} height={36} alt="logo" />
                            <h2 className="text-white font-">Commerce</h2>
                        </div>
                    </Link>
                    <Link href="Category">
                        <Button variant="outline" className="bg-[black] text-xs md:text-sm text-white">
                            Ангилал
                        </Button>
                    </Link>
                    <div className="hidden md:flex w-[200px] lg:w-[300px] h-[40px]">
                        <div className="w-full h-full flex bg-[#18181B] items-center pl-4 pr-4">
                            <CiSearch className="text-white w-6 h-6" />
                            <h2 className="text-white w-full flex justify-start items-center opacity-30 text-xs md:text-sm">
                                Бүтээгдэхүүн хайх
                            </h2>
                        </div>
                    </div>
                    <div className="text-white flex items-center gap-[16px] lg:gap-[24px]">
                        <CiHeart className="w-5 h-5 md:w-6 md:h-6" />
                        <CiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                        <div className="hidden md:flex gap-[8px] text-white">
                            <Link href="Register">
                                <Button variant="outline" className="bg-[black] text-xs md:text-sm">
                                    Бүртгүүлэх
                                </Button>
                            </Link>
                            <Button variant="outline" className="bg-[#2563EB] text-xs md:text-sm">
                                Нэвтрэх
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
