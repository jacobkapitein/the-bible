"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { BookSelectorBar } from "@/layouts/BookSelectorBar";

export const Topbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos]);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 bg-gray-50 h-fit z-10 transition-transform duration-300 flex flex-col shadow-md items-center",
        {
          "transform -translate-y-16": window.innerWidth <= 768 && !visible,
        }
      )}
    >
      <div className="max-w-[70rem] w-full">
        <div className="h-16 flex items-center px-2">
          <h1 className="text-3xl font-semibold">Statenvertaling</h1>
        </div>
      </div>
      <BookSelectorBar />
    </div>
  );
};
