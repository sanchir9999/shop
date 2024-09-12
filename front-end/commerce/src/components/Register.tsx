import { Footer } from "./ui/Footer"
import { Navbar } from "./ui/navbar"
import { Input } from "@/components/ui/input"

export const Register = () => {
    return (
        <>
            <Navbar />
            <div className="w-[1040px] m-auto h-[800px] bg-blue-600">
                <h3>Бүртгүүлэх</h3>
                <div className="w-[334px]">
                    <div>
                        <Input placeholder="Нэр" ></Input>

                    </div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </>
    )
}