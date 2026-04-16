"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when section is in the middle
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.slice(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full max-w-[100vw] z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md flex justify-between items-center px-4 md:px-8 py-6 mx-auto">
      <div className="font-headline font-bold text-xl tracking-tighter text-zinc-900 dark:text-white">
        FAJARCODE
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <a
              key={link.name}
              href={link.href}
              className={`font-headline uppercase tracking-widest text-xs transition-all duration-300 ${
                isActive
                  ? "text-green-600 dark:text-green-400 border-b-2 border-green-400 pb-1"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      <button className="bg-primary-container text-on-primary-fixed px-6 py-2 font-headline font-bold uppercase text-xs tracking-widest hover:opacity-70 transition-opacity neon-glow">
        HIRE_ME
      </button>
    </nav>
  );
};

export default Navbar;
