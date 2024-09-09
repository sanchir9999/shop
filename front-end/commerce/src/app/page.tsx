import { Section1 } from "@/components/ui/Section1"
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/Footer";
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center h-full ">
        <Navbar />
        <Section1 />
        <Footer />
      </div>
    </>
  );
}
