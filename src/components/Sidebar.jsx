import { NavLink } from "react-router-dom";
import { TbHexagonLetterTFilled } from "react-icons/tb";

function Sidebar() {
  return (
    <aside className="h-screen grid justify-items-around border-r-[1px] border-r-black w-[20vw] bg-red-400">
      <section className="h-[10vh] flex justify-center items-center">
        <h1 className="text-2xl font-bold flex items-center justify-center w-[20vw] text-white">
          <TbHexagonLetterTFilled className="text-blue-900" />
          TONADELL
        </h1>
      </section>

      <nav className="pt-10 h-[90vh] grid justify-items-center content-start gap-7">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products/shoes">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
