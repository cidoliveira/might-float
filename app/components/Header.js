"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-amber-50 px-10  flex justify-between text-black">
      <div className="flex gap-5 items-center">
        <h1>Might Float</h1>
        <button className="hover:bg-[#041a7b] hover:text-white px-5 py-2.5 cursor-pointer">
          Sobre
        </button>
        <button className="hover:bg-[#041a7b] hover:text-white px-5 py-2.5 cursor-pointer">
          Contato
        </button>
        <button className="hover:bg-[#041a7b] hover:text-white px-5 py-2.5 cursor-pointer">
          Ajuda
        </button>
      </div>
      <div className="hidden lg:block">
        <h2 className="py-2.5">{currentDate.toString()}</h2>
      </div>
    </header>
  );
}
