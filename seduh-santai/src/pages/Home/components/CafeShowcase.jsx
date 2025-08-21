import { useState } from "react";

import cafeJakarta from "../../../assets/cafe/cafe-jakarta.png"
import cafeBandung from "../../../assets/cafe/cafe-bandung.png"
import cafeBekasi from "../../../assets/cafe/cafe-bekasi.png"

const cafes = [
    {
        id: 1,
        location: "Jakarta, Indonesia",
        story: "A cozy corner where every cup is brewed with warmth and connection.",
        image: cafeJakarta,
    },
    {
        id: 3,
        location: "Bandung, Indonesia",
        story: "Surrounded by greenery, this café lets you sip while nature tells its story.",
        image: cafeBandung,
    },
    {
        id: 2,
        location: "Bekasi, Indonesia",
        story: "Born from street-side energy, this café blends tradition with modern comfort.",
        image: cafeBekasi,
    },
].sort((a, b) => a.id - b.id);

const CafeShowcase = () => {
    const [selectedCafe, setSelectedCafe] = useState(cafes[0]);

    return (
        <div className="h-auto flex flex-col pt-20 px-40">
            <h2 className="text-2xl font-semibold mb-4">Our Cafés</h2>
            <div className="box-border grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr] gap-6">
                {/* Left side list */}
                <div className="flex flex-col gap-4">
                    {cafes.map((cafe) => (
                        <div
                            key={cafe.id}
                            className={`flex items-center gap-4 cursor-pointer py-6 border-b transition 
                            ${selectedCafe.id === cafe.id ? "border-black font-semibold" : "border-gray-300 text-gray-500"}`}
                            onClick={() => setSelectedCafe(cafe)}
                        >
                            <div>
                                <p className="uppercase text-base">{cafe.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side content */}
                <div className="flex flex-col items-start h-fit px-0 md:pl-10">
                    <img
                        src={selectedCafe.image}
                        className="w-full md:h-[400px] object-cover rounded mb-6 bg-amber-200"
                    />
                    <p className="text-base uppercase text-gray-500">{selectedCafe.location}</p>
                    <p className="text-lg mt-4 text-gray-700">{selectedCafe.story}</p>
                </div>
            </div>
        </div>
    );
};

export default CafeShowcase;