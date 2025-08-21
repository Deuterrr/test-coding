import Navbar from "../../components/Navbar";
import CafeShowcase from "./components/CafeShowcase";
import YearShowcase from "./components/YearShowcase";
import ProductCarousel from "./components/ProductCarousel";
import Footer from "../../components/Footer";

import Welcome from "./components/Welcome";

const Home = () => {
    return (
        <div className="flex flex-col bg-white gap-30">
            <Navbar />
            
            {/* Welcome */}
            <section id="welcome">
                <Welcome />
            </section>

            {/* Our Cafe */}
            <section id="cafe">
                <CafeShowcase />
            </section>

            {/* Our Lineup */}
            <section id="lineup">
                <ProductCarousel />
            </section>

            {/* Our Story */}
            <section id="story">
                <YearShowcase />
            </section>

            {/* Footer */}
            <section id="reachus">
                <Footer />
            </section>
        </div>
    );
};

export default Home;