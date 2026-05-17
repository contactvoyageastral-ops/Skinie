import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { ProductCard } from "@/components/ProductCard";

// Hero
import heroImg from "@assets/3_1779037919749.png";

// Lips — Gloss (nouvelles versions)
import lipGlossOrange from "@assets/59c4fac3-d1f4-428e-b0d9-5284b0d0a70b_1779037944813.png";
import lipGlossPink from "@assets/4227e56d-55b3-434f-be45-6946ccf6c0c7_1779037944814.png";
import lipGlossGreen from "@assets/4e36c35a-90a6-4c51-8ec3-ab7e2eb0603a_1779037944814.png";
import lipGlossBlue from "@assets/a404768b-fdb6-4e61-ab92-5a8b2845ac39_1779037944813.png";
import lipGlossBlackberry from "@assets/1c3bf080-ed5f-4384-b027-4b08b7a10c68_1779037951371.png";
import lipGlossStrawberry from "@assets/85178328-3023-4350-bbf4-278c17b6fd29_1779037951371.png";
import lipGlowBalm from "@assets/e9c1a627-ec50-4a2a-ac82-6d937b2f8a2f_1779036890111.png";

// Lip Scrub (nouvelle image)
import lipScrubCollection from "@assets/4_1779037866077.png";

// Skin
import bodyLotion from "@assets/skinie_body_lotion_nobg.png";
import cremeVisage from "@assets/skinie_creme_visage_nobg.png";
import sleepMask from "@assets/skinie_sleep_mask_nobg.png";
import sunscreenStick from "@assets/skinie_sunscreen_stick_nobg.png";
import eyePatches from "@assets/skinie_eye_patches_nobg.png";
import eyePatchesEditorial from "@assets/ee7dd7ca-3a01-448a-994b-924df5a922b7_1779037969858.png";

// Hair (nouvelles bannieres)
import hairCareBanner from "@assets/2_1779037826862.png";
import masqueCheveux from "@assets/09f1c228-e666-4710-a9e6-3837a8198294_1779037841909.png";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Nav />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <img src={heroImg} alt="Skinie Collection" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-background/80" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-6 tracking-tight"
          >
            Glow up<br />every day.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-lg drop-shadow-md"
          >
            Des essentiels doux, gourmands et efficaces. Pour une peau aussi parfaite que votre feed.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.65 }}>
            <a
              href="#shop"
              className="inline-block bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
              data-testid="link-hero-cta"
            >
              Découvrir la collection
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── BESTSELLERS ── */}
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

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <motion.div variants={fadeUp}>
            <ProductCard name="Lip Gloss Strawberry" price={19} image={lipGlossStrawberry} category="Lèvres" bgClass="bg-[#fce4ec]" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ProductCard name="Overnight Sleep Mask" price={32} image={sleepMask} category="Soin" bgClass="bg-[#e0f2fe] p-8 object-contain" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ProductCard name="Soothing Body Lotion" price={25} image={bodyLotion} category="Soin Corps" bgClass="bg-[#dcfce7] p-8 object-contain" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ProductCard name="Lip Glow Balm Mango" price={15} image={lipGlowBalm} category="Lèvres" bgClass="bg-[#fef3c7]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── LIP GLOSS EDITORIAL ── */}
      <section className="py-24 bg-[#faf5f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">Lip Gloss Collection</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Brillance<br />
                <span className="text-primary italic font-serif">Miroir.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Six teintes iridescentes. Une formule non-collante enrichie en huiles végétales pour des lèvres repulpées et irrésistibles.
              </p>
              <div className="flex gap-4">
                <button
                  data-testid="button-shop-gloss"
                  className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
                >
                  Shop Gloss
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: lipGlossPink, alt: "Pastel Pink", offset: false },
                { src: lipGlossBlue, alt: "Sky Blue", offset: true },
                { src: lipGlossOrange, alt: "Copper Orange", offset: false },
                { src: lipGlossBlackberry, alt: "Blackberry", offset: true },
              ].map(({ src, alt, offset }) => (
                <motion.div key={alt} variants={fadeUp} className={offset ? "translate-y-8" : ""}>
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-2xl w-full object-cover aspect-[4/5] hover:-translate-y-2 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Remaining gloss: green + strawberry */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8 max-w-xl mx-auto"
          >
            {[
              { src: lipGlossGreen, alt: "Pastel Green" },
              { src: lipGlossStrawberry, alt: "Strawberry" },
            ].map(({ src, alt }) => (
              <motion.div key={alt} variants={fadeUp}>
                <img src={src} alt={alt} className="rounded-2xl w-full object-cover aspect-[4/5] hover:-translate-y-2 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LIP SCRUB COLLECTION ── */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Lip Scrub</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Exfoliant Gourmand</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              6 saveurs irrésistibles pour des lèvres douces, lisses et hydratées. À croquer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img src={lipScrubCollection} alt="Lip Scrub Collection — 6 saveurs" className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center gap-3 px-6">
              {["Peach — 16€", "Strawberry — 16€", "Blueberry — 16€", "Vanilla — 16€", "Mint — 16€", "Blackberry — 16€"].map((label) => (
                <span key={label} className="bg-white/90 backdrop-blur-sm text-foreground text-sm font-semibold px-4 py-2 rounded-full shadow">
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              data-testid="button-shop-lip-scrub"
              className="bg-foreground text-background px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Découvrir la gamme
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── SKINCARE ── */}
      <section className="py-24 md:py-32 bg-[#fdf8f4] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Soin Visage & Corps</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Soin Céleste</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Des textures aériennes qui fondent sur la peau.</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { img: cremeVisage, name: "Crème Légère Visage", desc: "Hydratation 24h, fini velouté.", price: "28€", bg: "from-orange-50 to-rose-100" },
              { img: sunscreenStick, name: "Sunscreen Stick SPF50", desc: "Protection invisible on-the-go.", price: "22€", bg: "from-yellow-50 to-amber-100" },
              { img: sleepMask, name: "Overnight Sleep Mask", desc: "Nuit réparatrice, peau repulpée.", price: "32€", bg: "from-blue-50 to-indigo-100" },
              { img: bodyLotion, name: "Soothing Body Lotion", desc: "Lotion corps fondante au toucher.", price: "25€", bg: "from-green-50 to-teal-100" },
            ].map(({ img, name, desc, price, bg }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${bg} rounded-[2rem] p-8 flex flex-col items-center text-center gap-5`}
              >
                <img src={img} alt={name} className="h-52 object-contain drop-shadow-xl" />
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{desc}</p>
                  <span className="font-sans font-semibold text-lg">{price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 24K GOLD EYE PATCHES — HERO PRODUCT ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img src={eyePatchesEditorial} alt="24K Gold Eye Patches" className="w-full h-full object-cover object-center min-h-[500px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#fdf6e3] flex flex-col justify-center px-12 md:px-16 py-20 gap-8"
          >
            <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase">Édition Prestige</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              24K Gold<br />Eye Patches
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Plaqués or 24 carats et chargés en hyaluronique, ces patches effacent les cernes et repulpent le contour de l'oeil en 10 minutes chrono.
            </p>
            <div className="flex items-center gap-6">
              <img src={eyePatches} alt="Packaging Eye Patches" className="h-28 object-contain drop-shadow-xl" />
              <div>
                <p className="text-3xl font-bold">45€</p>
                <p className="text-muted-foreground">6 paires</p>
              </div>
            </div>
            <button
              data-testid="button-buy-eye-patches"
              className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors w-fit"
            >
              Ajouter au panier
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── HAIRCARE ── */}
      <section id="routines" className="py-24 bg-[#fff0f3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Hair Care Botanique</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Good Hair Days.<br />Every Day.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              La puissance des plantes pour des cheveux forts, brillants et en pleine santé.
            </p>
          </motion.div>

          {/* Main banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-10"
          >
            <img src={hairCareBanner} alt="Skinie Hair Care — Gélules, Baume, Huile" className="w-full object-cover" />
          </motion.div>

          {/* Product list + masque editorial */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                { name: "Gélules Pousse", sub: "Plantes + Biotine + Zinc — 60 gélules végétales", price: "35€" },
                { name: "Baume Réparateur Pointes", sub: "Aloe vera · Beurre de karité · Huile de jojoba", price: "22€" },
                { name: "Huile Nourrissante Cheveux", sub: "Huile d'argan · Amande douce · Vitamine E", price: "28€" },
                { name: "Masque Cheveux Nourrissant", sub: "Nourrit, répare & apporte de la brillance", price: "30€" },
              ].map(({ name, sub, price }) => (
                <div key={name} className="flex justify-between items-start border-b border-pink-200 pb-5 gap-4">
                  <div>
                    <p className="font-display font-bold text-lg">{name}</p>
                    <p className="text-muted-foreground text-sm mt-1">{sub}</p>
                  </div>
                  <span className="font-semibold text-lg shrink-0">{price}</span>
                </div>
              ))}
              <button
                data-testid="button-shop-haircare"
                className="mt-4 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
              >
                Découvrir la gamme
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img src={masqueCheveux} alt="Masque Cheveux Nourrissant" className="w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ROUTINE QUOTE ── */}
      <section className="py-32 px-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="font-serif italic text-3xl md:text-5xl text-primary mb-8">Le Rituel Skinie</h2>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-foreground/90 font-medium">
            "Prendre soin de soi ne devrait jamais être une corvée. C'est un moment doux, une pause sucrée, une bulle pastel dans une journée chargée."
          </p>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
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
                data-testid="input-newsletter-email"
                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex-1 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
              />
              <button
                data-testid="button-newsletter-join"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="#shop" className="hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lèvres</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soin Visage</a></li>
              <li><a href="#routines" className="hover:text-primary transition-colors">Cheveux</a></li>
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
