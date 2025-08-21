import { useState } from "react";

import team2025 from "../../../assets/team-photo/team-2025.png"
import team2024 from "../../../assets/team-photo/team-2024.png"

const cafes = [
    {
        id: 2,
        year: "2024",
        header: "The First Brew",
        story: "It all began with a simple idea, creating a space where coffee is more than just a drink, it’s a reason to pause, to connect, and to share stories.With nothing but passion and a small corner, we poured our hearts into every cup, believing that even the simplest beginnings can spark something meaningful.",
        image: team2024,
    },
    {
        id: 1,
        year: "2025",
        header: "Brewing Beyond",
        story: `Now, our café has become a gathering place for friends, dreamers, and coffee lovers alike.
                Every aroma, every sip, and every smile remind us why we started.
                Today, we’re not just serving coffee, we’re crafting moments, nurturing connections, and letting the story continue, one cup at a time.`,
        image: team2025,
    },
].sort((a, b) => a.id - b.id);

const YearShowcase = () => {
    const [selectedCafe, setSelectedCafe] = useState(cafes[0]);

    return (
        <div className="h-auto flex flex-col pt-20 px-40 gap-5">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <div className="box-border grid grid-cols-1 gap-12 md:grid-cols-[0.58fr_0.42fr]">
                {/* left */}
                <div className="flex flex-col items-start h-fit">
                    <h3 className="text-4xl font-semibold">{selectedCafe.header}</h3>
                    <p className="text-lg mt-2 mb-8 text-gray-700">{selectedCafe.story}</p>
                    <img
                        src={selectedCafe.image}
                        alt={selectedCafe.name}
                        className="w-full md:h-[400px] object-cover rounded mb-6 bg-amber-200"
                    />
                </div>
                {/* right */}
                <div className="flex flex-col gap-4">
                    {cafes.map((cafe) => (
                        <div
                            key={cafe.id}
                            className={`flex items-center gap-4 cursor-pointer py-6 border-b transition 
                            ${selectedCafe.id === cafe.id ? "border-black font-semibold" : "border-gray-300 text-gray-500"}`}
                            onClick={() => setSelectedCafe(cafe)}
                        >
                            <div>
                                <p className="uppercase text-lg">{cafe.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YearShowcase;