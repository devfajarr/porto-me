"use client";

import React, { useState, useEffect } from "react";

interface TypewriterHeadingProps {
  line1: string;
  line2: string;
  line3: string;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  line1,
  line2,
  line3,
}) => {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [displayText3, setDisplayText3] = useState("");
  const [isLine1Done, setIsLine1Done] = useState(false);
  const [isLine2Done, setIsLine2Done] = useState(false);
  const [isLine3Done, setIsLine3Done] = useState(false);

  useEffect(() => {
    let currentLine = 1;
    let currentIndex = 0;
    const typingSpeed = 50; // ms per character
    const linePause = 300; // ms pause between lines

    const type = () => {
      if (currentLine === 1) {
        if (currentIndex < line1.length) {
          setDisplayText1(line1.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setIsLine1Done(true);
          currentLine = 2;
          currentIndex = 0;
          setTimeout(type, linePause);
        }
      } else if (currentLine === 2) {
        if (currentIndex < line2.length) {
          setDisplayText2(line2.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setIsLine2Done(true);
          currentLine = 3;
          currentIndex = 0;
          setTimeout(type, linePause);
        }
      } else if (currentLine === 3) {
        if (currentIndex < line3.length) {
          setDisplayText3(line3.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setIsLine3Done(true);
        }
      }
    };

    const startTimeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(startTimeout);
  }, [line1, line2, line3]);

  return (
    <h1 className="font-headline text-3xl sm:text-6xl md:text-[8rem] leading-[0.9] font-bold tracking-tighter mb-12 break-words min-h-[1.2em]">
      {displayText1}
      {isLine1Done && <br />}
      {displayText2 && (
        <>
          <span className="text-primary-container bg-on-surface inline-block px-4">
            {displayText2}
          </span>
          {isLine2Done && <br />}
        </>
      )}
      {displayText3}
    </h1>
  );
};

export default TypewriterHeading;
