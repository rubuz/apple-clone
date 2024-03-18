import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="Apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-gray cursor-pointer px-5 text-sm transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search icon" width={18} height={18} />
          <img src={bagImg} alt="bag icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
