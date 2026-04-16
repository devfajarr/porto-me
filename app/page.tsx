import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function Home() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary-fixed overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen relative flex flex-col justify-center px-4 md:px-24 pt-20 overflow-hidden"
        >
          {/* Background Layers */}
          <div className="absolute inset-0 grid-hero opacity-40"></div>
          <div className="absolute inset-0 scanline"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hero-glow blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-primary-container"></div>
                <span className="font-label text-xs tracking-[0.2em] uppercase text-outline">
                  INIT_PROTOCOL_V1.0.4
                </span>
              </div>
              <div className="relative">
                {/* Floating Coordinates */}
                <span className="absolute -top-6 left-0 font-label text-[8px] text-primary/40 tracking-[0.5em] hidden sm:block">
                  [ 07° 15' 42" S // 112° 45' 10" E ]
                </span>
                <TypewriterHeading
                  line1="I'M FAJAR,"
                  line2="FREELANCE"
                  line3="WEB DEVELOPER"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8">
                <div className="space-y-6">
                  <p className="max-w-md text-lg text-on-surface-variant leading-relaxed font-light">
                    Engineering high-performance digital ecosystems with surgical
                    precision. Turning abstract concepts into functional,
                    stable-release production environments.
                  </p>
                  <div className="flex gap-2">
                    <span className="font-label text-[10px] text-primary bg-primary-container/10 px-3 py-1 border border-primary/20">
                      BUILD_2024.04
                    </span>
                    <span className="font-label text-[10px] text-outline border border-outline-variant px-3 py-1">
                      SYSTEM_STABLE
                    </span>
                  </div>
                </div>
                <a href="#about" className="group relative flex items-center gap-4 bg-on-surface text-surface-container-lowest px-12 py-7 font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-container hover:text-on-primary-fixed transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    ABOUT_ME
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-xl">
                      arrow_forward
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>

            {/* Decorative Status Panel (Desktop) */}
            <div className="hidden lg:flex flex-col gap-6 w-72 shrink-0">
              <div className="border border-primary-container/20 p-6 bg-surface-container-lowest/5 backdrop-blur-md relative group">
                <div className="absolute top-0 right-0 p-2 font-label text-[8px] text-primary/40 animate-pulse">
                  REC_STREAM
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                    <span className="font-label text-[10px] text-outline uppercase tracking-wider">
                      System_Load
                    </span>
                    <span className="font-headline font-bold text-primary">
                      12.4%
                    </span>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                    <span className="font-label text-[10px] text-outline uppercase tracking-wider">
                      Uptime_Node
                    </span>
                    <span className="font-headline font-bold text-on-surface">
                      99.98%
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-label text-[10px] text-outline uppercase tracking-wider">
                      Core_Temp
                    </span>
                    <span className="font-headline font-bold text-on-surface">
                      OPTIMAL
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex gap-1">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-full h-1 bg-primary-container/20 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-primary-container animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-outline-variant/20 p-5 bg-on-surface/5 backdrop-blur-sm">
                <p className="font-label text-[9px] text-outline uppercase tracking-[0.2em] mb-3">
                  //_LOG_CAPTURE
                </p>
                <div className="font-mono text-[10px] text-on-surface-variant leading-tight space-y-1">
                  <p>{">"} INITIALIZE_FAJARCODE...</p>
                  <p>{">"} BOOT_SUCCESS_200</p>
                  <p className="text-primary animate-pulse">
                    {">"} LISTENING_FOR_PROJECTS_
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Bento Grid */}
        <section
          className="py-32 px-8 md:px-24 bg-surface-container-low"
          id="expertise"
        >
          <div className="mb-20">
            <p className="font-label text-xs tracking-[0.3em] text-primary mb-2 uppercase">
              Core_Competencies
            </p>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight break-words">
              EXPERTISE_MODULES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-white p-6 md:p-12 border-l-4 border-primary-container flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-8">
                  terminal
                </span>
                <h3 className="font-headline text-xl sm:text-3xl font-bold mb-4 break-words">
                  SYSTEM_ARCHITECTURE
                </h3>
                <p className="text-on-surface-variant mb-8">
                  Developing simple and well-structured web systems focused on readability and performance.
                </p>
              </div>
            </div>
            {/* Small Features */}
            <div className="bg-white p-8 flex flex-col justify-between border-t-2 border-outline-variant/10">
              <div>
                <span className="material-symbols-outlined text-2xl text-primary mb-4">
                  android_fingerprint
                </span>
                <h4 className="font-headline text-lg sm:text-xl font-bold mb-2 break-words">
                  INTERFACE_UX
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Designing simple UI with focus on usability and better user experience.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col justify-between border-t-2 border-outline-variant/10">
              <div>
                <span className="material-symbols-outlined text-2xl text-primary mb-4">
                  monitoring
                </span>
                <h4 className="font-headline text-lg sm:text-xl font-bold mb-2 break-words">
                  PERFORMANCE
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Optimizing website performance for faster loading and smoother user experience.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 bg-on-surface p-8 flex items-center justify-between group cursor-pointer hover:bg-primary transition-colors">
              <div className="text-surface-container-lowest">
                <h4 className="font-headline text-xl sm:text-2xl font-bold break-words">
                  NEURAL_DYNAMICS
                </h4>
                <p className="text-sm opacity-60">
                  Hands-on experience building real projects and continuously improving development skills.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary-container text-4xl group-hover:scale-125 transition-transform">
                psychology
              </span>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          className="pb-32 px-8 md:px-24 bg-surface-container-low"
          id="about"
        >
          <div className="mb-20">
            <p className="font-label text-xs tracking-[0.3em] text-primary mb-2 uppercase">
              Biography_Protocol
            </p>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight break-words">
              ABOUT_THE_ARCHITECT
            </h2>
          </div>
          <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline-variant/20 hover:border-primary-container transition-colors">
            <div className="md:col-span-7 p-6 md:p-12 flex flex-col justify-between bg-surface-container-lowest">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-label text-xs text-primary font-bold">
                    00_BIOMETRIC_DATA
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-6 tracking-tight uppercase">
                  Fajar
                </h3>
                <div className="space-y-6 text-on-surface-variant leading-relaxed mb-8">
                  <p>
                    As a web developer, I’m constantly improving my skills by exploring new technologies, reading documentation, and applying what I learn to real projects. I believe consistent learning and deep exploration are key to becoming an adaptive and capable developer in the tech industry.
                  </p>
                  <p>
                    I enjoy solving real-world problems through code and building systems that are not only functional but also efficient and reliable. I’m comfortable working independently or as part of a team, and I’m always open to new challenges that help me grow both technically and professionally.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/10">
                <div>
                  <p className="font-label text-[10px] text-outline uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="font-headline font-bold text-sm">
                    INDONESIA/ID
                  </p>
                </div>
                <div>
                  <p className="font-label text-[10px] text-outline uppercase tracking-widest mb-1">
                    Specialization
                  </p>
                  <p className="font-headline font-bold text-sm">
                    FULL_STACK
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 overflow-hidden h-[400px] md:h-full relative bg-zinc-100">
              <Image
                src="/img/profile.png"
                alt="Portrait of Fajar"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Hover Glow Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              style={{ boxShadow: "inset 0 0 40px rgba(47, 248, 1, 0.1)" }}
            ></div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-32 px-4 md:px-24" id="projects">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="font-label text-xs tracking-[0.3em] text-primary mb-2 uppercase">
                Recent_Deployments
              </p>
              <h2 className="font-headline text-2xl sm:text-5xl font-bold tracking-tight">
                PROJECT_SHOWCASE
              </h2>
            </div>
            <div className="font-label text-[10px] tracking-[0.2em] text-outline text-left sm:text-right leading-relaxed shrink-0">
              TOTAL_PROJECTS: 003
              <br />
              ACTIVE_NODES: 003
            </div>
          </div>
          <div className="space-y-12">
            {/* Project Item 01 */}
            <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline-variant/20 hover:border-primary-container transition-colors">
              <div className="md:col-span-7 overflow-hidden h-[220px] sm:h-[300px] md:h-[400px] relative">
                <Image
                  src="/img/project01.PNG"
                  alt="SIAP POLSA Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="md:col-span-5 p-5 md:p-12 flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-label text-xs text-primary font-bold">
                      01_SIAP_POLSA
                    </span>
                    <a
                      href="https://siap.polsa.ac.id"
                      target="_blank"
                      className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    >
                      open_in_new
                    </a>
                  </div>
                  <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                    ACADEMIC_INTEGRATION_SYSTEM
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    A comprehensive academic management ecosystem engineered for
                    Politeknik Sawunggalih Aji. Facilitating real-time data
                    synchronization between faculty administration and student
                    portals.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    PHP
                  </span>
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    LARAVEL
                  </span>
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    POSTGRESQL
                  </span>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 40px rgba(47, 248, 1, 0.1)" }}
              ></div>
            </div>

            {/* Project Item 02 */}
            <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline-variant/20 hover:border-primary-container transition-colors">
              <div className="md:col-span-5 p-5 md:p-12 flex flex-col justify-between bg-surface-container-lowest order-2 md:order-1">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-label text-xs text-primary font-bold">
                      02_SURPRISE_REGENCY
                    </span>
                    <a
                      href="https://suprise.purworejokab.go.id"
                      target="_blank"
                      className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    >
                      open_in_new
                    </a>
                  </div>
                  <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                    RESEARCH_&_INNOVATION_NODE
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    A centralized digital node for the Purworejo Regency to
                    manage regional research and innovation competitions.
                    Streamlining public submissions and publication protocols.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    PHP
                  </span>
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    LARAVEL
                  </span>
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    FILAMENT
                  </span>
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    MYSQL
                  </span>
                </div>
              </div>
              <div className="md:col-span-7 overflow-hidden h-[220px] sm:h-[300px] md:h-[400px] relative order-1 md:order-2">
                <Image
                  src="/img/project02.PNG"
                  alt="SURPRISE Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 40px rgba(47, 248, 1, 0.1)" }}
              ></div>
            </div>

            {/* Project Item 03 */}
            <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline-variant/20 hover:border-primary-container transition-colors">
              <div className="md:col-span-7 overflow-hidden h-[220px] sm:h-[300px] md:h-[400px] relative">
                <Image
                  src="/img/project03.PNG"
                  alt="LPTNU Website"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="md:col-span-5 p-5 md:p-12 flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-label text-xs text-primary font-bold">
                      03_LPTNU_PURWOREJO
                    </span>
                    <a
                      href="https://lptnupurworejo.or.id/"
                      target="_blank"
                      className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    >
                      open_in_new
                    </a>
                  </div>
                  <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                    INSTITUTIONAL_IDENTITY_BLOCK
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    A robust digital identity deployment for the Nahdlatul Ulama
                    Higher Education Institute. Designed for scalable
                    information delivery and organizational transparency.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    WORDPRESS
                  </span>
                  <span className="font-label text-[10px] uppercase border border-outline-variant px-3 py-1">
                    CMS_STRUCTURE
                  </span>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 40px rgba(47, 248, 1, 0.1)" }}
              ></div>
            </div>
          </div>
          <div className="mt-24 text-center">
            <button className="font-label text-xs tracking-[0.4em] uppercase text-on-surface border-b-4 border-primary-container pb-2 hover:text-primary transition-colors">
              VIEW_FULL_ARCHIVE
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-8 md:px-24 bg-on-surface text-surface-container-lowest overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-12 break-words">
              READY_TO
              <br />
              <span className="text-primary-container">BUILD?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <p className="max-w-xl text-xl opacity-60 leading-relaxed font-light">
                Let’s build something meaningful and impactful together. I turn ideas into functional and reliable digital solutions.
              </p>
              <div className="flex flex-col gap-6">
                <a
                  className="font-headline text-xl sm:text-3xl font-bold border-b border-primary-container pb-2 hover:text-primary-container transition-colors break-all"
                  href="mailto:bayu23404@gmail.com"
                >
                  bayu23404@gmail.com
                </a>
                <div className="flex flex-wrap gap-4 sm:gap-8">
                  <a
                    className="font-label text-[10px] tracking-widest uppercase hover:text-primary-container"
                    target="_blank"
                    href="https://www.instagram.com/fjr.by.timur"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    className="font-label text-[10px] tracking-widest uppercase hover:text-primary-container"
                    target="_blank"
                    href="https://github.com/devfajarr"
                  >
                    GITHUB
                  </a>
                  <a
                    className="font-label text-[10px] tracking-widest uppercase hover:text-primary-container"
                    target="_blank"
                    href="https://wa.me/62895614790050?text=Hallo Bro!!!"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative scanline element */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-container/30"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-primary-container opacity-5"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
