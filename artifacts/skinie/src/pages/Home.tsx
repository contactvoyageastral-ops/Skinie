import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { ProductCard } from "@/components/ProductCard";

// Asset Imports
import heroImg from "@assets/ChatGPT_Image_17_mai_2026,_17_10_56_1779036890113.png";

// Lips
import lipGlossOrange from "@assets/59c4fac3-d1f4-428e-b0d9-5284b0d0a70b_1779036890109.png";
import lipGlossPink from "@assets/4227e56d-55b3-434f-be45-6946ccf6c0c7_1779036890110.png";
import lipGlossGreen from "@assets/4e36c35a-90a6-4c51-8ec3-ab7e2eb0603a_1779036890110.png";
import lipGlossBlue from "@assets/a404768b-fdb6-4e61-ab92-5a8b2845ac39_1779036890110.png";
import lipGlossBlackberry from "@assets/1c3bf080-ed5f-4384-b027-4b08b7a10c68_1779036890112.png";
import lipGlossStrawberry from "@assets/85178328-3023-4350-bbf4-278c17b6fd29_1779036890112.png";
import lipGlowBalm from "@assets/e9c1a627-ec50-4a2a-ac82-6d937b2f8a2f_1779036890111.png";
import lipScrub from "@assets/17f8b1db-97cc-4890-8773-5d33847ad7f0_1779036890111.png";

// Skin
import bodyLotion from "@assets/skinie_body_lotion_nobg.png";
import cremeVisage from "@assets/skinie_creme_visage_nobg.png";
import sleepMask from "@assets/skinie_sleep_mask_nobg.png";
import sunscreenStick from "@assets/skinie_sunscreen_stick_nobg.png";
import eyePatchesEditorial from "@assets/ee7dd7ca-3a01-448a-994b-924df5a922b7_1779036890112.png";
import eyePatches from "@assets/skinie_eye_patches_nobg.png";

// Hair
import hairCareCapsules from "@assets/4f7e5fa6-276b-4128-97a2-afcbe3daadbf_1779036890111.png";
import masqueCheveux from "@assets/09f1c228-e666-4710-a9e6-3837a8198294_1779036890111.png";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Nav />

      {/* HERO SECTION */}
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src={heroImg} 
            alt="Skinie Lineup" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/90" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-6 tracking-tight"
          >
            Glow up<br />every day.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-lg drop-shadow-md"
          >
            Des essentiels doux, gourmands et efficaces. Pour une peau aussi parfaite que votre feed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a 
              href="#shop" 
              className="inline-block bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
            >
              Découvrir la collection
            </a>
          </motion.div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section id="shop" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">L'Obsession du Moment</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Les favoris absolus. Ceux dont tout le monde parle.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ProductCard 
            name="Lip Gloss Strawberry" 
            price={19} 
            image={lipGlossStrawberry} 
            category="Lèvres"
            bgClass="bg-[#fce4ec]"
          />
          <ProductCard 
            name="Overnight Sleep Mask" 
            price={32} 
            image={sleepMask} 
            category="Soin"
            bgClass="bg-[#e0f2fe] p-8 object-contain"
          />
          <ProductCard 
            name="Soothing Body Lotion" 
            price={25} 
            image={bodyLotion} 
            category="Soin Corps"
            bgClass="bg-[#dcfce7] p-8 object-contain"
          />
          <ProductCard 
            name="Lip Glow Balm Mango" 
            price={15} 
            image={lipGlowBalm} 
            category="Lèvres"
            bgClass="bg-[#fef3c7]"
          />
        </div>
      </section>

      {/* LIP GLOSS EDITORIAL */}
      <section className="py-24 bg-[#faf5f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Brillance<br />
                <span className="text-primary italic font-serif">Miroir.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Six teintes. Six saveurs gourmandes. Une formule non-collante enrichie en huiles végétales pour des lèvres repulpées et irrésistibles.
              </p>
              <div className="flex gap-4">
                <button className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors">
                  Shop Gloss
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={lipGlossPink} alt="Pastel Pink" className="rounded-2xl w-full object-cover aspect-[4/5] hover:-translate-y-2 transition-transform duration-500" />
              <img src={lipGlossBlue} alt="Sky Blue" className="rounded-2xl w-full object-cover aspect-[4/5] translate-y-8 hover:translate-y-4 transition-transform duration-500" />
              <img src={lipGlossOrange} alt="Copper Orange" className="rounded-2xl w-full object-cover aspect-[4/5] hover:-translate-y-2 transition-transform duration-500" />
              <img src={lipGlossBlackberry} alt="Blackberry" className="rounded-2xl w-full object-cover aspect-[4/5] translate-y-8 hover:translate-y-4 transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKINCARE */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Soin Céleste</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Des textures aériennes qui fondent sur la peau.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-[2rem] p-10 flex flex-col items-center text-center gap-6"
            >
              <img src={cremeVisage} alt="Crème Légère" className="h-64 object-contain drop-shadow-xl" />
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Crème Légère Visage</h3>
                <p className="text-muted-foreground mb-4">Hydratation 24h, fini velouté.</p>
                <span className="font-sans font-medium text-xl">28€</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-[2rem] p-10 flex flex-col items-center text-center gap-6 md:-translate-y-8"
            >
              <img src={sunscreenStick} alt="Sunscreen Stick" className="h-64 object-contain drop-shadow-xl" />
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Sunscreen Stick SPF50</h3>
                <p className="text-muted-foreground mb-4">Protection invisible on-the-go.</p>
                <span className="font-sans font-medium text-xl">22€</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[2rem] p-10 flex flex-col items-center text-center gap-6"
            >
              <img src={eyePatches} alt="Eye Patches" className="h-64 object-contain drop-shadow-xl" />
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">24K Gold Eye Patches</h3>
                <p className="text-muted-foreground mb-4">Regard défatigué en 10 min.</p>
                <span className="font-sans font-medium text-xl">45€</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HAIRCARE */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src={masqueCheveux} alt="Hair Mask" className="rounded-[2rem] w-full shadow-2xl" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold">Good Hair Days. <br/>Every Day.</h2>
              <p className="text-lg text-muted-foreground">
                Notre gamme capillaire répare, nourrit et parfume délicatement vos cheveux avec des notes de fraise et de vanille. 
              </p>
              <ul className="space-y-4 py-4">
                <li className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium text-lg">Hair Care Capsules</span>
                  <span>35€</span>
                </li>
                <li className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium text-lg">Masque Nourrissant</span>
                  <span>30€</span>
                </li>
                <li className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium text-lg">Huile Soyeuse</span>
                  <span>28€</span>
                </li>
              </ul>
              <button className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform w-full sm:w-auto">
                Découvrir la gamme
              </button>
            </motion.div>
           </div>
        </div>
      </section>

      {/* ROUTINE TEXT */}
      <section id="routines" className="py-32 px-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif italic text-3xl md:text-5xl text-primary mb-8">Le Rituel Skinie</h2>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-foreground/90 font-medium">
            "Prendre soin de soi ne devrait jamais être une corvée. C'est un moment doux, une pause sucrée, une bulle pastel dans une journée chargée."
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-6">Skinie</h3>
            <p className="text-background/70 mb-8 max-w-sm">
              Rejoignez le club. Inscrivez-vous pour des lancements exclusifs, des surprises pastel et des conseils glow.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex-1 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lèvres</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soin Visage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cheveux</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">About</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Notre Histoire</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ingrédients</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-background/50">
          <p>© 2026 Skinie Paris. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
