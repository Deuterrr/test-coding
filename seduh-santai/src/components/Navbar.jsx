const Navbar = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-row items-center justify-between px-40 fixed w-full h-20 
                        bg-white/60 backdrop-blur-md z-50">
            <div className="w-36">
                <p className="text-2xl font-semibold">Seduh Santai</p>
            </div>
            <nav className="navigations flex flex-row text-base font-medium">
                <ul className="flex space-x-10">
                    <li>
                        <p
                            onClick={() => handleScroll("welcome")}
                            className="text-lg cursor-pointer hover:text-gray-700 transition"
                        >
                        Welcome
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => handleScroll("story")}
                            className="text-lg cursor-pointer hover:text-gray-700 transition"
                        >
                        Our Story
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => handleScroll("cafe")}
                            className="text-lg cursor-pointer hover:text-gray-700 transition"
                        >
                        Our Café
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => handleScroll("reachus")}
                            className="text-lg cursor-pointer hover:text-gray-700 transition"
                        >
                        Reach Us
                        </p>
                    </li>
                </ul>
            </nav>
            <div className="w-28 flex justify-end">
                <p className="text-lg font-semibold">En</p>
            </div>
        </div>
    );
};

export default Navbar;