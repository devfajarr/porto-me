import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-12 py-16 w-full mt-24 bg-zinc-50 dark:bg-zinc-900 border-t-4 border-green-400">
      <div className="font-headline text-[10px] tracking-widest uppercase text-zinc-400 text-center md:text-left">
        ©2026 FAJARCODE. ALL_RIGHTS_RESERVED.
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary-container animate-pulse"></div>
          <span className="font-label text-[8px] tracking-[0.4em] text-primary">
            SYSTEM_NOMINAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
