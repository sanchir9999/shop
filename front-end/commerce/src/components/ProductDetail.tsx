import { Navbar } from "./ui/navbar";  // Note: Adjust the case if needed
import { Footer } from "./ui/Footer";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import Image from "next/image";
import { Fullscreen } from "lucide-react";
const productData = [
    { src: "/img/malgai.png", alt: "Inkblot Tee", title: "Inkblot Tee", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Gestures Longsleeve", title: "Gestures Longsleeve", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Chunky Glyph Cap", title: "Chunky Glyph Cap", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Local Stylists Crewneck", title: "Local Stylists Crewneck", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Chunky Glyph Cap", title: "Chunky Glyph Cap", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Doodle Hoodie", title: "Doodle Hoodie", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Doodle Hoodie", title: "Doodle Hoodie", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Doodle Hoodie", title: "Doodle Hoodie", price: "120,000₮" },

];

export const ProductDetail = () => {
    return (
        <>
            <Navbar />
            <div className="h-full m-auto w-[1040px] flex gap-[20px] mt-[52px] flex-col">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 text-center flex gap-[20px]">
                        <div className="w-[67px] gap-[8px] flex flex-col justify-end h-[392px]">
                            <Image className="rounded-md" src="/img/tsaashaharsan.png" width={300} height={300} alt="hoodie" title="hoodie" />
                            <Image className="rounded-md" src="/img/naasha.png" width={300} height={300} alt="hoodie" title="hoodie" />
                            <Image className="rounded-md" src="/img/taash.png" width={300} height={300} alt="hoodie" title="hoodie" />
                            <Image className="rounded-md" src="/img/face.png" width={300} height={300} alt="hoodie" title="hoodie" />
                        </div>
                        <div className=" w-[442px] h-[521px]">
                            <Image
                                className="rounded-2xl object-cover w-full h-full"
                                src="/img/tsaashaharsan.png"
                                alt="hoodie"
                                title="hoodie"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="bg-blue-200 p-4 text-center">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <h2 className="font-bold text-3xl">Холбоотой бүтээгдэхүүн</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image className="rounded-2xl" src={product.src} width={300} height={300} alt={product.alt} />
                            <h2 className="text-center font-semibold">{product.title}</h2>
                            <p className="text-center">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
