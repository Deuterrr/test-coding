import { motion } from "framer-motion";

import product1 from "../../../assets/products/cappuccino.png";
import product2 from "../../../assets/products/americano.png";
import product3 from "../../../assets/products/expresso.png";
import product4 from "../../../assets/products/latte.png";

const products = [
  { src: product1, title: "Cappuccino" },
  { src: product2, title: "Americano" },
  { src: product3, title: "Espresso" },
  { src: product4, title: "Latte" },
];

const ProductCarousel = () => {
  // total width (4 products * 320px + 4 gaps * 24px = 1376px)
  const totalWidth = 1376;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-center">
        <h2 className="text-2xl font-semibold">Our Lineup</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -totalWidth * 2] }} // move through two sets of products
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120, // -> 2 mins per cycle
              ease: "linear",
            },
          }}
        >
          {[...products, ...products, ...products, ...products].map((product, i) => (
            <div key={i} className="flex-shrink-0 w-80">
              <img
                src={product.src}
                alt={product.title}
                className="h-80 w-full object-cover rounded"
              />
              <h3 className="mt-2 text-center text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCarousel;