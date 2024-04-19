"use client";
import React, { useEffect, useState } from "react";
function NorifReward() {
  const [NavbarState, setNavbarState] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      // console.log(currentPosition)
      if (currentPosition > 89) {
        setNavbarState(true);
      } else {
        setNavbarState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`text-center ${
        NavbarState ? "fixed top-0" : ""
      } w-full bg-primary-2 h-[3rem] items-center flex justify-center text-neutral-4 font-semibold md:text-[1rem]`}
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.25)",
        zIndex: 10,
      }}
    >
      <p className="font-medium text-[0.8rem]"> Kumpulkan points mu, dapatkan reward menarik dari Batugin!</p>
    </div>
  );
}

export default NorifReward;
