import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { ProductCard } from "@/components/ProductCard";

// Hero
import heroImg from "@assets/3_1779037919749.png";

// Lips — Gloss (4 gardés)
import lipGlossOrange from "@assets/59c4fac3-d1f4-428e-b0d9-5284b0d0a70b_1779037944813.png";
import lipGlossPink from "@assets/4227e56d-55b3-434f-be45-6946ccf6c0c7_1779037944814.png";
import lipGlossBlue from "@assets/a404768b-fdb6-4e61-ab92-5a8b2845ac39_1779037944813.png";
import lipGlossBlackberry from "@assets/1c3bf080-ed5f-4384-b027-4b08b7a10c68_1779037951371.png";
import lipGlossStrawberry from "@assets/85178328-3023-4350-bbf4-278c17b6fd29_1779037951371.png";
import lipGlowBalm from "@assets/e9c1a627-ec50-4a2a-ac82-6d937b2f8a2f_1779036890111.png";

// Lip Scrub
import lipScrubCollection from "@assets/4_1779037866077.png";

// Skin
import bodyLotion from "@assets/skinie_body_lotion_nobg.png";
import cremeVisage from "@assets/skinie_creme_visage_nobg.png";
import sleepMask from "@assets/skinie_sleep_mask_nobg.png";
import sunscreenStick from "@assets/skinie_sunscreen_stick_nobg.png";
import eyePatches from "@assets/skinie_eye_patches_nobg.png";
import eyePatchesEditorial from "@assets/ee7dd7ca-3a01-448a-994b-924df5a922b7_1779037969858.png";

// Hair
import hairCareBanner from "@assets/2_1779037826862.png";
import masqueCheveux from "@assets/09f1c228-e666-4710-a9e6-3837a8198294_1779037841909.png";

/* ─── Animation helpers ─── */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease } },
};

const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: delay } },
});

function RevealSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      variants={stagger(0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Nav />

      {/* ══ HERO — image seule, aucun texte ══ */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, scale: heroScale }}>
          <img
            src={heroImg}
            alt="Skinie Collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-background/60" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease, delay: 0.2 }}
          className="pointer-events-none absolute left-8 top-36 z-10 max-w-[11rem] md:left-10 md:top-[19%] md:max-w-[18rem]"
        >
          <h1 className="font-display text-4xl font-bold leading-[0.9] text-foreground/90 drop-shadow-[0_2px_14px_rgba(255,255,255,0.8)] md:text-6xl">
            Skinie
            <span className="block font-serif italic font-normal text-primary/90">
              Aesthetic
            </span>
          </h1>
          <p className="mt-4 max-w-[9rem] text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-foreground/65 drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)] md:mt-5 md:max-w-[15rem] md:text-xs">
            Glow doux, textures pastel, rituels sensoriels.
          </p>
          <p className="mt-3 max-w-[10rem] text-xs leading-relaxed text-foreground/70 drop-shadow-[0_1px_12px_rgba(255,255,255,0.95)] md:max-w-[16rem] md:text-base">
            Des essentiels soin, lèvres et cheveux pensés comme une pause solaire.
          </p>
        </motion.div>
      </section>

      {/* ══ BESTSELLERS ══ */}
      <section id="shop" className="py-28 md:py-36 px-4 md:px-8 max-w-7xl mx-auto">
        <RevealSection className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Coup de cœur
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mb-4">
            L'Obsession du Moment
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Les favoris absolus. Ceux dont tout le monde parle.
          </motion.p>
        </RevealSection>

        <RevealSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Lip Gloss Strawberry", price: 19, image: lipGlossStrawberry, category: "Lèvres", bgClass: "bg-[#fce4ec]" },
            { name: "Overnight Sleep Mask", price: 32, image: sleepMask, category: "Soin", bgClass: "bg-[#e0f2fe] p-8 object-contain" },
            { name: "Soothing Body Lotion", price: 25, image: bodyLotion, category: "Soin Corps", bgClass: "bg-[#dcfce7] p-8 object-contain" },
            { name: "Lip Glow Balm Mango", price: 15, image: lipGlowBalm, category: "Lèvres", bgClass: "bg-[#fef3c7]" },
          ].map((p) => (
            <motion.div key={p.name} variants={fadeUp}>
              <ProductCard {...p} />
            </motion.div>
          ))}
        </RevealSection>
      </section>

      {/* ══ LIP GLOSS EDITORIAL — 4 teintes ══ */}
      <section className="py-24 bg-[#faf5f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection className="space-y-8">
              <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest text-primary uppercase">
                Lip Gloss Collection
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Brillance<br />
                <span className="text-primary italic font-serif">Miroir.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-md">
                Quatre teintes iridescentes. Une formule non-collante enrichie en huiles végétales pour des lèvres repulpées et irrésistibles.
              </motion.p>
              <motion.div variants={fadeUp}>
                <motion.button
                  data-testid="button-shop-gloss"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
                >
                  Shop Gloss
                </motion.button>
              </motion.div>
            </RevealSection>

            <RevealSection className="grid grid-cols-2 gap-4">
              {[
                { src: lipGlossPink, alt: "Pastel Pink", offset: false },
                { src: lipGlossBlue, alt: "Sky Blue", offset: true },
                { src: lipGlossOrange, alt: "Copper Orange", offset: false },
                { src: lipGlossBlackberry, alt: "Blackberry", offset: true },
              ].map(({ src, alt, offset }) => (
                <motion.div key={alt} variants={fadeUp} className={offset ? "translate-y-8" : ""}>
                  <motion.img
                    src={src}
                    alt={alt}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="rounded-2xl w-full object-cover aspect-[4/5] cursor-pointer"
                  />
                </motion.div>
              ))}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══ LIP SCRUB — bannière seule ══ */}
      <section className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 1.1, ease }}
        >
          <img
            src={lipScrubCollection}
            alt="Lip Scrub Collection"
            className="w-full object-cover"
            data-testid="img-lip-scrub-banner"
          />
        </motion.div>
      </section>

      {/* ══ SKINCARE ══ */}
      <section className="py-28 md:py-36 bg-[#fdf8f4] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Soin Visage & Corps
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mb-4">
              Soin Céleste
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des textures aériennes qui fondent sur la peau.
            </motion.p>
          </RevealSection>

          <RevealSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: cremeVisage, name: "Crème Légère Visage", desc: "Hydratation 24h, fini velouté.", price: "28€", bg: "from-orange-50 to-rose-100" },
              { img: sunscreenStick, name: "Sunscreen Stick SPF50", desc: "Protection invisible on-the-go.", price: "22€", bg: "from-yellow-50 to-amber-100" },
              { img: sleepMask, name: "Overnight Sleep Mask", desc: "Nuit réparatrice, peau repulpée.", price: "32€", bg: "from-blue-50 to-indigo-100" },
              { img: bodyLotion, name: "Soothing Body Lotion", desc: "Lotion corps fondante au toucher.", price: "25€", bg: "from-green-50 to-teal-100" },
            ].map(({ img, name, desc, price, bg }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -12, boxShadow: "0 24px 60px -12px rgba(0,0,0,0.18)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`bg-gradient-to-br ${bg} rounded-[2rem] p-8 flex flex-col items-center text-center gap-5 cursor-pointer`}
              >
                <motion.img
                  src={img}
                  alt={name}
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="h-52 object-contain drop-shadow-xl"
                />
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{desc}</p>
                  <span className="font-sans font-semibold text-lg">{price}</span>
                </div>
              </motion.div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* ══ 24K GOLD EYE PATCHES ══ */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden"
          >
            <motion.img
              src={eyePatchesEditorial}
              alt="24K Gold Eye Patches"
              className="w-full h-full object-cover object-center min-h-[500px]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8, ease }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease }}
            className="bg-[#fdf6e3] flex flex-col justify-center px-12 md:px-16 py-20 gap-8"
          >
            <p className="text-xs font-bold tracking-widest text-amber-500 uppercase">Édition Prestige</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              24K Gold<br />Eye Patches
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Plaqués or 24 carats et chargés en acide hyaluronique, ces patches effacent les cernes et repulpent le contour de l'oeil en 10 minutes chrono.
            </p>
            <div className="flex items-center gap-6">
              <motion.img
                src={eyePatches}
                alt="Packaging Eye Patches"
                whileHover={{ rotate: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="h-28 object-contain drop-shadow-xl"
              />
              <div>
                <p className="text-3xl font-bold">45€</p>
                <p className="text-muted-foreground">6 paires</p>
              </div>
            </div>
            <motion.button
              data-testid="button-buy-eye-patches"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors w-fit"
            >
              Ajouter au panier
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══ HAIRCARE ══ */}
      <section id="routines" className="py-24 bg-[#fff0f3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RevealSection className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Hair Care Botanique
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mb-4">
              Good Hair Days.<br />Every Day.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-xl mx-auto">
              La puissance des plantes pour des cheveux forts, brillants et en pleine santé.
            </motion.p>
          </RevealSection>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-10"
          >
            <motion.img
              src={hairCareBanner}
              alt="Skinie Hair Care — Gélules, Baume, Huile"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease }}
              className="w-full object-cover"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <RevealSection className="space-y-5">
              {[
                { name: "Gélules Pousse", sub: "Plantes + Biotine + Zinc — 60 gélules végétales", price: "35€" },
                { name: "Baume Réparateur Pointes", sub: "Aloe vera · Beurre de karité · Huile de jojoba", price: "22€" },
                { name: "Huile Nourrissante Cheveux", sub: "Huile d'argan · Amande douce · Vitamine E", price: "28€" },
                { name: "Masque Cheveux Nourrissant", sub: "Nourrit, répare & apporte de la brillance", price: "30€" },
              ].map(({ name, sub, price }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="flex justify-between items-start border-b border-pink-200 pb-5 gap-4"
                >
                  <div>
                    <p className="font-display font-bold text-lg">{name}</p>
                    <p className="text-muted-foreground text-sm mt-1">{sub}</p>
                  </div>
                  <span className="font-semibold text-lg shrink-0">{price}</span>
                </motion.div>
              ))}
              <motion.div variants={fadeUp}>
                <motion.button
                  data-testid="button-shop-haircare"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-4 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
                >
                  Découvrir la gamme
                </motion.button>
              </motion.div>
            </RevealSection>

            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
            >
              <motion.img
                src={masqueCheveux}
                alt="Masque Cheveux Nourrissant"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease }}
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ ROUTINE QUOTE ══ */}
      <section className="py-32 px-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease }}
        >
          <motion.h2
            className="font-serif italic text-3xl md:text-5xl text-primary mb-8"
            variants={fadeIn}
          >
            Le Rituel Skinie
          </motion.h2>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-foreground/90 font-medium">
            "Prendre soin de soi ne devrait jamais être une corvée. C'est un moment doux, une pause sucrée, une bulle pastel dans une journée chargée."
          </p>
        </motion.div>
      </section>

      {/* ══ FOOTER ══ */}
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
              <motion.button
                data-testid="button-newsletter-join"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
              >
                Join
              </motion.button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-background/70">
              {["Shop All", "Lèvres", "Soin Visage", "Cheveux"].map((l) => (
                <li key={l}>
                  <a href="#shop" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">About</h4>
            <ul className="space-y-4 text-background/70">
              {["Notre Histoire", "Ingrédients", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-background/50">
          <p>© 2026 Skinie Paris. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Instagram", "TikTok", "Pinterest"].map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
