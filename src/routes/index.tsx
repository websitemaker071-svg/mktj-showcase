import { createFileRoute } from "@tanstack/react-router";

import workVantage from "../assets/work-vantage.jpg";
import workNorthwind from "../assets/work-northwind.jpg";
import workFrame09 from "../assets/work-frame09.jpg";
import workKettle from "../assets/work-kettle.jpg";
import teamAri from "../assets/team-ari.jpg";
import teamSana from "../assets/team-sana.jpg";
import teamDev from "../assets/team-dev.jpg";
import testimonialLena from "../assets/testimonial-lena.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MKTJ — Creative & Digital Agency" },
      {
        name: "description",
        content:
          "MKTJ is a creative and digital agency. Brand identities, websites, video editing, motion graphics, social media and more.",
      },
      { property: "og:title", content: "MKTJ — Creative & Digital Agency" },
      {
        property: "og:description",
        content:
          "MKTJ is a creative and digital agency. Brand identities, websites, video editing, motion graphics, social media and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-ember/30">
      <Header />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between px-5 h-14 max-w-6xl mx-auto">
        <a href="#" className="font-display text-xl tracking-tight leading-none">
          MKTJ<span className="text-ember">.</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#work" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground transition-colors">
            Studio
          </a>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.18em] bg-ember text-background px-3.5 py-2 rounded-md font-medium hover:bg-ember-soft transition-colors"
          >
            Start
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pt-14 pb-16 overflow-hidden max-w-6xl mx-auto">
      <div className="relative z-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember animate-fadein">
          Creative & Digital Agency — Est. 2019
        </p>
        <h1 className="mt-5 font-display uppercase leading-[0.82] text-balance">
          <span className="block text-[72px] sm:text-[96px] lg:text-[118px] tracking-tight animate-rise">
            MKTJ
          </span>
          <span
            className="block text-[40px] sm:text-[52px] lg:text-[64px] text-ember-gradient tracking-tight animate-rise"
            style={{ animationDelay: "120ms" }}
          >
            Makes
          </span>
          <span
            className="block text-[40px] sm:text-[52px] lg:text-[64px] tracking-tight animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            it bold.
          </span>
        </h1>
        <p
          className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-muted text-pretty animate-rise-fast"
          style={{ animationDelay: "360ms" }}
        >
          Brand identities, websites and motion that refuse to be ignored. We build
          confident work for teams that mean it.
        </p>
        <div
          className="mt-7 flex flex-wrap gap-3 animate-rise-fast"
          style={{ animationDelay: "460ms" }}
        >
          <a
            href="#contact"
            className="bg-ember text-background text-sm font-medium px-5 py-3.5 rounded-lg transition-colors duration-200 hover:bg-ember-soft"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="text-sm font-medium px-5 py-3.5 rounded-lg border border-border transition-colors duration-200 hover:bg-foreground/5"
          >
            See the work
          </a>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ember/7 to-transparent"
        aria-hidden={true}
      />
    </section>
  );
}

const services = [
  {
    num: "01",
    name: "Graphic Design",
    desc: "Logos, brand systems, print and social visuals.",
  },
  {
    num: "02",
    name: "Website Development",
    desc: "Fast, responsive sites and e-commerce builds.",
  },
  {
    num: "03",
    name: "Video Editing",
    desc: "Launch films, reels, ads and social cuts.",
  },
  {
    num: "04",
    name: "Brand Identity",
    desc: "Strategy, naming and complete visual systems.",
  },
  {
    num: "05",
    name: "UI/UX Design",
    desc: "Interfaces and flows for apps and products.",
  },
  {
    num: "06",
    name: "Motion Graphics",
    desc: "Animated titles, explainers and brand loops.",
  },
  {
    num: "07",
    name: "Social Media Marketing",
    desc: "Content planning, posting and campaign design.",
  },
  {
    num: "08",
    name: "SEO & Ads",
    desc: "Search, paid media and conversion tracking.",
  },
];

function Services() {
  return (
    <section id="services" className="px-5 py-14 border-t border-border max-w-6xl mx-auto">
      <span className="font-mono text-[11px] text-muted block mb-4 animate-fadein">
        (01) — Services
      </span>
      <h2 className="font-display uppercase text-4xl leading-[0.9] tracking-tight text-balance animate-rise">
        Everything your brand needs.
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="p-4 rounded-lg bg-foreground/5 outline outline-1 -outline-offset-1 outline-border animate-rise-slow"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <p className="font-mono text-[11px] text-ember">{service.num}</p>
            <h3 className="mt-1.5 font-medium text-[15px]">{service.name}</h3>
            <p className="mt-1 text-[13px] text-muted leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const workItems = [
  {
    image: workVantage,
    title: "Vantage — rebrand",
    category: "Identity",
    aspect: "aspect-[4/5]",
    width: 1024,
    height: 1280,
    offset: false,
  },
  {
    image: workNorthwind,
    title: "Northwind — web",
    category: "Development",
    aspect: "aspect-square",
    width: 1024,
    height: 1024,
    offset: true,
  },
  {
    image: workFrame09,
    title: "Frame 09 — film",
    category: "Motion",
    aspect: "aspect-square",
    width: 1024,
    height: 1024,
    offset: false,
  },
  {
    image: workKettle,
    title: "Kettle — packaging",
    category: "Design",
    aspect: "aspect-[4/5]",
    width: 1024,
    height: 1280,
    offset: true,
  },
];

function Work() {
  return (
    <section id="work" className="px-5 py-14 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-6 animate-fadein">
        <h2 className="font-display uppercase text-4xl tracking-tight">Selected work</h2>
        <span className="font-mono text-[11px] text-muted">(01)</span>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {workItems.map((item, index) => (
          <a
            key={item.title}
            href="#"
            className={`group block animate-rise-slow ${item.offset ? "mt-6" : ""}`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="bg-foreground/5 outline outline-1 -outline-offset-1 outline-border rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                loading="lazy"
                className={`w-full ${item.aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
              />
            </div>
            <p className="mt-2.5 text-sm font-medium leading-tight">{item.title}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {item.category}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

const teamMembers = [
  { image: teamAri, name: "Ari Malik", role: "Director" },
  { image: teamSana, name: "Sana Riaz", role: "Lead dev" },
  { image: teamDev, name: "Dev Kapoor", role: "Motion" },
];

function About() {
  return (
    <section id="about" className="px-5 py-14 border-t border-border max-w-6xl mx-auto">
      <span className="font-mono text-[11px] text-muted block mb-4 animate-fadein">
        (02) — The studio
      </span>
      <h2 className="font-display uppercase text-4xl leading-[0.9] tracking-tight text-balance animate-rise">
        A small team with a loud point of view.
      </h2>
      <p
        className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-muted text-pretty animate-rise"
        style={{ animationDelay: "100ms" }}
      >
        We're designers, developers and editors working as one. No account managers,
        no hand-offs — just the people making your work, from first sketch to final
        cut.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-3 max-w-3xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="animate-rise-slow"
            style={{ animationDelay: `${160 + index * 80}ms` }}
          >
            <div className="aspect-[3/4] bg-foreground/5 outline outline-1 -outline-offset-1 outline-border rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                width={816}
                height={816}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">{member.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="px-5 py-14 border-t border-border max-w-6xl mx-auto">
      <span className="font-mono text-[11px] text-muted block mb-5 animate-fadein">
        (03) — In their words
      </span>
      <blockquote className="animate-rise-slow">
        <p className="font-display uppercase text-3xl leading-[1.05] tracking-tight text-balance">
          "MKTJ gave our brand a spine. It finally looks like who we actually are."
        </p>
        <footer className="mt-5 flex items-center gap-3">
          <div className="size-11 bg-foreground/5 outline outline-1 -outline-offset-1 outline-border rounded-full overflow-hidden">
            <img
              src={testimonialLena}
              alt="Lena Ortiz"
              width={816}
              height={816}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium leading-tight">Lena Ortiz</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Founder, Vantage
            </p>
          </div>
        </footer>
      </blockquote>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-14 border-t border-border max-w-6xl mx-auto">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-ember-deep/40 via-background to-background ring-1 ring-ember/20">
        <div className="px-6 py-10">
          <h2 className="font-display uppercase text-5xl leading-[0.9] tracking-tight text-balance animate-rise">
            Let's make <span className="text-ember-gradient">something</span> loud.
          </h2>
          <p
            className="mt-4 max-w-[32ch] text-[15px] leading-relaxed text-muted text-pretty animate-rise"
            style={{ animationDelay: "100ms" }}
          >
            Tell us what you're building. We reply within two working days.
          </p>
          <a
            href="mailto:hello@mktj.studio"
            className="mt-6 inline-flex items-center gap-2 bg-ember text-background text-sm font-medium px-5 py-3.5 rounded-lg transition-colors duration-200 hover:bg-ember-soft animate-rise"
            style={{ animationDelay: "180ms" }}
          >
            hello@mktj.studio
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-10 border-t border-border max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <a href="#" className="font-display text-lg tracking-tight">
          MKTJ<span className="text-ember">.</span>
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          © 2026 — Made in-house
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        <a href="#" className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-foreground transition-colors">
          Instagram
        </a>
        <a href="#" className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-foreground transition-colors">
          Behance
        </a>
        <a href="#" className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted hover:text-foreground transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
