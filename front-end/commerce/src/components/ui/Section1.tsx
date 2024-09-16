
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
export const Section1 = () => {
    return (
        <>
            <div className="bg-green h-full w-full">
                <div className="h-full m-auto w-[1040px]">
                    <div className="flex justify-center w-[1040px]">

                        <Button>Admin</Button>

                        <Image className="mt-[56px] rounded-2xl" src={"/img/hoodieee.jpg"} width={1040} height={300} alt="hoodie tsenher" />
                    </div>
                    <div>
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </>
    )
}
const productData = [
    { src: "/img/malgai.png", alt: "Inkblot Tee", title: "Inkblot Tee", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Gestures Longsleeve", title: "Gestures Longsleeve", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Chunky Glyph Cap", title: "Chunky Glyph Cap", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Local Stylists Crewneck", title: "Local Stylists Crewneck", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Chunky Glyph Cap", title: "Chunky Glyph Cap", price: "120,000₮" },
    { src: "/img/malgai.png", alt: "Doodle Hoodie", title: "Doodle Hoodie", price: "120,000₮" },
];

const bigImage = {
    src: "/img/malgai.png", // Том зурагны замыг энд оруулна уу
    alt: "Big Image",
    title: "Big Image",
    price: "120,000₮",
};
const bigImage2 = {
    src: "/img/malgai.png", // Том зурагны замыг энд оруулна уу
    alt: "Big Image",
    title: "Big Image",
    price: "120,000₮",
};

const ProductGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {productData.map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                    <Image className="rounded-2xl" src={product.src} width={300} height={300} alt={product.alt} />
                    <h2 className="text-center font-semibold ">{product.title}</h2>
                    <p className="text-center">{product.price}</p>
                </div>
            ))}
            {productData.map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                    <Image className="rounded-2xl" src={product.src} width={300} height={300} alt={product.alt} />
                    <h2 className="text-center font-semibold ">{product.title}</h2>
                    <p className="text-center">{product.price}</p>
                </div>
            ))}
        </div>

    );
};

export default ProductGrid;
