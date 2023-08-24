import menu from "../../img/hamburger-menu-svgrepo-com.svg";
import search from "../../img/search-alt-svgrepo-com.svg";
import cart from "../../img/cart-large-svgrepo-com.svg";

const Header = () => {
  return (
    <header className=" fixed z-[100] w-full p-5 bg-my-bg flex items-center justify-between drop-shadow-header-shadow">
      {/* Header Left */}
      <div className=" flex items-center ">
        <img
          src={menu}
          alt="Menu"
          className=" w-6 h-6 object-contain cursor-pointer"
        />
        <h1 className=" text-base font-bold ml-1">
          DC <span className="  text-purple-950">Creation</span>
        </h1>
        <div className=" flex ml-3 items-center bg-my-bg shadow-md pr-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className=" p-1 pl-3 bor rounded-2xl text-sm shadow-md"
          />
          <img
            src={search}
            alt="Search"
            className=" w-6 h-6 object-contain cursor-pointer ml-1"
          />
        </div>
      </div>
      {/* Header Right */}
      <img
        src={cart}
        alt="Cart"
        className=" w-6 h-6 object-contain cursor-pointe"
      />
    </header>
  );
};

export default Header;
