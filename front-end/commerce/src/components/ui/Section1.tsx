
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button"
export const Section1 = () => {
    return (
        <>
            <div className="bg-green h-full w-full">
                <div className="h-full m-auto w-[1040px]">
                    <div className="flex justify-center w-[1040px]">
                        <Image src={"/img/hoodieee.jpg"} width={1040} height={300} alt="hoodie tsenher" />
                    </div>
                    <div>
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </>
    )
}
const ProductGrid = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-black">
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="The Prompt Magazine" />
                    <h2 className="text-center font-semibold text-white">The Prompt Magazine</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="Chunky Glyph Tee" />
                    <h2 className="text-center font-semibold text-white">Chunky Glyph Tee</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="All Smiles Nalgene" />
                    <h2 className="text-center font-semibold text-white">All Smiles Nalgene</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="Wildflower Hoodie" />
                    <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                    <p className="text-center text-white">108,000₮</p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col bg-black gap-6 p-4 w-[1036px] justify-start">
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <Image src="/img/malgai.png" width={234} height={300} alt="Wildflower Hoodie" />
                            <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                            <p className="text-center text-white">108,000₮</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/img/malgai.png" width={234} height={300} alt="Wildflower Hoodie" />
                            <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                            <p className="text-center text-white">108,000₮</p>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 flex flex-col items-start">
                        <Image src="/img/malgai.png" width={508} height={752} alt="Big Image" />
                        <h2 className="text-center font-semibold text-white">Big Image</h2>
                        <p className="text-center text-white">120,000₮</p>
                    </div>
                </div>
                <div className="flex flex-col bg-black gap-6 p-4 w-[1036px] justify-start">
                    <div className="col-span-1 lg:col-span-2 flex flex-col items-start">
                        <Image src="/img/malgai.png" width={508} height={752} alt="Big Image" />
                        <h2 className="text-center font-semibold text-white">Big Image</h2>
                        <p className="text-center text-white">120,000₮</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <Image src="/img/malgai.png" width={234} height={300} alt="Wildflower Hoodie" />
                            <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                            <p className="text-center text-white">108,000₮</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/img/malgai.png" width={234} height={300} alt="Wildflower Hoodie" />
                            <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                            <p className="text-center text-white">108,000₮</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-black">
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="The Prompt Magazine" />
                    <h2 className="text-center font-semibold text-white">The Prompt Magazine</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="Chunky Glyph Tee" />
                    <h2 className="text-center font-semibold text-white">Chunky Glyph Tee</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="All Smiles Nalgene" />
                    <h2 className="text-center font-semibold text-white">All Smiles Nalgene</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="Wildflower Hoodie" />
                    <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                    <p className="text-center text-white">108,000₮</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-black">
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="The Prompt Magazine" />
                    <h2 className="text-center font-semibold text-white">The Prompt Magazine</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="Chunky Glyph Tee" />
                    <h2 className="text-center font-semibold text-white">Chunky Glyph Tee</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="All Smiles Nalgene" />
                    <h2 className="text-center font-semibold text-white">All Smiles Nalgene</h2>
                    <p className="text-center text-white">120,000₮</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/img/malgai.png" width={300} height={300} alt="Wildflower Hoodie" />
                    <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                    <p className="text-center text-white">108,000₮</p>
                </div>
            </div>
        </>
    );
};
