import Image from "next/image";

export const Section1 = () => {
    return (
        <>
            <div className="w-full h-full m-auto">
                <div>
                    <Image src={"/img/hoodie.png"} width={1040} height={300} alt="hoodie tsenher" />
                </div>
                <div>
                    <ProductGrid />
                </div>
            </div>
        </>
    )
}
const ProductGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-black">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
                <Image src="/img/nom.png" width={300} height={300} alt="The Prompt Magazine" />
                <h2 className="text-center font-semibold text-white">The Prompt Magazine</h2>
                <p className="text-center text-white">120,000₮</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
                <Image src="/img/emegtei.png" width={300} height={300} alt="Chunky Glyph Tee" />
                <h2 className="text-center font-semibold text-white">Chunky Glyph Tee</h2>
                <p className="text-center text-white">120,000₮</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
                <Image src="/img/usnii sav.png" width={300} height={300} alt="All Smiles Nalgene" />
                <h2 className="text-center font-semibold text-white">All Smiles Nalgene</h2>
                <p className="text-center text-white">120,000₮</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
                <Image src="/img/emegtei2.png" width={300} height={300} alt="Wildflower Hoodie" />
                <h2 className="text-center font-semibold text-white">Wildflower Hoodie</h2>
                <p className="text-center text-white">108,000₮</p>
            </div>

            {/* Add more items as needed */}
        </div>
    );
};
