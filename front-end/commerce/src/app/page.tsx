import { Section1 } from "@/components/ui/section1"
import { Navbar } from "@/components/ui/navbar";
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center min-h-screen">
        <Navbar />
        <Section1 />
      </div>
    </>
  );
}
