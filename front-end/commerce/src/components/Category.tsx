import { Navbar } from "./ui/navbar";  // Note: Adjust the case if needed
import { Footer } from "./ui/Footer";
import { Container } from "./Container";
import { Children } from "react";
import Image from "next/image";
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
            <div className="h-full m-auto w-[1040px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={product.src} width={300} height={300} alt={product.alt} />
                            <h2 className="text-center font-semibold">{product.title}</h2>
                            <p className="text-center">{product.price}</p>
                        </div>
                    ))}
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={product.src} width={300} height={300} alt={product.alt} />
                            <h2 className="text-center font-semibold">{product.title}</h2>
                            <p className="text-center">{product.price}</p>
                        </div>
                    ))}
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={product.src} width={300} height={300} alt={product.alt} />
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
