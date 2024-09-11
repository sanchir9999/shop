import { Navbar } from "./ui/navbar";  // Note: Adjust the case if needed
import { Footer } from "./ui/Footer";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import Image from "next/image";
import Link from "next/link";
const productData = [
    { src: "/img/malgai.png", alt: "Inkblot Tee", title: "Inkblot Tee", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Gestures Longsleeve", title: "Gestures Longsleeve", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Chunky Glyph Cap", title: "Chunky Glyph Cap", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Local Stylists Crewneck", title: "Local Stylists Crewneck", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Chunky Glyph Cap", title: "Chunky Glyph Cap", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Doodle Hoodie", title: "Doodle Hoodie", price: "120,000₮" },
];

export const Category = () => {
    return (
        <>
            <Navbar />
            <div className="h-full m-auto w-[774px] flex gap-[20px] mt-[52px]">
                <div className="w-[245px] ">
                    <div className="w-full h-[216px] flex flex-col gap-[16px]">
                        <h2 className="font-bold text-[16px]">Ангилал</h2>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Малгай</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Усны сав</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">T-shirt</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Hoodie</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Tee</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Цүнх</Label>
                        </div>
                    </div>
                    <div className="w-full h-[216px] flex flex-col gap-[16px] mt-[48px]">
                        <h2 className="font-bold text-[16px]">Хэмжээ</h2>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Free</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">Усны сав</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">S</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">M</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">L</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">XL</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">2XL</Label>
                        </div>
                        <div className="flex gap-[8px]">
                            <Checkbox />
                            <Label htmlFor="email">3XL</Label>
                        </div>
                    </div>
                    <div className="w-full h-[248px]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Link href="ProductDetail">
                                <Image className="rounded-2xl" src={product.src} width={300} height={300} alt={product.alt} />
                                <h2 className="text-center font-semibold">{product.title}</h2>
                                <p className="text-center">{product.price}</p>
                            </Link>
                        </div>
                    ))}
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image className="rounded-2xl" src={product.src} width={300} height={300} alt={product.alt} />
                            <h2 className="text-center font-semibold">{product.title}</h2>
                            <p className="text-center">{product.price}</p>
                        </div>
                    ))}
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
