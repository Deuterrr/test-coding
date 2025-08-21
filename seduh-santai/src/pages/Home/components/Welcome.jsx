import { ArrowDownLeft } from "lucide-react";
import coffeeImage from "../../../assets/coffee/cappuccino-shoot.png";

const Welcome = () => {
    return (
        <div className="flex flex-row h-svh bg-white">
            {/* Left side (38%) */}
            <div className="flex flex-[0.5] h-full items-start">
                <img
                    src={coffeeImage}
                    className="w-full md:h-full object-cover bg-amber-200 rounded-r"
                />
            </div>

            {/* Right side (62%) */}
            <div className="flex flex-[0.5] box-border flex-col pt-10 gap-10 justify-end">
                <div className="flex flex-col gap-8 pl-20">
                    <div className="flex flex-col gap-4">
                        <h1 className="leading-[2.5rem] text-5xl font-semibold">
                            One cup
                        </h1>
                        <h1 className="text-5xl font-semibold bg-orange-300 w-fit py-1">
                            Countless stories.
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg">
                            Good Coffee. Good Company.
                        </p>
                        <p className="text-lg">
                            Sit back, sip, and let the moment brew.
                        </p>
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <div className="h-80 w-fit bg-orange-300 rounded-l">
                        <ArrowDownLeft size={64} />
                        <ArrowDownLeft size={64} />
                        <ArrowDownLeft size={64} />
                        <ArrowDownLeft size={64} />
                        <ArrowDownLeft size={64} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;