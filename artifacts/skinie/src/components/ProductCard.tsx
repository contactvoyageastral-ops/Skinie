import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
  bgClass?: string;
}

export function ProductCard({ name, price, image, category, bgClass = "bg-muted" }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer flex flex-col gap-4"
    >
      <div className={`aspect-[4/5] overflow-hidden rounded-2xl relative ${bgClass}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="bg-background/90 backdrop-blur-md text-foreground px-6 py-2 rounded-full text-sm font-semibold hover:bg-background transition-colors shadow-sm">
            Ajouter au panier
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {category && <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{category}</span>}
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-display font-medium text-lg leading-tight">{name}</h3>
          <span className="font-sans font-medium text-lg">{price}€</span>
        </div>
      </div>
    </motion.div>
  );
}
