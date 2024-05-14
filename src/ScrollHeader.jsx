import { useEffect, useState } from "react";

function ScrollHeader() {
  const [ScrollHeader, setScrollHeader] = useState("static");

  useEffect(() => {
    const scrollFunc = () => {
      const scroll = window.scrollY;

      scroll > 200 ? setScrollHeader("fixed") : setScrollHeader("staric");
    };

    window.addEventListener("scroll", scrollFunc);

    return () => window.removeEventListener("scroll", scrollFunc);
  });
  return (
    <header
      className={`h-[10vh] w-screen transition duration-500 flex items-center justify-center bg-slate-500 ${ScrollHeader}`}
    >
      ScrollHeader
    </header>
  );
}

export default ScrollHeader;
